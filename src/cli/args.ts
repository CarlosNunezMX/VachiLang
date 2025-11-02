import { parseArgs } from "node:util";
export function parseCLIArgs(argv: string[]) {
  const args = parseArgs({
    args: argv.slice(2),
    options: {
      file: {
        type: "string",
        short: "f",
        default: "source.vachi",
      },
      output: {
        type: "string",
        short: "o",
        default: "output.asm",
      },
      help: {
        type: "boolean",
        short: "h",
        default: false,
      },
    },
  });
  return args;
}
