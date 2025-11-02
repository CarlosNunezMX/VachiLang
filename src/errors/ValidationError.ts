export default class ValidationError {
  constructor(public errorType: string, public line: number) {}
  toString() {
    return `ValidationError: Found error "${this.errorType}" at line ${this.line}`;
  }
}
