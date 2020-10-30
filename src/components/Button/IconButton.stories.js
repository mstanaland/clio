import React from "react";
import { MdStar } from "react-icons/md";

import { IconButton } from "./index";
import Inline from "../Inline";
import Stack from "../Stack";

export default {
  component: IconButton,
  title: "IconButton",
};

const Template = (args) => <IconButton iconElement={<MdStar />} {...args} />;

export const Default = Template.bind({});

export const Sizes = (args) => {
  return (
    <Inline>
      <IconButton iconElement={<MdStar />} size="xs" {...args} />

      <IconButton iconElement={<MdStar />} size="sm" {...args} />

      <IconButton iconElement={<MdStar />} size="md" {...args} />

      <IconButton iconElement={<MdStar />} size="lg" {...args} />
    </Inline>
  );
};

export const Appearances = (args) => {
  return (
    <Stack>
      <Inline>
        <IconButton iconElement={<MdStar />} appearance="primary" {...args}>
          Primary
        </IconButton>
        <IconButton iconElement={<MdStar />} appearance="secondary" {...args}>
          Default
        </IconButton>
        <IconButton iconElement={<MdStar />} appearance="default" {...args}>
          Default
        </IconButton>
        <IconButton iconElement={<MdStar />} appearance="subtle" {...args}>
          Subtle
        </IconButton>
        <IconButton iconElement={<MdStar />} appearance="critical" {...args}>
          Critical
        </IconButton>
        <IconButton iconElement={<MdStar />} appearance="link" {...args}>
          Link
        </IconButton>
      </Inline>
    </Stack>
  );
};

export const IsDisabled = (args) => {
  return (
    <div>
      <Inline>
        <IconButton
          iconElement={<MdStar />}
          isDisabled
          appearance="primary"
          {...args}
        >
          Primary
        </IconButton>
        <IconButton
          iconElement={<MdStar />}
          isDisabled
          appearance="secondary"
          {...args}
        >
          Secondary
        </IconButton>
        <IconButton
          iconElement={<MdStar />}
          isDisabled
          appearance="default"
          {...args}
        >
          Default
        </IconButton>
        <IconButton
          iconElement={<MdStar />}
          isDisabled
          appearance="subtle"
          {...args}
        >
          Subtle
        </IconButton>
        <IconButton
          iconElement={<MdStar />}
          isDisabled
          appearance="critical"
          {...args}
        >
          Critical
        </IconButton>
        <IconButton
          iconElement={<MdStar />}
          isDisabled
          appearance="link"
          {...args}
        >
          Link
        </IconButton>
      </Inline>
    </div>
  );
};
