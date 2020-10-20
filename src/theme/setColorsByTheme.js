import { COLORS } from "./constants";

export default function setColorsByTheme(colorMode) {
  const root = document.documentElement;

  Object.entries(COLORS).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}
