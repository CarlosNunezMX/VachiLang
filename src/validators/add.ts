import ValidationError from "@errors/ValidationError";
import type Token from "@core/token";
import Validator from "@core/validators";

export default class AddValidator extends Validator {
  validate({ args, line }: Token<typeof this.key>): boolean {
    if (args.length !== 3)
      throw new ValidationError("EXPECTED_ARGUMENTS", line);

    if (
      args[0] === undefined ||
      args[1] === undefined ||
      args[2] === undefined
    ) {
      throw new ValidationError("INVALID_ARGUMENTS", line);
    }

    if (args[0]![0] !== "&")
      throw new ValidationError("INVALID_DESTINATION", line);

    if (args[1]?.startsWith("&") || args[2]?.startsWith("&")) {
      const registerOne = args[1]?.slice(1);
      const registerTwo = args[2]?.slice(1);
      if (isNaN(Number(registerOne)) || isNaN(Number(registerTwo)))
        throw new ValidationError("INVALID_ARGUMENTS", line);
      return true;
    }

    if (isNaN(Number(args[1])) || isNaN(Number(args[2])))
      throw new ValidationError("INVALID_ARGUMENTS", line);

    return true;
  }
}
