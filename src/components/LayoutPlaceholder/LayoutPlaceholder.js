import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./LayoutPlaceholder.scss";

import { extractBoxClasses } from "../Box";

export default function LayoutPlaceholder({
  width = "100%",
  height = 100,
  ...rest
}) {
  const boxProps = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...rest,
  };

  const [classes, otherProps] = extractBoxClasses(boxProps);

  return (
    <div
      data-layout-placeholder
      style={{ width, height }}
      className={cx(classes)}
      {...otherProps}
    >
      <svg className="position-relative" xmlns="http://www.w3.org/2000/svg">
        <line x1={0} y1={0} x2="100%" y2="100%" />
        <line x1="100%" y1={0} x2={0} y2="100%" />
      </svg>
    </div>
  );
}

LayoutPlaceholder.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
