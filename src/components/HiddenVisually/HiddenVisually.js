import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { htmlElementsType } from "../../types";

export default function HiddenVisually({
  children,
  tag: Tag = "span",
  className,
}) {
  return (
    <Tag data-hidden-visually className={cx(className, "sr-only")}>
      {children}
    </Tag>
  );
}

HiddenVisually.propTypes = {
  children: PropTypes.node,
  tag: htmlElementsType,
};
