import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function getColumnClasses(width) {
  if (!Boolean(width)) {
    return cx("col");
  }

  if (typeof width === "string" || typeof width === "number") {
    const classes = cx({
      col: width === "fluid",
      [`col-${width}`]: Boolean(width) && width !== "fluid",
    });
    return classes;
  }

  if (Array.isArray(width)) {
    const [mobile, tablet, desktop, wideScreen] = width;

    const classes = cx({
      [`col-sm-${mobile}`]: Boolean(mobile) && mobile !== "fluid",
      [`col-md-${tablet}`]: Boolean(tablet) && tablet !== "fluid",
      [`col-lg-${desktop}`]: Boolean(desktop) && desktop !== "fluid",
      [`col-xl-${wideScreen}`]: Boolean(wideScreen) && wideScreen !== "fluid",
      "col-sm": mobile === "fluid",
      "col-md": tablet === "fluid",
      "col-lg": desktop === "fluid",
      "col-xl": wideScreen === "fluid",
    });

    return classes;
  }

  return {};
}

function getOffsetClasses(offset) {
  if (typeof offset === "string" || typeof offset === "number") {
    const classes = cx({
      [`offset-${offset}`]: Boolean(offset),
    });
    return classes;
  }

  if (Array.isArray(offset)) {
    const [mobile, tablet, desktop, wideScreen] = offset;

    const classes = cx({
      [`offset-sm-${mobile}`]: Boolean(mobile) && mobile !== "fluid",
      [`offset-md-${tablet}`]: Boolean(tablet) && tablet !== "fluid",
      [`offset-lg-${desktop}`]: Boolean(desktop) && desktop !== "fluid",
      [`offset-xl-${wideScreen}`]:
        Boolean(wideScreen) && wideScreen !== "fluid",
    });

    return classes;
  }

  return {};
}

export default function Column({ children, width, offset, className }) {
  const colClasses = getColumnClasses(width);
  const offsetClasses = getOffsetClasses(offset);

  return (
    <div data-column className={cx(className, colClasses, offsetClasses)}>
      {children}
    </div>
  );
}

const widthType = PropTypes.oneOf([
  "content",
  "fluid",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
]);

Column.propTypes = {
  /** Contents of the column */
  children: PropTypes.node,

  /** The width of the column. Value represents the number of columns in a 12-column grid
   * the user wants this column to occupy. For example 3: 3 out of 12 columns or 1/4
   * of the width. Accepts responsive values in an array ([mobile, tablet, desktop, wideScreen]) */
  width: PropTypes.oneOfType([PropTypes.arrayOf(widthType), widthType]),

  /** Adds space to the left of the column. Accepts responsive values */
  offset: PropTypes.oneOfType([PropTypes.arrayOf(widthType), widthType]),

  /** Additional class added to div */
  className: PropTypes.string,
};
