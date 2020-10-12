import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default function Text({
  tag: Tag = "p",
  size = "md",
  children,
  color,
  fontWeight,
  fontStyle,
  isTruncated,
  className,
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
        "text-dark-gray": color === "darkGray",
        "text-gray": color === "gray",
        "text-500": fontWeight === "medium",
        "text-600": fontWeight === "semibold",
        "text-700": fontWeight === "bold",
        "text-800": fontWeight === "heavy",
        "text-900": fontWeight === "black",
        "text-ital": fontStyle === "italic",
        "text-truncate": isTruncated,
      })}
    >
      {children}
    </Tag>
  );
}
