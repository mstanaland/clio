import React from "react";

import Badge from "./Badge";
import Inline from "../Inline";
import Box from "../Box";
import Stack from "../Stack";
import Text from "../Text";

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

// export const TextContent = Template.bind({});
// TextContent.args = {
//   children: "New",
// };

export const Tones = (args) => (
  <Stack>
    <Box padding="md">
      <Inline>
        <Badge {...args} tone="darken">
          Darken
        </Badge>
        <Text>Darkens a light background</Text>
      </Inline>
    </Box>
    <Box padding="md" style={{ background: "var(--color-toast)" }}>
      <Inline>
        <Badge {...args} tone="lighten">
          Lighten
        </Badge>
        <Text color="white">Lighten a dark background</Text>
      </Inline>
    </Box>
    <Box padding="md">
      <Inline>
        <Badge {...args} tone="critical">
          Critical
        </Badge>
        <Text>Critical</Text>
      </Inline>
    </Box>
  </Stack>
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
