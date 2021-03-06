import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Link as RRLink } from "react-router-dom";
import { useFocusRing } from "@react-aria/focus";
import cx from "classnames";

import "./Link.scss";

export const Link = forwardRef(function Link(props, forwardedRef) {
  const { className, to, autoFocus } = props;

  const { isFocusVisible, focusProps } = useFocusRing(autoFocus);

  return Boolean(to) ? (
    <RRLink
      data-link
      ref={forwardedRef}
      {...props}
      {...focusProps}
      className={cx(className, {
        focus: isFocusVisible,
      })}
    />
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      data-link
      ref={forwardedRef}
      {...props}
      {...focusProps}
      className={cx(className, {
        focus: isFocusVisible,
      })}
    />
  );
});

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};
