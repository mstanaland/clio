import React, { useContext } from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import { HeadingLevelContext } from "./HeadingSection";

export default function Heading({
  size = "md",
  headingLevel,
  className,
  ...rest
}) {
  const levelFromContext = useContext(HeadingLevelContext);
  const level = headingLevel || levelFromContext || 2;

  const HeadingElement = `h${Math.min(level, 6)}`;

  const classes = cx(className, {
    "title-1": size === "xxl",
    "title-2": size === "xl",
    "title-3": size === "lg",
    "title-4": size === "md",
    "title-5": size === "sm",
    "title-6": size === "xs",
  });

  return <HeadingElement className={classes} {...rest} />;
}

Heading.propTypes = {
  /** Sets the appearance of the heading */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),

  /** Manually sets the heading level. Do not use this prop if using HeadingSection context */
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
