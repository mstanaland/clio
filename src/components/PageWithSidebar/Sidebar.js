import React from "react";
import cx from "classnames";

export default function Sidebar({ children, className }) {
  return (
    <nav
      role="navigation"
      aria-label="Secondary sidebar"
      className={cx(className, "py-md px-sm")}
    >
      {children}
    </nav>
  );
}
