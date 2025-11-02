import route from "./src/cli/router";

if (Bun.isMainThread) {
  await route();
} else {
  throw new Error("This module is intended to be run as the main thread.");
}
