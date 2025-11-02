import ora from "ora";
import { build } from "bun";

import { chmodSync, copyFileSync } from "node:fs";
import { homedir } from "node:os";

const spinner = ora("Building project...").start();

const built = await build({
  entrypoints: ["index.ts"],
  outdir: "dist",
  footer: "// (c) Anglochas & CarlosNunezmx",
  minify: true,
  target: "bun",
  banner: "#!/usr/bin/env bun",
  external: [],
  sourcemap: false,
});

if (!built.success || !built.outputs[0]) {
  spinner.fail("Build failed.");
  console.error(built.logs);
  process.exit(-1);
}

spinner.succeed("Build succeeded.");
spinner.start("Setting permissions...");
// Set execute permissions on the built file with node
chmodSync("dist/index.js", 0o755);
spinner.succeed("Permissions set.");
spinner.start("Installing as user...");
// Copy the built file to $HOME/.local/bin/vachilang
copyFileSync("dist/index.js", `${homedir()}/.local/bin/vachilang`);

spinner.succeed("Installed as user.");
spinner.stop();
