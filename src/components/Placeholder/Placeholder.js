import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { resolveUnitlessValue } from "../../utils";

import "./Placeholder.scss";

export default function Placeholder({
  height = 100,
  width = "100%",
  borderRadius = "sm",
  style,
  ...rest
}) {
  return (
    <div
      data-placeholder
      className={cx({
        [`radius-${borderRadius}`]: borderRadius,
      })}
      style={{
        ...style,
        width: resolveUnitlessValue(width),
        height: resolveUnitlessValue(height),
      }}
      {...rest}
    />
  );
}

Placeholder.propTypes = {
  /** Value for the height
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Value for the width */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** css value for the border radius, i.e. '3px' */
  borderRadius: PropTypes.oneOf(["none", "sm", "md", "lg", "xl"]),

  /** Normal React style object */
  style: PropTypes.object,
};
