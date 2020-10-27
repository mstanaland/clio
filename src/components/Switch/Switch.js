import React, { forwardRef, useRef, useState } from "react";
// import PropTypes from "prop-types";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import cx from "classnames";
import isNil from "lodash/isNil";

import "./Switch.scss";

export const Switch = forwardRef(function Switch(props, forwardedRef) {
  const {
    autoFocus,
    isChecked: userChecked,
    isDisabled,
    className,
    onPress,
    size = "md",
    ...rest
  } = props;

  const [internalChecked, setInternalChecked] = useState(false);
  const internalRef = useRef();
  const buttonRef = forwardedRef || internalRef;

  const { isFocusVisible, focusProps } = useFocusRing();
  const { buttonProps, isPressed } = useButton(props, buttonRef);

  const isControlled = !isNil(userChecked);
  const isChecked = isControlled ? userChecked : internalChecked;

  const handleClick = (event) => {
    if (!isControlled) {
      setInternalChecked((prev) => !prev);
    }
    if (buttonProps.onPress) {
      buttonProps.onPress(event);
    }
    if (buttonProps.onClick) {
      buttonProps.onClick(event);
    }
  };

  return (
    <button
      {...buttonProps}
      {...focusProps}
      onClick={handleClick}
      data-switch
      ref={buttonRef}
      role="switch"
      aria-checked={isChecked}
      disabled={isDisabled}
      className={cx(className, "display-inlineBlock", {
        [`size-${size}`]: size,
        focus: isFocusVisible,
        active: isPressed,
        checked: isChecked,
      })}
      {...rest}
    >
      <div data-switch-handle className="shadow-xs" />
    </button>
  );
});
