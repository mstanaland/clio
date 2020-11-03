import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { htmlElementsType } from "../../types";

// function extractTextClasses(props) {
//   const { size, ...rest } = props;
//   const classes = {};

//   // size
//   if (Boolean(size)) {

//   }
// }

export default function Text({
  tag: Tag = "p",
  size = "md",
  children,
  color,
  font,
  fontWeight,
  fontStyle,
  isTruncated,
  className,
  ...rest
}) {
  return (
    <Tag
      data-text
      className={cx(className, {
        "font-mono": font === "mono",
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "color-text-1": color === "black",
        "color-text-2": color === "darkGray",
        "color-text-3": color === "gray",
        "color-text-white": color === "white",
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
  color: PropTypes.oneOf(["black", "darkGray", "gray", "white"]),
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
