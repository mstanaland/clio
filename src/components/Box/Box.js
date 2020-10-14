import React from "react";
import cx from "classnames";

import { boxTypes } from "../../types";
import resolveUnitlessValue from "../../utils/resolveUnitlessValue";

import extractBoxClasses from "./extractBoxClasses";

export default function Box({
  children,
  tag = "div",
  width,
  height,
  style,
  className,
  ...props
}) {
  const [boxClasses, rest] = extractBoxClasses(props);
  const Tag = tag;

  return (
    <Tag
      className={cx(boxClasses, className)}
      style={{
        width: resolveUnitlessValue(width),
        height: resolveUnitlessValue(height),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

Box.propTypes = boxTypes;
