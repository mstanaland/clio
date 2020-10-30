import React, { forwardRef, useRef, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";

import { useRect } from "../../hooks";

export const TabButton = forwardRef(function TabButton(props, forwardedRef) {
  const {
    label,
    isSelected,
    shouldFocus,
    onSelect,
    onSelectNext,
    onSelectPrevious,
    onSelectFirst,
    onSelectLast,
    controlsId,
    id,
    isDisabled,
    isHidden,
    setActiveRect,
  } = props;

  const internalRef = useRef();
  const buttonRef = forwardedRef || internalRef;
  const { buttonProps } = useButton(props, buttonRef);
  const { isFocusVisible, focusProps } = useFocusRing();
  const rect = useRect(buttonRef, isSelected);

  useEffect(() => {
    if (isSelected && shouldFocus) {
      buttonRef.current.focus();
    }
  }, [buttonRef, isSelected, shouldFocus]);

  // call-up to set styles whenever we're active
  useLayoutEffect(() => {
    if (isSelected) {
      setActiveRect(rect);
    }
  }, [isSelected, rect, setActiveRect]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onSelectNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onSelectPrevious();
    } else if (e.key === "Home") {
      e.preventDefault();
      onSelectFirst();
    } else if (e.key === "End") {
      e.preventDefault();
      onSelectLast();
    }
  };

  return (
    <button
      {...buttonProps}
      {...focusProps}
      data-tab-button
      className={cx("text-md", "radius-md", {
        hidden: isHidden,
        selected: isSelected,
        focus: isFocusVisible,
      })}
      disabled={isDisabled || isHidden}
      ref={buttonRef}
      role="tab"
      aria-selected={isSelected}
      tabIndex={isSelected ? null : "-1"}
      id={id}
      aria-controls={controlsId}
      onKeyDown={handleKeyDown}
      onClick={onSelect}
    >
      <div data-tab-button-inner className="flex-centered">
        <div data-tab-button-sizer role="presentation" aria-hidden="true">
          {label}
        </div>
        <div data-tab-button-content className="flex-centered">
          <div>{label}</div>
        </div>
      </div>
    </button>
  );
});

TabButton.propTypes = {
  isSelected: PropTypes.bool,
  shouldFocus: PropTypes.bool.isRequired,
  onSelect: PropTypes.func,
  onSelectNext: PropTypes.func.isRequired,
  onSelectPrevious: PropTypes.func.isRequired,
  onSelectFirst: PropTypes.func.isRequired,
  onSelectLast: PropTypes.func.isRequired,
  label: PropTypes.node.isRequired,
  controlsId: PropTypes.string,
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isHidden: PropTypes.bool,
};
