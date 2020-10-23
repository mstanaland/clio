import React from "react";

import Checkbox from "./index";

export default {
  component: Checkbox,
  title: "Checkbox",
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox label",
};

export const IsChecked = Template.bind({});
IsChecked.args = {
  label: "Checkbox label",
  isChecked: true,
  onChange: () => {},
};

export const IsDisabled = Template.bind({});
IsDisabled.args = {
  label: "Checkbox label",
  isDisabled: true,
  onChange: () => {},
};

export const IsCheckedAndDisabled = Template.bind({});
IsCheckedAndDisabled.args = {
  label: "Checkbox label",
  isChecked: true,
  isDisabled: true,
  onChange: () => {},
};

export const IsIndeterminate = Template.bind({});
IsIndeterminate.args = {
  label: "Checkbox label",
  isIndeterminate: true,
  onChange: () => {},
};

export const IsIndeterminateAndDisabled = Template.bind({});
IsIndeterminateAndDisabled.args = {
  label: "Checkbox label",
  isIndeterminate: true,
  isDisabled: true,
  onChange: () => {},
};
