import React, { useState } from "react";

import { Select, SelectOption } from "./index";

export default {
  component: Select,
  title: "Select",
};

const Template = (args) => (
  <Select label="Favorite feature" {...args}>
    <SelectOption value="a">Model drift</SelectOption>
    <SelectOption value="b">Model management</SelectOption>
    <SelectOption value="c">Model operations</SelectOption>
  </Select>
);

export const Default = Template.bind({});

export const WithOptionsArray = (args) => (
  <Select
    label="Favorite feature"
    options={[
      { label: "Model drift", value: "a" },
      { label: "Model management", value: "b" },
      { label: "Model operations", value: "c" },
    ]}
    {...args}
  />
);

export const IsRequired = Template.bind({});
IsRequired.args = {
  isRequired: true,
};

export const IsInline = Template.bind({});
IsInline.args = {
  isInline: true,
};

export const LabelHidden = Template.bind({});
LabelHidden.args = {
  isLabelVisible: false,
};

export const IsDisabled = Template.bind({});
IsDisabled.args = {
  isDisabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Choose a feature...",
};

export const IsInvalid = Template.bind({});
IsInvalid.args = {
  isInvalid: true,
};

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  errorText: "That is incorrect",
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: "c",
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  autoFocus: true,
};

export const Controlled = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Select
        placeholder="Choose a feature ..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label="Favorite feature"
        options={[
          { label: "Model drift", value: "drift" },
          { label: "Model management", value: "management" },
          { label: "Model operations", value: "operations" },
        ]}
      />
      <br />
      <code>Value: {value}</code>
    </div>
  );
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};

export const IsLoadingAndIsInline = Template.bind({});
IsLoadingAndIsInline.args = {
  isLoading: true,
  isInline: true,
};
