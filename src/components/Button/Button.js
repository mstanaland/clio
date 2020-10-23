import React, { useRef, forwardRef } from "react";
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
    onClick,
    onPress,
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

  const { isFocusVisible, focusProps } = useFocusRing();
  const { buttonProps } = useButton(
    { ...props, elementType: ButtonElement },
    buttonRef
  );

  const spinnerSize = size === "sm" ? "xs" : "sm";
  let spinnerColor = "darkGray";

  switch (appearance) {
    case "primary":
    case "danger": {
      spinnerColor = "white";
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
      className={cx(className, "text-500", "radius-md", {
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
        base: appearance !== "link",
        default: appearance === "default",
        primary: appearance === "primary",
        subtle: appearance === "subtle",
        danger: appearance === "danger",
        link: appearance === "link",
        "fit-container": shouldFitContainer,
      })}
      {...rest}
    >
      <span className="spin-wrap flex-centered">
        <Spinner
          isSpinning={isLoading}
          size={spinnerSize}
          color={isDisabled ? "gray" : spinnerColor}
        />
      </span>
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
