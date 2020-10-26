import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./Label.scss";

const propTypes = {
  /** Label's contents, usually text */
  children: PropTypes.node.isRequired,

  /** The id of the input being labeled */
  htmlFor: PropTypes.string.isRequired,

  /** Adds the required asterisk */
  isRequired: PropTypes.bool,

  /** Makes the label screen-reader only */
  isVisible: PropTypes.bool,

  /** Accepts a custom className that will be merged in with other classes */
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
  isRequired: false,
  isVisible: true,
};

export default function Label({
  children,
  htmlFor,
  className,
  isRequired,
  isVisible,
  ...rest
}) {
  return (
    <label
      data-label
      id={`${htmlFor}-label`}
      className={cx(className, "text-md", {
        "sr-only": !isVisible,
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
    </label>
  );
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
