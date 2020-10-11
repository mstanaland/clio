import React from "react";

import Placeholder from "../Placeholder";
import Stack from "./Stack";

export default {
  component: Stack,
  title: "Stack",
};

const Template = (args) => (
  <Stack {...args}>
    <Placeholder height={50} width={100} />
    <Placeholder height={50} width={100} />
    <Placeholder height={50} width={100} />
  </Stack>
);

export const Default = Template.bind({});

export const WithDividers = Template.bind({});
WithDividers.args = {
  hasDividers: true,
};

export const ResponsiveAlignment = Template.bind({});
ResponsiveAlignment.args = {
  align: ["center", "left", "right"],
};

export const ResponsiveSpacing = Template.bind({});
ResponsiveSpacing.args = {
  space: ["lg", "sm", "xxl"],
};
