import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import cx from "classnames";

export const Switch = forwardRef(function Switch(props, forwardedRef) {
  const {
    autoFocus,
    isChecked,
    isDisabled,
    className,
    onPress,
    ...rest
  } = props;

  const internalRef = useRef();
  const buttonRef = forwardedRef || internalRef;

  const { isFocusVisible, focusProps } = useFocusRing();
  const { buttonProps, isPressed } = useButton(props, buttonRef);

  return (
    <button
      {...buttonProps}
      {...focusProps}
      data-switch
      ref={buttonRef}
      role="switch"
      aria-checked={isChecked}
      disabled={isDisabled}
      className={cx(className, {
        focus: isFocusVisible,
        active: isPressed,
      })}
      {...rest}
    >
      <div data-switch-handle />
    </button>
  );
});
