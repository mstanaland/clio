import React from "react";
import { GenericButton } from "./index";

export default {
  component: GenericButton,
  title: "GenericButton",
};

export const Default = (args) => (
  <GenericButton {...args}>Generic button</GenericButton>
);
