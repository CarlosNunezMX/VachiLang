import main from ".";
import { parseCLIArgs } from "./args";

export default async function route() {
  const args = parseCLIArgs(Bun.argv);
  if (!args.values.help)
    return await main(args.values.file, args.values.output);
  console.log(`Usage: vachilang [options]
Options:
    -f, --file <path>      Specify the source file (default: source.vachi)
    -o, --output <path>    Specify the output file (default: output.asm)
    -h, --help             Show this help message`);
}
