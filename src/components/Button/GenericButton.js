import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { useFocusRing } from "@react-aria/focus";
import cx from "classnames";

import "./GenericButton.scss";

export const GenericButton = forwardRef(function GenericButton(
  props,
  forwardedRef
) {
  const { children, autoFocus, className, ...rest } = props;

  const { isFocusVisible, focusProps } = useFocusRing(autoFocus);

  return (
    <button
      {...focusProps}
      data-generic-button
      ref={forwardedRef}
      className={cx(className, {
        focus: isFocusVisible,
      })}
      {...rest}
    >
      {children}
    </button>
  );
});

GenericButton.propTypes = {
  children: PropTypes.node,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
};
