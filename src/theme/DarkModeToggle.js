import React, { useContext } from "react";

import Switch from "../components/Switch";
import Inline from "../components/Inline";
import { VisualOnlyLabel } from "../components/Label";

import { ThemeContext } from "./ThemeProvider";

export default function DarkModeToggle() {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    throw new Error('No "ThemeProvider" configured');
  }

  const { colorMode, setColorMode } = contextValue;

  if (!colorMode) {
    return null;
  }

  return (
    <Inline>
      <VisualOnlyLabel id="dark-mode-label-id">Dark Mode</VisualOnlyLabel>
      <Switch
        isChecked={colorMode === "dark"}
        label="Dark"
        aria-labelledby="dark-mode-label-id"
        onPress={() => {
          setColorMode(colorMode === "dark" ? "light" : "dark");
        }}
      />
    </Inline>
  );
}
