import React, { forwardRef, useCallback, useEffect } from "react";
// import PropTypes from "prop-types";
import cx from "classnames";

import { Row, Column } from "../Grid";
import { IconButton } from "../Button";
import { IconXSmall } from "../Icons";

import "./Toast.scss";
import { useTimeout } from "./useTimeout";

const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const exclamationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 14.5c.647 0 1.18.492 1.244 1.122l.006.128v.5a1.25 1.25 0 01-2.494.128l-.006-.128v-.5c0-.69.56-1.25 1.25-1.25zm0-12c.647 0 1.18.492 1.244 1.122l.006.128v8a1.25 1.25 0 01-2.494.128l-.006-.128v-8c0-.69.56-1.25 1.25-1.25z" />
  </svg>
);

export const Toast = forwardRef(function Toast(props, forwardedRef) {
  const {
    id,
    message,
    description,
    type,
    onClear = () => {},
    // action,
    dedupeKey,
    shouldRemove,
  } = props;

  const remove = useCallback(() => onClear(dedupeKey, id), [
    onClear,
    dedupeKey,
    id,
  ]);
  const { stopTimeout, startTimeout } = useTimeout({
    duration: 10000,
    onTimeout: remove,
  });

  useEffect(() => {
    if (shouldRemove) {
      stopTimeout();
      remove();
    }
  }, [shouldRemove, remove, stopTimeout]);

  return (
    <div
      data-toast
      ref={forwardedRef}
      role="alert"
      className={cx("display-flex", "radius-lg")}
      onMouseEnter={stopTimeout}
      onMouseLeave={startTimeout}
    >
      <div data-toast-clear>
        <IconButton
          aria-label="Close notification"
          size="xs"
          iconElement={<IconXSmall />}
          onPress={remove}
        />
      </div>
      <Row alignY="center">
        {type && (
          <Column width="content">
            <div data-toast-icon-wrap className={cx(type)}>
              {type === "success" && checkIcon}
              {type === "error" && exclamationIcon}
            </div>
          </Column>
        )}

        <Column width="fluid">
          <div
            className={cx({
              "pl-xs": !type,
            })}
          >
            <div data-toast-message className="text-md text-600">
              {message}
            </div>
            {Boolean(description) && (
              <div data-toast-description className="text-md">
                {description}
              </div>
            )}
          </div>
        </Column>
      </Row>
    </div>
  );
});
