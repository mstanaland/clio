import React from "react";
import cx from "classnames";

import { boxTypes } from "../../types";

import { extractBoxClasses } from "../Box";

export default function Card({
  children,
  background = "n0",
  padding = "md",
  shadow = "md",
  borderRadius = "sm",
  ...props
}) {
  const [classes, rest] = extractBoxClasses({
    background,
    padding,
    shadow,
    borderRadius,
    ...props,
  });

  return (
    <div data-card className={cx(classes)} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = boxTypes;
