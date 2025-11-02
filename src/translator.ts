import type { TokenKeys, tokens } from "@core/token";
import type Token from "@core/token";
import TokenTranslator from "@core/tokenTranslator";
import type { ValidatorsMap } from "@core/validators";

export default class Translator {
  private translator = TokenTranslator;
  constructor(private validators: ValidatorsMap) {}
  public translate(tokens: Token<TokenKeys>[]): string[] {
    const translatedTokens: string[] = [];
    for (const token of tokens) {
      const validator = this.validators[token.key];
      validator.validate(token);
      const translatedToken = this.translator.translate(token);
      translatedTokens.push(translatedToken);
    }
    return translatedTokens;
  }
}
