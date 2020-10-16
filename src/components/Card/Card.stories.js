import React from "react";

import Card from "./Card";
import Text from "../Text";

export default {
  component: Card,
  title: "Card",
};

const Template = (args) => (
  <div className="n30 p-xxl">
    <Card {...args}>
      <Text>
        This is a card. It's just like a Box but with some preset things like
        padding and background, and shadow.
      </Text>
    </Card>
  </div>
);

export const Default = Template.bind({});
