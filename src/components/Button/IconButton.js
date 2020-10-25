import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Link } from "react-router-dom";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";

import "./IconButton.scss";

export const IconButton = forwardRef(function IconButton(props, forwardedRef) {
  const {
    ariaLabel,
    iconElement,
    appearance = "default",
    type,
    size = "md",
    isDisabled,
    href,
    to,
    shouldFocusOnMount,
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
  const { buttonProps, isPressed } = useButton(
    { ...props, elementType: ButtonElement },
    buttonRef
  );

  return (
    <ButtonElement
      data-icon-button
      {...buttonProps}
      {...focusProps}
      ref={buttonRef}
      type={isNativeButton ? type : null}
      disabled={isDisabled}
      className={cx(className, "text-500", "radius-md", {
        "size-xs": size === "xs",
        "size-sm": size === "sm",
        "size-md": size === "md",
        "size-lg": size === "lg",
        focus: isFocusVisible,
        active: isPressed,
        default: appearance === "default",
        primary: appearance === "primary",
        subtle: appearance === "subtle",
        critical: appearance === "critical",
        link: appearance === "link",
      })}
      {...rest}
    >
      <span aria-hidden="true" className={cx("flex-centered", "button-icon")}>
        {iconElement}
      </span>
    </ButtonElement>
  );
});

IconButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  appearance: PropTypes.oneOf([
    "default",
    "primary",
    "critical",
    "subtle",
    "link",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  shouldFocusOnMount: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  iconBeforeElement: PropTypes.node,
  iconAfterElement: PropTypes.node,
  onPress: PropTypes.func,
};
