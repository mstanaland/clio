import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { resolveUnitlessValue } from "../../utils";

const lineLengths = [
  "92%",
  "95%",
  "85%",
  "96%",
  "93%",
  "97%",
  "94%",
  "83%",
  "98%",
  "91%",
  "94%",
];

export default function PlaceholderText({
  fontSize = 14,
  lineHeight = 24,
  lines = 1,
  width,
  alignX = "left",
  className,
}) {
  const height = fontSize * 0.857;
  const margin = Math.floor(lineHeight) - height;
  const linesArray = Array.from(Array(lines).keys());

  return (
    <div
      data-placeholder-text
      className={cx("display-flex", "flex-direction-column", {
        "align-items-center": alignX === "center",
        "align-items-end": alignX === "right",
      })}
    >
      {linesArray.map((index) => {
        let lineLength =
          resolveUnitlessValue(width) || lineLengths[index] || "97%";

        if (!width && index === lines - 1) {
          lineLength = "70%";
        }

        return (
          <div
            key={index}
            style={{
              paddingTop: `${margin / 2}px`,
              paddingBottom: `${margin / 2}px`,
              width: lineLength,
            }}
          >
            <div
              data-placeholder
              className={cx("radius-sm", className)}
              style={{ height }}
            />
          </div>
        );
      })}
    </div>
  );
}

PlaceholderText.propTypes = {
  /** Text size to simulate (in pixels) */
  fontSize: PropTypes.number,

  /** Line height to simulate (in pixels) */
  lineHeight: PropTypes.number,

  /** Number of lines of text to render */
  lines: PropTypes.number,

  /** Sets the width of all lines to the specified value */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Horizontal alignment of the placeholder within its container */
  alignX: PropTypes.oneOf(["left", "center", "right"]),
};
