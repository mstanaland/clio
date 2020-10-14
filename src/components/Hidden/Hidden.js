import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { breakpoints } from "../../constants";
import { resolveResponsiveRangeProps } from "../../utils/resolveResponsiveRangeProps";
import { extractBoxClasses } from "../Box";

export default function Hidden({ above, below, isInline = false, children }) {
  const [
    hiddenOnMobile,
    hiddenOnTablet,
    hiddenOnDesktop,
    hiddenOnWideScreen,
  ] = resolveResponsiveRangeProps({ above, below });

  const displayAttr = isInline ? "inline" : "block";
  const Tag = isInline ? "span" : "div";

  const display = [
    hiddenOnMobile ? "none" : displayAttr,
    hiddenOnTablet ? "none" : displayAttr,
    hiddenOnDesktop ? "none" : displayAttr,
    hiddenOnWideScreen ? "none" : displayAttr,
  ];

  const boxProps = { display };
  const [classes] = extractBoxClasses(boxProps);

  return <Tag className={cx(classes)}>{children}</Tag>;
}

Hidden.propTypes = {
  above: PropTypes.oneOf(breakpoints),
  below: PropTypes.oneOf(breakpoints),
  isInline: PropTypes.bool,
};
