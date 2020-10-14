import { breakpoints } from "../constants";

export const resolveResponsiveRangeProps = (props) => {
  const { above, below } = props;

  if (!above && !below) {
    return [false, false, false, false];
  }

  let range;

  if (above && below) {
    const startIndex = above ? breakpoints.indexOf(above) + 1 : 0;
    const aboveBreakpoints = breakpoints.splice(startIndex, breakpoints.length);
    const endIndex = below
      ? breakpoints.indexOf(below)
      : breakpoints.length - 1;

    const belowBreakpoints = breakpoints.slice(0, endIndex);
    range = [...aboveBreakpoints, ...belowBreakpoints];
  } else {
    const startIndex = above ? breakpoints.indexOf(above) + 1 : 0;
    const endIndex = below
      ? breakpoints.indexOf(below) - 1
      : breakpoints.length - 1;
    range = breakpoints.slice(startIndex, endIndex + 1);
  }

  const includeMobile = range.indexOf("mobile") >= 0;
  const includeTablet = range.indexOf("tablet") >= 0;
  const includeDesktop = range.indexOf("desktop") >= 0;
  const includeWideScreen = range.indexOf("wideScreen") >= 0;

  return [includeMobile, includeTablet, includeDesktop, includeWideScreen];
};
