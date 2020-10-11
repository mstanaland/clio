import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Divider.scss";

export default function Divider({ color = "normal", className, ...rest }) {
  return (
    <div
      data-divider
      className={cx(className, {
        dark: color === "dark",
        light: color === "light",
      })}
      {...rest}
    />
  );
}

Divider.propTypes = {
  color: PropTypes.oneOf(["normal", "light", "dark"]),
};
