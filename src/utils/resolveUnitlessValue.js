import isNil from "lodash/isNil";
import toRem from "./toRem";

export default function resolveUnitlessValue(value) {
  if (isNil(value)) {
    return null;
  }

  return typeof value === "string" ? value : toRem(value);
}
