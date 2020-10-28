import React from "react";

import LayoutPlaceholder from "../LayoutPlaceholder";
import Stack from "./Stack";

export default {
  component: Stack,
  title: "Stack",
};

const Template = (args) => (
  <Stack {...args}>
    <LayoutPlaceholder height={50} width={100} />
    <LayoutPlaceholder height={50} width={100} />
    <LayoutPlaceholder height={50} width={100} />
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
