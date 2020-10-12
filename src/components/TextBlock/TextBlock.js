import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { htmlElementsType } from "../../types";

import "./TextBlock.scss";

export default function TextBlock({
  tag: Tag = "div",
  children,
  width = "md",
  size = "md",
  color,
  shouldSpaceParagraphs = true,
  fontWeight,
  fontStyle,
  className,
  ...rest
}) {
  return (
    <div
      data-text-block
      className={cx("text", className, {
        "with-p-space": shouldSpaceParagraphs,
        "text-width-sm": width === "sm",
        "text-width-md": width === "md",
        "text-width-lg": width === "lg",
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
      })}
      {...rest}
    >
      {children}
    </div>
  );
}

TextBlock.propTypes = {
  width: PropTypes.oneOf(["sm", "md", "lg"]),
  shouldSpaceParagraphs: PropTypes.bool,
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
};
