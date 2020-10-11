import React from "react";

import Heading from "./Heading";
// import HeadingSection from "./HeadingSection";

export default {
  component: Heading,
  title: "Heading",
};

export const Default = (args) => (
  <Heading {...args}>Your Trusted Platform for Enterprise AI</Heading>
);

export const AllSizes = () => {
  return (
    <div>
      <Heading size="xxl">Your Trusted Platform for Enterprise AI</Heading>
      <Heading size="xl">Your Trusted Platform for Enterprise AI</Heading>
      <Heading size="lg">Your Trusted Platform for Enterprise AI</Heading>
      <Heading size="md">Your Trusted Platform for Enterprise AI</Heading>
      <Heading size="sm">Your Trusted Platform for Enterprise AI</Heading>
      <Heading size="xs">Your Trusted Platform for Enterprise AI</Heading>
    </div>
  );
};
