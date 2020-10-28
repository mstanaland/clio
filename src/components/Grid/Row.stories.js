import React from "react";

import LayoutPlaceholder from "../LayoutPlaceholder";

import { Row, Column } from "./index";

export default {
  component: Row,
  title: "Grid: Row",
};

const Template = (args) => (
  <Row {...args}>
    <Column width={3}>
      <LayoutPlaceholder />
    </Column>
    <Column width={3}>
      <LayoutPlaceholder />
    </Column>
    <Column width={3}>
      <LayoutPlaceholder />
    </Column>
    <Column width={3}>
      <LayoutPlaceholder />
    </Column>
    <Column width={3}>
      <LayoutPlaceholder />
    </Column>
    <Column width={3}>
      <LayoutPlaceholder />
    </Column>
    <Column width={3}>
      <LayoutPlaceholder />
    </Column>
    <Column width={3}>
      <LayoutPlaceholder />
    </Column>
  </Row>
);

const Template2 = (args) => (
  <Row {...args}>
    <Column width="3">
      <LayoutPlaceholder height={30} />
    </Column>
    <Column width="3">
      <LayoutPlaceholder height={50} />
    </Column>
    <Column width="3">
      <LayoutPlaceholder height={100} />
    </Column>
  </Row>
);

export const Default = Template.bind({});

export const GutterSize = Template.bind({});
GutterSize.args = {
  gutter: "lg",
};

export const GutterXYSize = Template.bind({});
GutterXYSize.args = {
  gutterX: "xs",
  gutterY: "xl",
};

export const ResponsiveAlignX = Template2.bind({});
ResponsiveAlignX.args = {
  alignX: ["left", "center", "right"],
};

export const ResponsiveAlignY = Template2.bind({});
ResponsiveAlignY.args = {
  alignY: ["top", "center", "bottom"],
};
