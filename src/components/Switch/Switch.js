import React, { forwardRef, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import cx from "classnames";
import isNil from "lodash/isNil";

import "./Switch.scss";

const propTypes = {
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md"]),
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
};

export const Switch = forwardRef(function Switch(props, forwardedRef) {
  const {
    autoFocus,
    isChecked: userChecked,
    isDisabled,
    className,
    onPress: userOnPress,
    size = "md",
    ...rest
  } = props;
  const [internalChecked, setInternalChecked] = useState(false);
  const internalRef = useRef();
  const buttonRef = forwardedRef || internalRef;

  const isControlled = !isNil(userChecked);
  const isChecked = isControlled ? userChecked : internalChecked;

  const onPress = () => {
    if (userOnPress) {
      userOnPress();
    }
    if (!isControlled) {
      setInternalChecked((prev) => !prev);
    }
  };

  const propsForUseButton = {
    onPress,
    ...props,
  };

  const { buttonProps, isPressed } = useButton(propsForUseButton, buttonRef);
  const { isFocusVisible, focusProps } = useFocusRing(autoFocus);

  return (
    <button
      {...buttonProps}
      {...focusProps}
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

Switch.propTypes = propTypes;
