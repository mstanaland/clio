import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";
import cx from "classnames";

import { tShirtType } from "../../types";
import { sizeInPxMap } from "../../constants";
import { toRem } from "../../utils";

import "./Spinner.scss";

const IDLE = "idle";
const SPINNING = "spinning";
const SUCCESS = "success";
const ERROR = "error";

const SuccessIcon = (props) => (
  <animated.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </animated.svg>
);

const ErrorIcon = (props) => (
  <animated.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path d="M10 14.5c.647 0 1.18.492 1.244 1.122l.006.128v.5a1.25 1.25 0 01-2.494.128l-.006-.128v-.5c0-.69.56-1.25 1.25-1.25zm0-12c.647 0 1.18.492 1.244 1.122l.006.128v8a1.25 1.25 0 01-2.494.128l-.006-.128v-8c0-.69.56-1.25 1.25-1.25z" />
  </animated.svg>
);

export default function SpinnerWithStatus({
  status = IDLE,
  isCentered = false,
  size = "md",
  color = "gray",
  endingTimeout = 1500,
  onExit,
}) {
  const timer = useRef();
  const [animateOut, setAnimateOut] = useState(false);
  const [isDone, setDone] = useState(false);
  const isInDom =
    (status === SPINNING || status === SUCCESS || status === ERROR) && !isDone;

  useEffect(() => {
    let isMounted = true;
    clearTimeout(timer.current);

    if (status === SUCCESS || status === ERROR) {
      setAnimateOut(true);
      timer.current = setTimeout(() => {
        if (isMounted) {
          setDone(true);
          setAnimateOut(false);
        }
      }, endingTimeout);
    }

    return () => {
      clearTimeout(timer.current);
      isMounted = false;
    };
  }, [status, endingTimeout]);

  useEffect(() => {
    if (status === SPINNING && isDone) {
      setDone(false);
    }
  }, [isDone, status]);

  function onDestroyed() {
    if (onExit && isDone) {
      onExit();
    }
  }
  const ringTransition = useTransition(isInDom, null, {
    from: {
      opacity: 0,
      transform: "scale(0.7) rotate(-270deg)",
    },
    enter: { opacity: 1, transform: "scale(1) rotate(0)" },
    leave: {
      opacity: 0,
      transform: "scale(0.7) rotate(270deg)",
    },
    onDestroyed: onDestroyed,
  });

  const iconTransition = useTransition(animateOut, null, {
    from: {
      opacity: 0,
      transform: "scale(0)",
    },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: {
      opacity: 0,
      transform: "scale(0)",
    },
    config: { mass: 1, tension: 170, friction: 13 },
  });

  const sizeInPixels = sizeInPxMap[size];
  const strokeWidth = Math.min(Math.max(sizeInPixels * 0.0625, 1.5), 3);

  const r = sizeInPixels / 2 - strokeWidth;
  const circumference = Math.PI * 2 * (r - strokeWidth);
  const dashLength = animateOut ? circumference : circumference * 0.85;
  const gapLength = animateOut ? 0 : circumference * 0.15;

  return (
    <div
      data-spinner
      className={cx({
        "display-flex": isCentered,
        "display-inline": !isCentered,
        "justify-content-center": isCentered,
      })}
    >
      {ringTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.svg
              width={toRem(sizeInPixels)}
              height={toRem(sizeInPixels)}
              style={props}
              key={key}
            >
              <circle
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
                style={{
                  strokeDasharray: `${dashLength} ${gapLength}`,
                }}
              />
            </animated.svg>
          )
      )}

      <div
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
        {status === "success" &&
          iconTransition.map(
            ({ item, key, props }) =>
              item && (
                <SuccessIcon
                  key={key}
                  width={toRem(sizeInPixels * 0.75)}
                  height={toRem(sizeInPixels * 0.75)}
                  className="success-icon"
                  style={props}
                />
              )
          )}
        {status === "error" &&
          iconTransition.map(
            ({ item, key, props }) =>
              item && (
                <ErrorIcon
                  key={key}
                  width={toRem(sizeInPixels * 0.75)}
                  height={toRem(sizeInPixels * 0.75)}
                  className="error-icon"
                  style={props}
                />
              )
          )}
      </div>
    </div>
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
