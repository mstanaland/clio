import React from "react";

import TextBlock from "./TextBlock";

export default {
  component: TextBlock,
  title: "TextBlock",
};

const Template = (args) => (
  <TextBlock {...args}>
    <p>
      Machine learning (ML) is the study of computer algorithms that improve
      automatically through experience. It is seen as a subset of artificial
      intelligence. Machine learning algorithms build a mathematical model based
      on sample data, known as "training data", in order to make predictions or
      decisions without being explicitly programmed to do so.
    </p>
    <p>
      Machine learning (ML) is the study of computer algorithms that improve
      automatically through experience. It is seen as a subset of artificial
      intelligence. Machine learning algorithms build a mathematical model based
      on sample data, known as "training data", in order to make predictions or
      decisions without being explicitly programmed to do so.
    </p>
    <p>
      Machine learning (ML) is the study of computer algorithms that improve
      automatically through experience. It is seen as a subset of artificial
      intelligence. Machine learning algorithms build a mathematical model based
      on sample data, known as "training data", in order to make predictions or
      decisions without being explicitly programmed to do so.
    </p>
  </TextBlock>
);

export const Default = Template.bind({});
