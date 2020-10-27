import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import cx from "classnames";

import Spinner from "../Spinner";

import "./Button.scss";

export const Button = forwardRef(function Button(props, forwardedRef) {
  const {
    children,
    type = "button",
    appearance = "default",
    size = "md",
    isDisabled = false,
    href,
    to,
    iconBeforeElement,
    iconAfterElement,
    isLoading,
    shouldFocusOnMount,
    shouldFitContainer,
    className,
    onPress,
    autoFocus,
    ...rest
  } = props;

  function getTag() {
    if (Boolean(to)) {
      return Link;
    }

    if (Boolean(href)) {
      return "a";
    }

    return "button";
  }

  const isNativeButton = !Boolean(to) || !Boolean(href);
  const internalRef = useRef();
  const buttonRef = forwardedRef || internalRef;

  const ButtonElement = getTag();

  const { isFocusVisible, focusProps } = useFocusRing(autoFocus);
  const { buttonProps, isPressed } = useButton(
    { ...props, elementType: ButtonElement },
    buttonRef
  );

  const spinnerSize = size === "sm" ? "xs" : "sm";
  let spinnerColor = "darkGray";

  switch (appearance) {
    case "primary":
    case "critical": {
      spinnerColor = "white";
      break;
    }
    case "secondary": {
      spinnerColor = "primary";
      break;
    }
    case "subtle": {
      spinnerColor = "gray";
      break;
    }
    default: {
      spinnerColor = "darkGray";
    }
  }

  return (
    <ButtonElement
      {...buttonProps}
      {...focusProps}
      data-button
      ref={buttonRef}
      type={isNativeButton ? type : null}
      disabled={isDisabled}
      className={cx(
        className,
        "text-500",
        "radius-md",
        "inline-flex-centered",
        {
          "size-sm": size === "sm",
          "text-sm": size === "sm",
          "px-xs": size === "sm" && appearance !== "link",
          "size-md": size === "md",
          "text-md": size === "md",
          "px-sm": size === "md" && appearance !== "link",
          "size-lg": size === "lg",
          "px-md": size === "lg" && appearance !== "link",
          "text-lg": size === "lg",
          focus: isFocusVisible,
          active: isPressed,
          default: appearance === "default",
          primary: appearance === "primary",
          secondary: appearance === "secondary",
          subtle: appearance === "subtle",
          critical: appearance === "critical",
          link: appearance === "link",
          "fit-container": shouldFitContainer,
        }
      )}
      {...rest}
    >
      {isLoading && (
        <span className="spin-wrap flex-centered">
          <Spinner
            isSpinning={isLoading}
            size={spinnerSize}
            color={isDisabled ? "gray" : spinnerColor}
          />
        </span>
      )}

      <span
        className={cx("inner-wrap flex-centered", {
          "is-loading": isLoading,
        })}
      >
        {iconBeforeElement && (
          <span
            aria-hidden="true"
            className={cx("flex-centered", "button-icon", "icon-left")}
          >
            {iconBeforeElement}
          </span>
        )}

        {children}

        {iconAfterElement && (
          <span
            aria-hidden="true"
            className={cx("flex-centered", "button-icon", "icon-right")}
          >
            {iconAfterElement}
          </span>
        )}
      </span>
    </ButtonElement>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  appearance: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "critical",
    "subtle",
    "link",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  shouldFocusOnMount: PropTypes.bool,
  shouldFitContainer: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  iconBeforeElement: PropTypes.node,
  iconAfterElement: PropTypes.node,
  onPress: PropTypes.func,
};
