import React from "react";

import Box from "./Box";
import Placeholder from "../Placeholder";

export default {
  component: Box,
  title: "Box",
};

const Template = (args) => (
  <Box borderColor="n40" padding="md">
    <Box height={50} background="n40" {...args} />
  </Box>
);

export const Default = Template.bind({});

export const ResponsivePadding = Template.bind({});
ResponsivePadding.args = {
  padding: ["xxs", "sm", "lg", "xxl"],
  borderColor: "n900",
  borderWidth: 1,
};

export const ResponsiveMargin = Template.bind({});
ResponsiveMargin.args = {
  margin: ["xxs", "sm", "lg", "xxl"],
  borderColor: "n900",
  borderWidth: 1,
};

export const ResponsiveDisplay = (args) => {
  return (
    <Box borderColor="n40" padding="md">
      <Box borderColor="n900" {...args}>
        <Placeholder width={75} height={75} />
        <Placeholder width={75} height={75} />
        <Placeholder width={75} height={75} />
      </Box>
    </Box>
  );
};
ResponsiveDisplay.args = {
  display: ["block", "block", "flex"],
};

export const ResponsiveFlexOptions = (args) => {
  return (
    <Box borderColor="n40" padding="md">
      <Box height={300} borderColor="n900" {...args}>
        <Placeholder width={75} height={75} />
        <Placeholder width={75} height={75} />
        <Placeholder width={75} height={75} />
      </Box>
    </Box>
  );
};
ResponsiveFlexOptions.args = {
  display: "flex",
  alignItems: ["start", "end", "center"],
  justifyContent: ["start", "center", "spaceBetween"],
};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  borderColor: "n900",
  background: "n500",
};

export const Border = Template.bind({});
Border.args = {
  borderColor: "n100",
  borderWidth: 2,
  background: "n0",
};

export const BorderRadius = Template.bind({});
BorderRadius.args = {
  borderColor: "n900",
  borderWidth: 1,
  borderRadius: "md",
  background: "n0",
};

export const BorderRadiusEdges = Template.bind({});
BorderRadiusEdges.args = {
  borderColor: "n900",
  borderWidth: 1,
  borderTopRadius: "lg",
  borderBottomRadius: null,
  borderLeftRadius: null,
  borderRightRadius: null,
  background: "n0",
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: "md",
  background: "n0",
};
