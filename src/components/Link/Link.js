import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Link as RRLink } from "react-router-dom";

import "./Link.scss";

export const Link = forwardRef(function Link(props, forwardedRef) {
  const { to } = props;

  return Boolean(to) ? (
    <RRLink data-link ref={forwardedRef} {...props} />
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a data-link ref={forwardedRef} {...props} />
  );
});

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};
