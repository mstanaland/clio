import React, { forwardRef, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useFocusRing } from "@react-aria/focus";

import { useId } from "../../hooks";
import { selectValueType } from "../../types";
import { sizeMd } from "../../constants";

import Label from "../Label";
import Inline from "../Inline";
import InputError from "../InputError";
import Placeholder, { PlaceholderText } from "../Placeholder";
import SelectOption from "./SelectOption";

import "./Select.scss";

const propTypes = {
  /** html id to connect the select with the label */
  id: PropTypes.string,

  /** Label contents, usually text */
  label: PropTypes.node,

  /** If false, the label will be screen reader only */
  isLabelVisible: PropTypes.bool,

  /** Marks the field as required; Adds required styling to label */
  isRequired: PropTypes.bool,

  /** Disables the select */
  isDisabled: PropTypes.bool,

  /** Makes the label and select arranged inline horizontally */
  isInline: PropTypes.bool,

  /** Marks and styles the field as invalid */
  isInvalid: PropTypes.bool,

  /** Adds an unselectable placeholder item */
  placeholder: PropTypes.string,

  /** Contents of the error message, usually text */
  errorText: PropTypes.node,

  /** The value of the current selected option(s) */
  value: selectValueType,

  /** The initial value on render. The default is an empty string because
  placeholder's have a value of an empty string. */
  defaultValue: selectValueType,

  /** onChange function for controlled input */
  onChange: PropTypes.func,

  /** One or more `SelectOption`s */
  children: PropTypes.node,

  /** As an alternative to passing in children, you can specify an array
  of objects and an select option will be generated for each array item */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.string,
    })
  ),

  /** If true, and the array of options passed to Select has a length of 1,
   * the one and only option will be passed to the onChange prop */
  // shouldAutoSelectIfOnlyOneOption: PropTypes.bool,

  /** If true, and the array of options passed to Select has a length of 1, the
   * html select will be replaced by plain text  */
  // shouldRenderTextIfOnlyOneOption: PropTypes.bool,

  /** If true, the layout changes to a list of options and multiple
   * options can be selected at once. */
  isMultiple: PropTypes.bool,

  /** The input name attribute (same as <input name="foo" />) */
  name: PropTypes.string,

  /** Replace Select with a loading placeholder */
  isLoading: PropTypes.bool,

  /** additional class applied to outer container */
  className: PropTypes.string,
};

function renderOptions(options) {
  return options.map((item) => (
    <SelectOption key={item.value} value={item.value}>
      {item.label}
    </SelectOption>
  ));
}

export const Select = forwardRef(function Select(props, forwardedRef) {
  const {
    id: userId,
    label,
    isLabelVisible = true,
    isRequired,
    isDisabled,
    isInline,
    isInvalid: userIsInvalid,
    placeholder,
    errorText,
    value,
    defaultValue = "",
    onChange,
    children,
    options,
    isMultiple,
    name,
    isLoading,
    className,
    autoFocus,
    ariaDescribedby,
    ...rest
  } = props;

  const id = useId(userId);
  const internalRef = useRef();
  const timer = useRef();
  const ref = forwardedRef || internalRef;
  const { isFocusVisible, focusProps } = useFocusRing();
  const isControlled = typeof value === "string";
  const hasOptions = Array.isArray(options) && options.length > 0;
  const isInvalid = userIsInvalid || Boolean(errorText);

  useEffect(() => {
    clearTimeout(timer.current);

    if (autoFocus) {
      timer.current = setTimeout(() => {
        ref.current.focus();
      }, 0);
    }

    return () => clearTimeout(timer.current);
  }, [autoFocus, ref]);

  if (isLoading && !isInline) {
    return (
      <div data-select>
        {isLabelVisible && <PlaceholderText width="25%" />}

        <Placeholder height={sizeMd} />
      </div>
    );
  }
  if (isLoading && isInline) {
    return (
      <Inline space="xs">
        {isLabelVisible && <PlaceholderText width={100} />}
        <Placeholder height={sizeMd} width={150} />
      </Inline>
    );
  }

  return (
    <div
      data-select
      className={cx(className, {
        "field-outer-container": !isInline,
        "field-outer-container-inline": isInline,
      })}
    >
      <div
        className={cx("field-label-wrapper", {
          "flex-centered": isInline,
        })}
      >
        <Label
          htmlFor={id}
          isVisible={isLabelVisible}
          isRequired={isRequired}
          isDisabled={isDisabled}
        >
          {label}
        </Label>
      </div>
      <div className="field-inner-container">
        <div
          className={cx("field-input-wrapper", {
            inline: isInline,
            "flex-centered": isInline,
            "no-label": !isLabelVisible,
          })}
        >
          <select
            {...focusProps}
            className={cx(
              "text-md",
              "text-500",
              "radius-md",
              "pl-xs",
              "pr-lg",
              {
                invalid: isInvalid,
                "focus-input": isFocusVisible,
              }
            )}
            id={id}
            defaultValue={isControlled ? undefined : defaultValue}
            value={value}
            onChange={onChange}
            disabled={isDisabled}
            multiple={isMultiple}
            name={name}
            required={isRequired || !!placeholder}
            aria-invalid={isInvalid}
            aria-describedby={cx({
              [`${id}-error`]: Boolean(errorText),
              [ariaDescribedby]: Boolean(ariaDescribedby),
            })}
            ref={ref}
            {...rest}
          >
            {!isMultiple && placeholder && (
              <SelectOption value="" isDisabled>
                {placeholder}
              </SelectOption>
            )}
            {hasOptions ? renderOptions(options) : children}
          </select>

          <div
            data-select-icon
            className={cx("flex-centered", {
              disabled: isDisabled,
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <InputError inputId={id}>{errorText}</InputError>
    </div>
  );
});

Select.propTypes = propTypes;
