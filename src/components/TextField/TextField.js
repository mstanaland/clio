import React, { forwardRef, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { useId } from "../../hooks";
import { sizeMd } from "../../constants";

import Placeholder, { PlaceholderText } from "../Placeholder";
import Inline from "../Inline";
import Label from "../Label";
import InputError from "../InputError";
import { IconButton } from "../Button";
import { IconXSmall } from "../Icons";

import "./TextField.scss";

const propTypes = {
  /** html id used to connect the input with the label, errorText */
  id: PropTypes.string,

  /** Label contents, usually text */
  label: PropTypes.node,

  /** If false, the label will be screen reader only */
  isLabelVisible: PropTypes.bool,

  /** html input type, i.e. "text" */
  type: PropTypes.oneOf(["text", "password", "search", "email", "tel"]),

  /** Text to be used for the input placeholder */
  placeholder: PropTypes.string,

  /** The input's value. Use only when the input is controlled */
  value: PropTypes.string,

  /** Disables the field */
  isDisabled: PropTypes.bool,

  /** Marks the field as required; Adds required styling to label */
  isRequired: PropTypes.bool,

  /** Marks and styles the field as invalid */
  isInvalid: PropTypes.bool,

  /** Makes the label and input arranged inline horizontally */
  isInline: PropTypes.bool,

  /** Contents of the error message, usually text */
  errorText: PropTypes.node,

  /** Contents of the hint message, usually text */
  hintText: PropTypes.node,

  /** Icon element to render before the children */
  iconElement: PropTypes.element,

  /** Show clear button if true and there is a value.
   * Must be a controlled component for this feature to work */
  hasClearButton: PropTypes.bool,

  /** Clear button click handler */
  onClearButtonClick: PropTypes.func,

  /** If true, the input will gain focus when it mounts */
  autoFocus: PropTypes.bool,

  /** Additional className added to outer container for custom styling */
  className: PropTypes.string,

  /** Adds a unit (such as '$') that appears to the left of the input */
  unitBefore: PropTypes.string,

  /** Adds a unit (such as '%') that appears to the right of the input */
  unitAfter: PropTypes.string,

  /** If using unitBefore or unitAfter, you also need to supply a description
   * of that unit for screen readers. For example, if you use unitBefore="$",
   * you should also have srUnitDescription="dollars".
   */
  srUnitDescription: PropTypes.string,

  /** Id to be passed to the input's aria-describedby property */
  ariaDescribedby: PropTypes.string,
};

export const TextField = forwardRef(function TextField(props, forwardedRef) {
  const {
    id: userId,
    label,
    isLabelVisible = true,
    type = "text",
    placeholder,
    value,
    isDisabled,
    isRequired,
    isInvalid: userIsInvalid,
    isInline,
    errorText,
    iconElement,
    hasClearButton,
    onClearButtonClick,
    autoFocus,
    unitBefore,
    unitAfter,
    srUnitDescription,
    ariaDescribedby,
    isLoading,
    className,
    ...rest
  } = props;

  const internalRef = useRef();
  const timer = useRef();
  const ref = forwardedRef || internalRef;
  const id = useId(userId);
  const hasIcon = iconElement !== undefined;
  const showClearButton = hasClearButton && value?.length > 0;
  const isInvalid = userIsInvalid || Boolean(errorText);

  const focusInput = useCallback(
    function focusInput() {
      clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        ref.current.focus();
      }, 0);
    },
    [ref]
  );

  useEffect(() => {
    clearTimeout(timer.current);

    if (autoFocus) {
      focusInput();
    }

    return () => clearTimeout(timer.current);
  }, [autoFocus, focusInput, ref]);

  function handleClearClick(event) {
    if (onClearButtonClick) {
      focusInput();
      onClearButtonClick(event);
    }
  }

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
      data-text-field
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
          {hasIcon && (
            <span className="field-icon-content left">{iconElement}</span>
          )}
          {unitBefore && !iconElement && (
            <span className="field-icon-content text-field-unit-before">
              {unitBefore}
            </span>
          )}

          <input
            className={cx("sarsa-text-field-input", "text-md", "radius-md", {
              invalid: isInvalid,
              "with-icon": hasIcon,
              "with-unit-before": Boolean(unitBefore),
              "with-unit-after": Boolean(unitAfter),
              "with-clear-button": hasClearButton,
            })}
            type={type}
            id={id}
            ref={ref}
            disabled={isDisabled}
            value={value}
            placeholder={placeholder}
            required={isRequired}
            aria-invalid={isInvalid}
            aria-describedby={cx({
              [`${id}-error`]: Boolean(errorText),
              [`${id}-unit-description`]: Boolean(srUnitDescription),
              [ariaDescribedby]: Boolean(ariaDescribedby),
            })}
            {...rest}
          />

          {unitAfter && (
            <span className="field-icon-content text-field-unit-after">
              {unitAfter}
            </span>
          )}

          {srUnitDescription && (
            <span className="sr-only" id={`${id}-unit-description`}>
              {`Field contents are in ${srUnitDescription}`}
            </span>
          )}

          {showClearButton && (
            <span className="text-field-button-wrapper flex-centered">
              <IconButton
                appearance="subtle"
                size="xs"
                iconElement={<IconXSmall />}
                aria-label="Clear field contents"
                className="text-field-clear-button"
                onPress={handleClearClick}
              />
            </span>
          )}
        </div>

        <InputError inputId={id}>{errorText}</InputError>
      </div>
    </div>
  );
});

TextField.propTypes = propTypes;
