import type Token from "./token";
import type { TokenKeys } from "./token";
import type Validator from "./validators";

export default abstract class TokenTranslator {
  static translate(token: Token<TokenKeys>) {
    const tokenTranslation = token.translation;
    const args = token.args;
    // remove & from args
    const tokens = args
      .map((arg) => arg.replaceAll("&", ""))
      .map((arg) => {
        const n = Number(arg);
        // now convert that number to 32-bit binary
        const binary = n.toString(2).padStart(32, "0");
        return binary;
      })
      // now fill array until length is 3 with 32-bit binary of 0
      .concat(
        Array(Math.max(0, 3 - args.length)).fill(
          "00000000000000000000000000000000"
        )
      );
    return `${tokenTranslation}_${tokens.join("_")}`;
  }
}
