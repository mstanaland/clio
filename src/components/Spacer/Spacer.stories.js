import React from "react";

import Spacer from "./Spacer";

export default {
  component: Spacer,
  title: "Spacer",
};

export const Default = (args) => (
  <div>
    <div className="n30" style={{ height: "100px" }} />
    <Spacer {...args} />
    <div className="n30" style={{ height: "100px" }} />
  </div>
);
