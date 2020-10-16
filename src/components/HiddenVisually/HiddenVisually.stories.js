import React from "react";

import Text from "../Text";
import HiddenVisually from "./HiddenVisually";

export default {
  component: HiddenVisually,
  title: "HiddenVisually",
};

export const Default = (args) => (
  <Text>
    The following line is visually hidden but available to screen readers:{" "}
    <HiddenVisually below="tablet" {...args}>
      <Text>You can only hear me using a screen reader!</Text>
    </HiddenVisually>
  </Text>
);
