import React from "react";
import PropTypes from "prop-types";

import "./AppBase.scss";

export default function AppBase({ children, ...rest }) {
  return (
    <div data-app-base {...rest}>
      {children}
    </div>
  );
}

AppBase.propTypes = {
  children: PropTypes.node,
};
