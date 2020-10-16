import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Badge.scss";

function renderFormattedNumber(children, max) {
  let numberToShow = 0;
  let suffix = "";

  if (children < 0) {
    children = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (max && max < children) {
    numberToShow = max;
    suffix = "+";
  } else {
    numberToShow = children;
  }

  const formatted = numberToShow.toLocaleString("en");

  return `${formatted}${suffix}`;
}

export default function Badge({
  children,
  tone = "neutral",
  size = "md",
  tag: Tag = "span",
  max,
  className,
}) {
  if (!children) {
    return null;
  }

  const contents =
    typeof children === "number"
      ? renderFormattedNumber(children, max)
      : children;

  return (
    <Tag
      data-badge
      className={cx(className, {
        "text-xs": size === "md",
        "text-sm": size === "lg",
        "text-md": size === "xl",
        "text-500": true,
        "text-color-dark-gray": tone === "neutral",
        "text-color-blue": tone === "info",
        "text-color-green": tone === "success",
        "text-color-red": tone === "error",
        n20: tone === "neutral",
        b50: tone === "info",
        g50: tone === "success",
        r50: tone === "error",
      })}
    >
      {contents}
    </Tag>
  );
}

Badge.propTypes = {
  /** Contents of the pill */
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The largest number to show in the pill. Any values larger than the max are shown as the max + */
  max: PropTypes.number,

  /** Sets text and overall pill size */
  size: PropTypes.oneOf(["md", "lg"]),

  tone: PropTypes.oneOf(["neutral", "success", "error", "info"]),

  /** Additional class */
  className: PropTypes.string,
};
