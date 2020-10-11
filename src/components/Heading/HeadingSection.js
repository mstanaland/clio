import React, { useContext } from "react";

export const HeadingLevelContext = React.createContext(1);

export default function HeadingSection({ tag = "none", children }) {
  const headingLevel = useContext(HeadingLevelContext);
  let contents;

  if (tag !== "none") {
    const Tag = tag;
    contents = <Tag>{children}</Tag>;
  } else {
    contents = children;
  }

  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      {contents}
    </HeadingLevelContext.Provider>
  );
}
