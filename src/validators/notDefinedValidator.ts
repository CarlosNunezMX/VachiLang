import ValidationError from "@errors/ValidationError";
import type Token from "@core/token";
import Validator from "@core/validators";

export default class NotDefinedValidator extends Validator {
  validate({ args, line }: Token<typeof this.key>): boolean {
    throw new ValidationError("NOT_DEFINED_OPERATION", line);
  }
}
