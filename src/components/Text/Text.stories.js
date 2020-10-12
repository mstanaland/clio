import React from "react";

import Text from "./Text";
import Stack from "../Stack";

export default {
  component: Text,
  title: "Text",
};

const Template = (args) => (
  <Text {...args}>
    Machine learning (ML) is the study of computer algorithms that improve
    automatically through experience.
  </Text>
);

export const Default = Template.bind({});

export const Sizes = () => (
  <Stack>
    <Text size="xs">
      XS: Machine learning (ML) is the study of computer algorithms that improve
      automatically through experience.
    </Text>
    <Text size="sm">
      SM: Machine learning (ML) is the study of computer algorithms that improve
      automatically through experience.
    </Text>
    <Text size="md">
      MD: Machine learning (ML) is the study of computer algorithms that improve
      automatically through experience.
    </Text>
    <Text size="lg">
      LG: Machine learning (ML) is the study of computer algorithms that improve
      automatically through experience.
    </Text>
    <Text size="xl">
      XL: Machine learning (ML) is the study of computer algorithms that improve
      automatically through experience.
    </Text>
  </Stack>
);

export const FontWeights = () => (
  <Stack>
    <Text fontWeight="light">
      Light: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text fontWeight="thin">
      Thin: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text fontWeight="regular">
      Regular: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text fontWeight="medium">
      Medium: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text fontWeight="semibold">
      Semibold: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text fontWeight="bold">
      Bold: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text fontWeight="heavy">
      Heavy: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text fontWeight="black">
      Black: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
  </Stack>
);

export const FontStyles = () => (
  <Stack>
    <Text fontStyle="normal">
      Normal: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text fontStyle="italic">
      Italic: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
  </Stack>
);

export const Colors = () => (
  <Stack>
    <Text color="black">
      black: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text color="darkGray">
      darkGray: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
    <Text color="gray">
      gray: Machine learning (ML) is the study of computer algorithms that
      improve automatically through experience.
    </Text>
  </Stack>
);

export const Truncated = () => (
  <div style={{ width: "100px" }}>
    <Text isTruncated>Really long text here</Text>
  </div>
);
