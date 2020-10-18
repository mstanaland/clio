import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

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
  isStrong = false,
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
      className={cx(className, "display-inlineFlex", "radius-md", "px-xs", {
        "text-xs": size === "md",
        "text-sm": size === "lg",
        "text-md": size === "xl",
        "text-500": true,
        "text-color-dark-gray": tone === "neutral" && !isStrong,
        "text-color-blue": tone === "info" && !isStrong,
        "text-color-green": tone === "success" && !isStrong,
        "text-color-red": tone === "error" && !isStrong,
        "text-color-white": isStrong,
        n30: tone === "neutral" && !isStrong,
        b50: tone === "info" && !isStrong,
        g50: tone === "success" && !isStrong,
        r50: tone === "error" && !isStrong,
        n400: tone === "neutral" && isStrong,
        b600: tone === "info" && isStrong,
        g600: tone === "success" && isStrong,
        r600: tone === "error" && isStrong,
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
  size: PropTypes.oneOf(["md", "lg", "xl"]),

  tone: PropTypes.oneOf(["neutral", "success", "error", "info"]),

  /** Additional class */
  className: PropTypes.string,
};
