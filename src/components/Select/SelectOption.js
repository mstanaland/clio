import React from "react";
import PropTypes from "prop-types";

export default function SelectOption({ value, children, isDisabled = false }) {
  return (
    <option value={value} disabled={isDisabled}>
      {children}
    </option>
  );
}

SelectOption.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
};
