import React, { createContext, useState, useMemo, useEffect } from "react";

import getInitialColorMode from "./getInitialColorMode";
import setColorsByTheme from "./setColorsByTheme";
import { COLOR_MODE_KEY } from "./constants";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [colorMode, rawSetColorMode] = useState(getInitialColorMode);

  useEffect(() => {
    setColorsByTheme(colorMode);
  }, [colorMode]);

  const contextValue = useMemo(() => {
    function setColorMode(newValue) {
      localStorage.setItem(COLOR_MODE_KEY, newValue);
      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
