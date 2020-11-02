import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useFocusRing } from "@react-aria/focus";
import cx from "classnames";

import "./SidebarLink.scss";

// export function SidebarLink(props) {
//   return (
//     <Link data-sidebar-link {...props} className="text-sm px-sm radius-sm" />
//   );
// }

export const SidebarLink = forwardRef(function SidebarLink(
  props,
  forwardedRef
) {
  const { className, to, autoFocus } = props;

  const { isFocusVisible, focusProps } = useFocusRing(autoFocus);

  return Boolean(to) ? (
    <NavLink
      exact
      activeClassName="active"
      data-sidebar-link
      ref={forwardedRef}
      {...props}
      {...focusProps}
      className={cx(className, "text-sm px-sm py-xxs radius-sm", {
        focus: isFocusVisible,
      })}
    />
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      data-sidebar-link
      ref={forwardedRef}
      {...props}
      {...focusProps}
      className={cx(className, "text-sm px-sm radius-sm", {
        focus: isFocusVisible,
      })}
    />
  );
});

SidebarLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};

SidebarLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};
