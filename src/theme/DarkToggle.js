import React, { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";

export default function DarkToggle() {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <div>
      <input
        id="dark-toggle-input"
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={(event) => {
          setColorMode(event.target.checked ? "dark" : "light");
        }}
      />
      <label htmlFor="dark-toggle-input" className="text text-md">
        {" "}
        Dark
      </label>
    </div>
  );
}
