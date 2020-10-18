import React from "react";

import Badge from "./Badge";
import Inline from "../Inline";

export default {
  component: Badge,
  title: "Badge",
};

const Template = (args) => <Badge {...args} />;
export const NumberContent = Template.bind({});
NumberContent.args = {
  children: 1981,
};

export const NumberWithMax = Template.bind({});
NumberWithMax.args = {
  max: 99,
  children: 1981,
};

export const TextContent = Template.bind({});
TextContent.args = {
  children: "New",
};

export const Tones = (args) => (
  <Inline>
    <Badge {...args} tone="neutral">
      Neutral
    </Badge>
    <Badge {...args} tone="info">
      Info
    </Badge>
    <Badge {...args} tone="error">
      Error
    </Badge>
    <Badge {...args} tone="success">
      Success
    </Badge>
  </Inline>
);

export const Sizes = (args) => (
  <Inline alignY="center">
    <Badge {...args} size="md">
      Medium
    </Badge>
    <Badge {...args} size="lg">
      Large
    </Badge>
    <Badge {...args} size="xl">
      XLarge
    </Badge>
  </Inline>
);
