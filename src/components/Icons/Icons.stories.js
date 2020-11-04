import React from "react";

import * as Icons from "./index";

import { Row, Column } from "../Grid";
import Text from "../Text";
import Box from "../Box";
import Stack from "../Stack";
import Heading from "../Heading";

export default {
  component: Icons,
  title: "Icons",
};

export function Gallery() {
  return (
    <Stack>
      <Heading>Regular Icons</Heading>
      <Row>
        <Column>
          <Box borderWidth={1} padding="md">
            <Icons.IconChevronDown />
            <Text size="sm" font="mono">
              IconChevronDown
            </Text>
          </Box>
        </Column>
        <Column>
          <Box borderWidth={1} padding="md">
            <Icons.IconChevronLeft />
            <Text size="sm" font="mono">
              IconChevronLeft
            </Text>
          </Box>
        </Column>
        <Column>
          <Box borderWidth={1} padding="md">
            <Icons.IconChevronRight />
            <Text size="sm" font="mono">
              IconChevronRight
            </Text>
          </Box>
        </Column>
        <Column>
          <Box borderWidth={1} padding="md">
            <Icons.IconChevronUp />
            <Text size="sm" font="mono">
              IconChevronUp
            </Text>
          </Box>
        </Column>

        <Column>
          <Box borderWidth={1} padding="md">
            <Icons.IconX />
            <Text size="sm" font="mono">
              IconX
            </Text>
          </Box>
        </Column>
      </Row>

      <Heading>Small Icons</Heading>
      <Row>
        <Column>
          <Box borderWidth={1} padding="md">
            <Icons.SmallIconX />
            <Text size="sm" font="mono">
              SmallIconX
            </Text>
          </Box>
        </Column>
        <Column>
          <Box borderWidth={1} padding="md">
            <Icons.SmallIconSearch />
            <Text size="sm" font="mono">
              SmallIconSearch
            </Text>
          </Box>
        </Column>
      </Row>
    </Stack>
  );
}
