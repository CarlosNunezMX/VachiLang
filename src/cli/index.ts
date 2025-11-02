import ora from "ora";
import Token, { type TokenKeys } from "../core/token";
import validatorsMap from "../validators/index";
import ValidationError from "../errors/ValidationError";

function showCodeError(error: ValidationError, file: string) {
  const lines = file.split("\n");
  const errorLine = lines[error.line + 1] || "";
  console.error(`\n${error.toString()}`);
  console.error(`> ${errorLine}`);
}

export default async function main(filePath: string, outputPath: string) {
  const spinner = ora("Opening file...").start();
  const file = Bun.file(filePath);
  if (!(await file.exists())) {
    spinner.fail(`File not found: ${filePath}`);
    return;
  }
  spinner.text = "Reading file...";
  const content = await file.text();
  spinner.succeed("File read successfully.");

  spinner.start("Tokenizing...");
  const tokens = Token.tokenize(content);
  spinner.succeed(`Tokenized ${tokens.length} tokens.`);

  spinner.start("Translating tokens...");
  const Translator = (await import("../translator")).default;
  const translator = new Translator(validatorsMap);
  try {
    const translated = translator.translate(tokens);
    spinner.succeed("All tokens translated successfully.");
    spinner.start("Writing output file...");
    await Bun.write(outputPath, translated.join("\n"));
    spinner.succeed(`Output written to ${outputPath}`);
    return;
  } catch (error) {
    spinner.fail(`Validation error`);
    if (error instanceof ValidationError) showCodeError(error, content);
    return;
  }
}
