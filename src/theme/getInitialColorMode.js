export default function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference = Boolean(persistedColorPreference);

  // If the user has explicitly chosen light or dark, use it. Otherwise, value will be null
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  // If not explicitly set, check media query
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }

  // Otherwise we return default of 'light'
  return "light";
}
