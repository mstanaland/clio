import React, { forwardRef, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useFocusRing } from "@react-aria/focus";

import { check, dash } from "./marks";
import { useId } from "../../hooks";

import "./Checkbox.scss";

export const Checkbox = forwardRef(function Checkbox(props, forwardedRef) {
  const {
    id: userId,
    label,
    name,
    isChecked,
    isDefaultChecked,
    isIndeterminate = false,
    isDisabled = false,
    isRequired = false,
    isLabelVisible = true,
    className,
    onChange,
    value,
    autoFocus,
    ...rest
  } = props;

  const id = useId(userId);
  const internalRef = useRef();
  const inputRef = forwardedRef || internalRef;
  const { isFocusVisible, focusProps } = useFocusRing();

  useEffect(() => {
    inputRef.current.indeterminate = isIndeterminate;
  }, [inputRef, isIndeterminate]);

  const mark = isIndeterminate ? dash : check;

  return (
    <label
      data-checkbox
      htmlFor={id}
      className={cx(className, "text-md", {
        disabled: isDisabled,
      })}
    >
      <input
        className={cx({
          indeterminate: isIndeterminate,
          "has-focus": isFocusVisible,
        })}
        {...focusProps}
        ref={inputRef}
        type="checkbox"
        id={id}
        name={name}
        disabled={isDisabled}
        required={isRequired}
        checked={isChecked && !isIndeterminate}
        defaultChecked={isDefaultChecked}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <span aria-hidden data-checkbox-box>
        {mark}
      </span>
      {isLabelVisible ? (
        <span data-checkbox-label>{label}</span>
      ) : (
        <span className="sr-only">{label}</span>
      )}
    </label>
  );
});

Checkbox.propTypes = {
  /** The id given to the input and label's htmlFor */
  id: PropTypes.string,

  /** The content of the label (usually just text) */
  label: PropTypes.node.isRequired,

  /** Name of the input */
  name: PropTypes.string,

  /** If the checkbox is checked */
  isChecked: PropTypes.bool,

  /** Change handler for controlled component */
  onChange: PropTypes.func,

  /** If the checkbox is checked by default (not a stateful value) */
  isDefaultChecked: PropTypes.bool,

  /** If the checkbox is disabled */
  isDisabled: PropTypes.bool,

  /** If the checkbox is required */
  isRequired: PropTypes.bool,

  /** If false, the label will be screen reader only */
  isLabelVisible: PropTypes.bool,

  /** Additional className applied to the wrapping element */
  className: PropTypes.string,
};
