import React from "react";

import Placeholder from "../Placeholder";

import { Row, Column } from "./index";

export default {
  component: Column,
  title: "Grid: Column",
};

const Template = (args) => (
  <Row>
    <Column {...args}>
      <Placeholder />
    </Column>
    <Column {...args}>
      <Placeholder />
    </Column>
    <Column {...args}>
      <Placeholder />
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
      <Placeholder />
    </Column>
    <Column width={2}>
      <Placeholder />
    </Column>
    <Column width={2}>
      <Placeholder />
    </Column>
  </Row>
);

Offset.args = {
  offset: 4,
};
