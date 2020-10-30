// cSpell:ignore tabpanel

import React from "react";
import PropTypes from "prop-types";

/**
 * <TabPanel> is is added by the user as a direct child of <Tabs>
 *
 * label, isDisabled and isHidden are not used directly, but are pulled out by
 * <Tabs> to create the tab list and its buttons.
 */
export default function TabPanel({
  children,
  isDisabled,
  isHidden,
  label,
  ...rest
}) {
  return (
    <div data-tab-panel role="tabpanel" {...rest}>
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  /** Contents of the panel */
  children: PropTypes.node,

  /** If true the tab will be dimmed in the tab list. */
  isDisabled: PropTypes.bool,

  /** If true the tab will not appear in the tab list */
  isHidden: PropTypes.bool,

  /** The content of the TabButton */
  label: PropTypes.node,
};

TabPanel.defaultProps = {
  isDisabled: false,
  isHidden: false,
};
