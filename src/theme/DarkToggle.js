import React, { useContext } from "react";

import Checkbox from "../components/Checkbox";

import { ThemeContext } from "./ThemeProvider";

export default function DarkToggle() {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <div>
      <Checkbox
        isChecked={colorMode === "dark"}
        label="Dark"
        onChange={(event) => {
          setColorMode(event.target.checked ? "dark" : "light");
        }}
      />
    </div>
  );
}
