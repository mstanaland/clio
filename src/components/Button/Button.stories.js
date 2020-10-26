import React from "react";
import { MdStar } from "react-icons/md";

import Button from "./index";
import Inline from "../Inline";
import Stack from "../Stack";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Sizes = (args) => {
  return (
    <Inline>
      <Button size="sm" {...args}>
        Small
      </Button>
      <Button size="md" {...args}>
        Medium
      </Button>
      <Button size="lg" {...args}>
        Large
      </Button>
    </Inline>
  );
};

export const Appearances = (args) => {
  return (
    <Stack>
      <Inline>
        <Button size="sm" appearance="primary" {...args}>
          Primary
        </Button>
        <Button size="sm" appearance="secondary" {...args}>
          Default
        </Button>
        <Button size="sm" appearance="default" {...args}>
          Default
        </Button>
        <Button size="sm" appearance="subtle" {...args}>
          Subtle
        </Button>
        <Button size="sm" appearance="danger" {...args}>
          Danger
        </Button>
        <Button size="sm" appearance="link" {...args}>
          Link
        </Button>
      </Inline>
      <Inline>
        <Button appearance="primary" {...args}>
          Primary
        </Button>
        <Button appearance="secondary" {...args}>
          Default
        </Button>
        <Button appearance="default" {...args}>
          Default
        </Button>
        <Button appearance="subtle" {...args}>
          Subtle
        </Button>
        <Button appearance="danger" {...args}>
          Danger
        </Button>
        <Button appearance="link" {...args}>
          Link
        </Button>
      </Inline>
      <Inline>
        <Button size="lg" appearance="primary" {...args}>
          Primary
        </Button>
        <Button size="lg" appearance="secondary" {...args}>
          Default
        </Button>
        <Button size="lg" appearance="default" {...args}>
          Default
        </Button>
        <Button size="lg" appearance="subtle" {...args}>
          Subtle
        </Button>
        <Button size="lg" appearance="danger" {...args}>
          Danger
        </Button>
        <Button size="lg" appearance="link" {...args}>
          Link
        </Button>
      </Inline>
    </Stack>
  );
};

export const IsLoading = (args) => {
  return (
    <Inline>
      <Button isLoading appearance="primary" {...args}>
        Primary
      </Button>
      <Button isLoading appearance="secondary" {...args}>
        Primary
      </Button>
      <Button isLoading appearance="default" {...args}>
        Default
      </Button>
      <Button isLoading appearance="subtle" {...args}>
        Subtle
      </Button>
      <Button isLoading appearance="danger" {...args}>
        Danger
      </Button>
      <Button isLoading appearance="link" {...args}>
        Link
      </Button>
    </Inline>
  );
};

export const IsDisabled = (args) => {
  return (
    <Inline>
      <Button isDisabled appearance="primary" {...args}>
        Primary
      </Button>
      <Button isDisabled appearance="secondary" {...args}>
        Secondary
      </Button>
      <Button isDisabled appearance="default" {...args}>
        Default
      </Button>
      <Button isDisabled appearance="subtle" {...args}>
        Subtle
      </Button>
      <Button isDisabled appearance="danger" {...args}>
        Danger
      </Button>
      <Button isDisabled appearance="link" {...args}>
        Link
      </Button>
    </Inline>
  );
};

export const IconBefore = (args) => {
  return (
    <Inline>
      <Button iconBeforeElement={<MdStar />} appearance="primary" {...args}>
        Primary
      </Button>
      <Button iconBeforeElement={<MdStar />} appearance="secondary" {...args}>
        Secondary
      </Button>
      <Button iconBeforeElement={<MdStar />} appearance="default" {...args}>
        Default
      </Button>
      <Button iconBeforeElement={<MdStar />} appearance="subtle" {...args}>
        Subtle
      </Button>
      <Button iconBeforeElement={<MdStar />} appearance="danger" {...args}>
        Danger
      </Button>
      <Button iconBeforeElement={<MdStar />} appearance="link" {...args}>
        Link
      </Button>
    </Inline>
  );
};

export const IconAfter = (args) => {
  return (
    <Inline>
      <Button iconAfterElement={<MdStar />} appearance="primary" {...args}>
        Primary
      </Button>
      <Button iconAfterElement={<MdStar />} appearance="secondary" {...args}>
        Secondary
      </Button>
      <Button iconAfterElement={<MdStar />} appearance="default" {...args}>
        Default
      </Button>
      <Button iconAfterElement={<MdStar />} appearance="subtle" {...args}>
        Subtle
      </Button>
      <Button iconAfterElement={<MdStar />} appearance="danger" {...args}>
        Danger
      </Button>
      <Button iconAfterElement={<MdStar />} appearance="link" {...args}>
        Link
      </Button>
    </Inline>
  );
};
