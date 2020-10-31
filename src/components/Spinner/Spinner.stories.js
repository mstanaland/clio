import React from "react";

import Spinner from "./index";

export default {
  component: Spinner,
  title: "Spinner",
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  isSpinning: true,
};

export const IsCentered = Template.bind({});
IsCentered.args = {
  isSpinning: true,
  isCentered: true,
};

export const Sizes = (args) => (
  <div>
    <Spinner {...args} size="xs" />
    <Spinner {...args} size="sm" />
    <Spinner {...args} size="md" />
    <Spinner {...args} size="lg" />
    <Spinner {...args} size="xl" />
    <Spinner {...args} size="xxl" />
  </div>
);
Sizes.args = {
  isSpinning: true,
};

export const Colors = (args) => (
  <div className="p-lg" style={{ background: "var(--color-background-2)" }}>
    <Spinner {...args} color="primary" />
    <Spinner {...args} color="darkGray" />
    <Spinner {...args} color="gray" />
    <Spinner {...args} color="white" />
  </div>
);
Colors.args = {
  isSpinning: true,
};
