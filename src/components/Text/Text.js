import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { htmlElementsType } from "../../types";

export default function Text({
  tag: Tag = "p",
  size = "md",
  children,
  color,
  fontWeight,
  fontStyle,
  isTruncated,
  className,
  ...rest
}) {
  return (
    <Tag
      data-text
      className={cx(className, "text", {
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "text-color-black": color === "black",
        "text-color-dark-gray": color === "darkGray",
        "text-color-gray": color === "gray",
        "text-200": fontWeight === "light",
        "text-300": fontWeight === "thin",
        "text-400": fontWeight === "regular",
        "text-500": fontWeight === "medium",
        "text-600": fontWeight === "semibold",
        "text-700": fontWeight === "bold",
        "text-800": fontWeight === "heavy",
        "text-900": fontWeight === "black",
        "text-italic": fontStyle === "italic",
        "text-normal": fontStyle === "normal",
        "text-truncate": isTruncated,
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
}

Text.propTypes = {
  tag: htmlElementsType,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  color: PropTypes.oneOf(["black", "darkGray", "gray"]),
  fontWeight: PropTypes.oneOf([
    "light",
    "thin",
    "regular",
    "medium",
    "semibold",
    "bold",
    "heavy",
    "black",
  ]),
  fontStyle: PropTypes.oneOf(["normal", "italic"]),
  isTruncated: PropTypes.bool,
};
