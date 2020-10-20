import React from "react";

import Placeholder from "../Placeholder";
import Inline from "./Inline";

export default {
  component: Inline,
  title: "Inline",
};

const Template = (args) => (
  <div style={{ maxWidth: "240px" }}>
    <Inline {...args}>
      <Placeholder height={20} width={40} />
      <Placeholder height={60} width={40} />
      <Placeholder height={40} width={40} />
      <Placeholder height={20} width={40} />
      <Placeholder height={60} width={40} />
      <Placeholder height={40} width={40} />
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
