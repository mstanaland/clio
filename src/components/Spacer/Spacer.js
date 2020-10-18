import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { tShirtType } from "../../types";

import "./Spacer.scss";

export default function Spacer({ size = "md", className }) {
  return <div data-spacer className={cx(size, className)} />;
}

Spacer.propTypes = {
  size: tShirtType,
  className: PropTypes.string,
};
