import React from "react";
import cx from "classnames";

import { extractBoxClasses } from "../Box";

import "./ContentBlock.scss";

export default function ContentBlock({ children, className, ...rest }) {
  const boxClasses = extractBoxClasses({
    paddingX: ["md", "lg", "xl"],
    marginX: "auto",
  });

  return (
    <div
      data-content-block
      className={cx(className, boxClasses, "mx-auto")}
      {...rest}
    >
      {children}
    </div>
  );
}
