import type { ValidatorsMap } from "@core/validators";
import AddValidator from "./add";
import NopValidator from "./nop";
import NotDefinedValidator from "./notDefinedValidator";

// --------
const validatorsMap: ValidatorsMap = {
  ADD: new AddValidator("ADD"),
  NOP: new NopValidator("NOP"),
  SUB: new AddValidator("SUB"), // Assuming SUB has similar validation as ADD
  LESS: new AddValidator("LESS"),
  MORE: new AddValidator("MORE"),
  TAG: new AddValidator("TAG"),
  IF: new NotDefinedValidator("IF"),
  ADDI: new NotDefinedValidator("ADDI"),
};

// -------- export
export default validatorsMap;
