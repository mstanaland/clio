import React from "react";

import Divider from "./Divider";

export default {
  component: Divider,
  title: "Divider",
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});

export const BorderLight = Template.bind({});
BorderLight.args = {
  color: "light",
};

export const BorderDark = Template.bind({});
BorderDark.args = {
  color: "dark",
};
