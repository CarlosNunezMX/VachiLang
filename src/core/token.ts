export const tokens = {
  NOP: "00000000",
  ADD: "00000001",
  SUB: "00000010",
  IF: "00000011",
  MORE: "00000100",
  LESS: "00000101",
  ADDI: "00000110",
  TAG: "00000110",
} as const;

export type TokenMapType = typeof tokens;
export type TokenKeys = keyof TokenMapType;

type TokenErrorType = "UNEXPECTED_TOKEN";

class TokenError extends Error {
  constructor(public type: TokenErrorType) {
    super("Error en tokeninzación");
  }
}

export default class Token<tokentype extends TokenKeys> {
  constructor(
    public readonly key: tokentype,
    public readonly translation: TokenMapType[tokentype],
    public readonly args: string[],
    public readonly line: number
  ) {}

  private static splitLines(str: string): string[][] {
    return str
      .trim()
      .split("\n")
      .filter((line) => line !== "" && !line.startsWith("#"))
      .map((line) => line.split(" "));
  }
  public static tokenize(str: string): Token<any>[] {
    const _tokens: Token<any>[] = [];
    const lines = this.splitLines(str);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line || !line.length) continue;

      // @ts-ignore
      const instruction: TokenKeys | undefined = line[0];
      if (!instruction) continue;
      if (!tokens[instruction]) throw new TokenError("UNEXPECTED_TOKEN");

      const args = line.slice(1);

      const token = new Token(instruction, tokens[instruction], args, i);
      _tokens.push(token);
    }
    return _tokens;
  }
}
