import React from "react";

import Switch from "./index";

export default {
  component: Switch,
  title: "Switch",
};

const Template = (args) => (
  <div>
    <Switch size="sm" {...args} />
    <Switch size="md" {...args} />
  </div>
);

export const Default = () => <Switch />;

export const Sizes = Template.bind({});
Sizes.args = {};

export const IsChecked = Template.bind({});
IsChecked.args = {
  isChecked: true,
};

export const IsDisabled = Template.bind({});
IsDisabled.args = {
  isDisabled: true,
};

export const IsCheckedAndDisabled = Template.bind({});
IsCheckedAndDisabled.args = {
  isDisabled: true,
  isChecked: true,
};
