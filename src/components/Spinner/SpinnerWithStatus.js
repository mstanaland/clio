import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import cx from "classnames";

import { tShirtType } from "../../types";
import { sizeInPxMap } from "../../constants";
import { toRem } from "../../utils";

import "./Spinner.scss";

const IDLE = "idle";
// const SPINNING = "spinning";
const SUCCESS = "success";
const ERROR = "error";

const toastIconVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      type: "spring",
    },
  },
};

const spinnerVariants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 1,
    scale: 1,
  },
};

function ToastIcon({ status, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      {status === "success" && (
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      )}
      {status === "error" && (
        <path d="M10 14.5c.647 0 1.18.492 1.244 1.122l.006.128v.5a1.25 1.25 0 01-2.494.128l-.006-.128v-.5c0-.69.56-1.25 1.25-1.25zm0-12c.647 0 1.18.492 1.244 1.122l.006.128v8a1.25 1.25 0 01-2.494.128l-.006-.128v-8c0-.69.56-1.25 1.25-1.25z" />
      )}
    </svg>
  );
}

export default function SpinnerWithStatus({
  status = IDLE,
  isCentered = false,
  size = "md",
  color = "gray",
  endingTimeout = 2000,
  onExit,
}) {
  const timer = useRef();
  const [animateOut, setAnimateOut] = useState(false);

  const sizeInPixels = sizeInPxMap[size];
  const strokeWidth = Math.min(Math.max(sizeInPixels * 0.0625, 1.5), 3);

  const r = sizeInPixels / 2 - strokeWidth;
  const circumference = Math.PI * 2 * (r - strokeWidth);

  const circleVariants = useMemo(() => {
    return {
      visible: {
        strokeDasharray: circumference * 2,
      },
      hidden: {
        strokeDasharray: circumference,
      },
    };
  }, [circumference]);

  useEffect(() => {
    let isMounted = true;
    clearTimeout(timer.current);

    if (status === SUCCESS || status === ERROR) {
      timer.current = setTimeout(() => {
        if (isMounted) {
          setAnimateOut(true);
        }
      }, endingTimeout);
    } else {
      setAnimateOut(false);
    }

    return () => {
      clearTimeout(timer.current);
      isMounted = false;
    };
  }, [status, endingTimeout]);

  return (
    <AnimatePresence initial={false} onExitComplete={onExit}>
      {status !== IDLE && !animateOut && (
        <motion.div
          animate={
            status === SUCCESS || status === ERROR ? "visible" : "hidden"
          }
          variants={spinnerVariants}
          key="spinner"
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          data-spinner
          className={cx({
            "display-flex": isCentered,
            "display-inline": !isCentered,
            "justify-content-center": isCentered,
          })}
        >
          <svg width={toRem(sizeInPixels)} height={toRem(sizeInPixels)}>
            <motion.circle
              variants={circleVariants}
              initial={{
                strokeDasharray: circumference,
              }}
              className={cx({
                white: color === "white",
                brand: color === "brand",
                "dark-gray": color === "darkGray",
                success: status === SUCCESS,
                error: status === ERROR,
              })}
              strokeWidth={toRem(strokeWidth)}
              r={r}
              cx={toRem(sizeInPixels / 2)}
              cy={toRem(sizeInPixels / 2)}
            />
          </svg>

          <motion.div
            variants={toastIconVariants}
            className={cx(
              "icon-wrap",
              "display-flex",
              "justify-content-center",
              "align-items-center"
            )}
            style={{
              width: toRem(sizeInPixels),
              height: toRem(sizeInPixels),
            }}
          >
            <ToastIcon
              status={status}
              width={toRem(sizeInPixels * 0.75)}
              height={toRem(sizeInPixels * 0.75)}
              className={cx({
                "success-icon": status !== ERROR,
                "error-icon": status === ERROR,
              })}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

SpinnerWithStatus.propTypes = {
  status: PropTypes.oneOf(["idle", "spinning", "success", "error"]),

  /** Spinner's display size */
  size: tShirtType,

  /** Callback fired after spinner has completed the exit animation. */
  onExit: PropTypes.func,

  color: PropTypes.oneOf(["white", "brand", "gray", "darkGray"]),
};
