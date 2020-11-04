import React, { useState } from "react";

import TextField from "./index";
import { SmallIconSearch } from "../Icons";

export default {
  component: TextField,
  title: "TextField",
};

const Template = (args) => <TextField label="Example text field" {...args} />;

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  iconElement: <SmallIconSearch />,
};

export const UnitBefore = Template.bind({});
UnitBefore.args = {
  unitBefore: "$",
  srUnitDescription: "dollars",
};

export const UnitAfter = Template.bind({});
UnitAfter.args = {
  unitAfter: "%",
  srUnitDescription: "percent",
};

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
  placeholder: "Placeholder",
};

export const IsInvalid = Template.bind({});
IsInvalid.args = {
  isInvalid: true,
};

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  errorText: "That is incorrect",
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  autoFocus: true,
};

export const HasClearButton = (args) => {
  const [value, setValue] = useState("");

  return (
    <TextField
      label="Example text field"
      hasClearButton
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onClearButtonClick={() => setValue("")}
      {...args}
    />
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
