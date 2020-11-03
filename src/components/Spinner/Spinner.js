import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import cx from "classnames";

import { tShirtType } from "../../types";
import { sizeInPxMap } from "../../constants";
import { toRem } from "../../utils";

import "./Spinner.scss";

export default function Spinner({
  isSpinning = false,
  isCentered = false,
  size = "md",
  color = "gray",
  onExit,
}) {
  const sizeInPixels = sizeInPxMap[size];
  const strokeWidth = Math.min(Math.max(sizeInPixels * 0.0625, 1.5), 3);

  const r = sizeInPixels / 2 - strokeWidth;
  const circumference = Math.PI * 2 * (r - strokeWidth);

  return (
    <div
      data-spinner
      className={cx({
        "display-flex": isCentered,
        "display-inline": !isCentered,
        "justify-content-center": isCentered,
      })}
    >
      <AnimatePresence initial={false} onExitComplete={onExit}>
        {isSpinning && (
          <motion.svg
            width={toRem(sizeInPixels)}
            height={toRem(sizeInPixels)}
            initial={{
              opacity: 0,
              transform: "scale(0.7) rotate(-270deg)",
            }}
            animate={{
              opacity: 1,
              transform: "scale(1) rotate(0)",
            }}
            exit={{ opacity: 0, transform: "scale(0.7) rotate(270deg)" }}
            key="svg"
          >
            <circle
              className={cx({
                white: color === "white",
                primary: color === "primary",
                "dark-gray": color === "darkGray",
              })}
              strokeWidth={toRem(strokeWidth)}
              r={r}
              cx={toRem(sizeInPixels / 2)}
              cy={toRem(sizeInPixels / 2)}
              style={{
                strokeDasharray: circumference,
              }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}

Spinner.propTypes = {
  /** Sets spinner visibility */
  isSpinning: PropTypes.bool,

  /** Spinner's display size */
  size: tShirtType,

  /** Callback fired after spinner has completed the exit animation. */
  onExit: PropTypes.func,

  color: PropTypes.oneOf(["white", "primary", "gray", "darkGray"]),
};
