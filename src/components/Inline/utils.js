export function mapSpaceToNegativeSpace(space) {
  if (typeof space === "string") {
    return `n${space}`;
  }

  if (Array.isArray(space)) {
    return space.map((item) => `n${item}`);
  }
}

export function mapAlignXToJustifyContent(alignX) {
  const mapping = {
    left: "start",
    right: "end",
    center: "center",
    spaceAround: "space-around",
    spaceBetween: "space-between",
  };

  if (typeof alignX === "string") {
    return mapping[alignX];
  }

  if (Array.isArray(alignX)) {
    return alignX.map((item) => mapping[item]);
  }
}

export function mapAlignYToAlignItems(alignY) {
  const mapping = {
    top: "start",
    bottom: "end",
    center: "center",
    stretch: "stretch",
  };

  if (typeof alignY === "string") {
    return mapping[alignY];
  }

  if (Array.isArray(alignY)) {
    return alignY.map((item) => mapping[item]);
  }
}
