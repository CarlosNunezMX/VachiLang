import ValidationError from "@errors/ValidationError";
import type Token from "@core/token";
import Validator from "@core/validators";

export default class NopValidator extends Validator {
  validate({ args, line }: Token<typeof this.key>): boolean {
    if (args.length !== 0)
      throw new ValidationError("EXPECTED_NO_ARGUMENTS", line);
    return true;
  }
}
