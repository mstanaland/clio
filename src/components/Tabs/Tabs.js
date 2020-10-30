// cSpell:ignore tablist

import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import isNil from "lodash/isNil";

import { useRect } from "../../hooks";

import ContentBlock from "../ContentBlock";
import { TabButton } from "./TabButton";

import "./Tabs.scss";

export default function Tabs({
  children,
  defaultActiveIndex = 0,
  activeIndex,
  selectedIndexChanged,
  onChange,
  className,
  ariaLabel,
  id,
  useContentBlocks = false,
  stretchTabsToFit = false,
}) {
  // An array of bools representing the hidden/disabled state of all the tabs
  const disabledTabs = React.Children.map(children, (child) => {
    if (child.props.isHidden || child.props.isDisabled) {
      return true;
    }
    return false;
  });

  // For a given index, find the index of the next tab that is not hidden/disabled
  const nextValidTab = (index) => {
    let nextTab = null;
    let i = index;

    while (nextTab === null) {
      i += 1;

      if (i === disabledTabs.length) {
        i = 0;
      }

      if (disabledTabs[i] === false) {
        nextTab = i;
      }
    }
    return nextTab;
  };

  // For a given index, find the index of the previous tab that is not hidden/disabled
  const previousValidTab = (index) => {
    let nextTab = null;
    let i = index;

    while (nextTab === null) {
      i -= 1;

      if (i === -1) {
        i = disabledTabs.length - 1;
      }

      if (disabledTabs[i] === false) {
        nextTab = i;
      }
    }

    return nextTab;
  };

  // Make sure the defaultActiveIndex isn't hidden/disabled
  const defaultStateIndex = disabledTabs[defaultActiveIndex]
    ? nextValidTab(defaultActiveIndex)
    : defaultActiveIndex;

  const tabListRef = useRef();
  const tabListRect = useRect(tabListRef);
  const [activeRect, setActiveRect] = useState(null);
  const [shouldFocus, setShouldFocus] = useState(false);
  const [stateIndex, setStateIndex] = useState(defaultStateIndex);

  const isControlled = !isNil(activeIndex) && !isNil(onChange);

  const makeButtonId = (index) => `${id || "tabs"}-button-${index}`;
  const makePanelId = (index) => `${id || "tabs"}-panel-${index}`;

  // Called when user clicks or presses arrow keys
  const onSelectTab = (index, focus = false) => {
    if (isControlled) {
      onChange(index);
      setShouldFocus(focus);
    } else {
      setStateIndex(index);
      setShouldFocus(focus);
    }

    if (selectedIndexChanged) {
      selectedIndexChanged(index);
    }
  };

  // Generate all the tab buttons
  const tabButtons = React.Children.map(children, (child, index) => {
    const isSelected = isControlled
      ? index === activeIndex
      : index === stateIndex;
    const { label, isDisabled, isHidden } = child.props;

    return (
      <TabButton
        label={label}
        isHidden={isHidden}
        isDisabled={isDisabled}
        isSelected={isSelected}
        shouldFocus={shouldFocus}
        id={makeButtonId(index)}
        controlsId={isSelected ? makePanelId(index) : null}
        setActiveRect={setActiveRect}
        index={index}
        onSelect={() => onSelectTab(index)}
        onSelectFirst={() => onSelectTab(nextValidTab(-1), true)}
        onSelectLast={() =>
          onSelectTab(nextValidTab(children.length - 2), true)
        }
        onSelectNext={() => onSelectTab(nextValidTab(index), true)}
        onSelectPrevious={() => onSelectTab(previousValidTab(index), true)}
      />
    );
  });

  // Generate the visible tab panel. We're not rendering all the panels to
  // prevent "multiple elements with the same id" problems caused by multiple
  // panels containing UI bits with built-in ids that are not easily changed
  const currentPanel = isControlled
    ? children[activeIndex]
    : children[stateIndex];

  const tabPanel = React.cloneElement(currentPanel, {
    id: makePanelId(isControlled ? activeIndex : stateIndex),
    "aria-labelledby": makeButtonId(isControlled ? activeIndex : stateIndex),
  });

  const TabListInner = useContentBlocks ? ContentBlock : "div";
  const TabPanelInner = useContentBlocks ? ContentBlock : "div";

  return (
    <div
      data-tabs
      className={cx(className, {
        "stretch-tabs": stretchTabsToFit,
      })}
    >
      <div data-tab-list role="tablist" aria-label={ariaLabel} ref={tabListRef}>
        <TabListInner>{tabButtons}</TabListInner>
        <div
          data-tab-list-underline
          style={{
            left: activeRect && activeRect?.left - tabListRect?.left,
            width: activeRect && activeRect.width,
          }}
        />
      </div>
      <div data-tab-panels>
        <TabPanelInner>{tabPanel}</TabPanelInner>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  /** One or more TabPanel's */
  children: PropTypes.node,

  /** The index of the tab that is initially open if NOT controlled */
  defaultActiveIndex: PropTypes.number,

  /** Used to make id's of internal elements unique */
  id: PropTypes.string,

  /** The index of the current tab. Used only for a controlled component */
  activeIndex: PropTypes.number,

  /** Change handler for controlled component. Accepts one param, the index */
  onChange: PropTypes.func,

  /** If true and the tab width is smaller than the viewport, the tabs will
   * stretch to fill all the available space */
  stretchTabsToFit: PropTypes.bool,

  /** Additional class added to the outer container */
  className: PropTypes.string,

  /** Adds an aria label to the tab group */
  ariaLabel: PropTypes.string,

  /** If true, the tab list and tab panels are wrapped in a ContentBlock.
   * This is useful if you want the dividing line to extend to the page edge,
   * but have the tabs and content fit the normal content boundary */
  useContentBlocks: PropTypes.bool,

  /** Legacy callback. Do not use in new development */
  selectedIndexChanged: PropTypes.func,
};
