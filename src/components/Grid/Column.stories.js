import React from "react";

import LayoutPlaceholder from "../LayoutPlaceholder";

import { Row, Column } from "./index";

export default {
  component: Column,
  title: "Grid: Column",
};

const Template = (args) => (
  <Row>
    <Column {...args}>
      <LayoutPlaceholder />
    </Column>
    <Column {...args}>
      <LayoutPlaceholder />
    </Column>
    <Column {...args}>
      <LayoutPlaceholder />
    </Column>
  </Row>
);

export const Default = Template.bind({});

export const ResponsiveWidth = Template.bind({});
ResponsiveWidth.args = {
  width: [12, 1, 3],
};

export const Offset = (args) => (
  <Row>
    <Column width={2} {...args}>
      <LayoutPlaceholder />
    </Column>
    <Column width={2}>
      <LayoutPlaceholder />
    </Column>
    <Column width={2}>
      <LayoutPlaceholder />
    </Column>
  </Row>
);

Offset.args = {
  offset: 4,
};
