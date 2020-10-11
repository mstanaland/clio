export const normalizeResponsiveProp = (value) => {
  if (typeof value === "string" || typeof value === "number") {
    return [value, value, value, value];
  }

  if ("length" in value) {
    const { length } = value;

    if (length === 1) {
      const [sm] = value;
      return [sm, sm, sm, sm];
    }

    if (length === 2) {
      const [sm, md] = value;
      return [sm, md, md, md];
    }

    if (length === 3) {
      const [sm, md, lg] = value;
      return [sm, md, lg, lg];
    }

    if (length === 4) {
      return value;
    }

    throw new Error(`Invalid responsive prop length: ${JSON.stringify(value)}`);
  }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`);
};

export default function mapResponsiveProp(value, valueMap) {
  if (value === undefined) {
    return value;
  }

  // If it's not a responsive prop, just map it directly
  if (typeof value === "string" || typeof value === "number") {
    return valueMap[value];
  }

  const [sm, md, lg, xl] = normalizeResponsiveProp(value);

  return [valueMap[sm], valueMap[md], valueMap[lg], valueMap[xl]];
}
