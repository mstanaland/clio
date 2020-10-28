import React from "react";

import LayoutPlaceholder from "../LayoutPlaceholder";
import Inline from "./Inline";

export default {
  component: Inline,
  title: "Inline",
};

const Template = (args) => (
  <div style={{ maxWidth: "240px" }}>
    <Inline {...args}>
      <LayoutPlaceholder height={20} width={40} />
      <LayoutPlaceholder height={60} width={40} />
      <LayoutPlaceholder height={40} width={40} />
      <LayoutPlaceholder height={20} width={40} />
      <LayoutPlaceholder height={60} width={40} />
      <LayoutPlaceholder height={40} width={40} />
    </Inline>
  </div>
);

export const Default = Template.bind({});

export const ResponsiveSpace = Template.bind({});
ResponsiveSpace.args = {
  space: ["xl", "md", "xs"],
};

export const ResponsiveAlignX = Template.bind({});
ResponsiveAlignX.args = {
  alignX: ["left", "right", "center"],
};

export const ResponsiveAlignY = Template.bind({});
ResponsiveAlignY.args = {
  alignY: ["top", "bottom", "center"],
};

export const CollapseBelow = Template.bind({});
CollapseBelow.args = {
  collapseBelow: "tablet",
};
