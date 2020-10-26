import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Label.scss";

const propTypes = {
  /** Label's contents, usually text */
  children: PropTypes.node.isRequired,

  /** Adds the required asterisk */
  isRequired: PropTypes.bool,

  /** Accepts a custom className that will be merged in with other classes */
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
  isRequired: false,
};

export default function VisualOnlyLabel({
  children,
  htmlFor,
  className,
  isRequired,
  ...rest
}) {
  return (
    <div
      data-visual-only-label
      id={`${htmlFor}-label`}
      className={cx(className, "text-md", {
        "label-required": isRequired,
      })}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
      {isRequired && (
        <>
          <span data-label-required-dot aria-hidden />
          <span className="sr-only"> (Required) </span>
        </>
      )}
    </div>
  );
}

VisualOnlyLabel.propTypes = propTypes;
VisualOnlyLabel.defaultProps = defaultProps;
