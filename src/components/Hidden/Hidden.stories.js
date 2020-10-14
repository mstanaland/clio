import React from "react";

import Stack from "../Stack";
import Text from "../Text";
import Hidden from "./Hidden";

export default {
  component: Hidden,
  title: "Hidden",
};

export const HiddenBelow = (args) => (
  <Stack space="sm">
    <Text>The following line is hidden below tablet</Text>

    <Hidden below="tablet" {...args}>
      <Text>Can not see me in mobile!</Text>
    </Hidden>
  </Stack>
);

export const HiddenAbove = (args) => (
  <Stack space="sm">
    <Text>The following line is hidden above tablet</Text>

    <Hidden above="tablet" {...args}>
      <Text>Can not see me in desktop or wideScreen!</Text>
    </Hidden>
  </Stack>
);

export const HiddenAboveBelow = (args) => (
  <Stack space="sm">
    <Text>The following line is hidden above and below tablet</Text>

    <Hidden above="tablet" below="tablet" {...args}>
      <Text>Can only see me in tablet</Text>
    </Hidden>
  </Stack>
);

export const HiddenWithInline = (args) => (
  <Text>
    The following line is hidden above and below tablet:{" "}
    <Hidden isInline below="tablet" {...args}>
      Can not see me in mobile!
    </Hidden>
  </Text>
);
