import type Token from "./token";
import type { TokenKeys } from "./token";

export type ValidatorsMap = {
  [key in TokenKeys]: Validator;
};

export default abstract class Validator {
  constructor(public key: TokenKeys) {}
  abstract validate({ args, line }: Token<typeof this.key>): boolean;
}
