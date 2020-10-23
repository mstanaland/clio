import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { tShirtType } from "../../types";
import { mapResponsiveProp } from "../../utils";

import { extractBoxClasses } from "../Box";

const alignYToAlignItems = {
  top: "start",
  center: "center",
  bottom: "end",
};

const alignXToJustifyContent = {
  left: "start",
  center: "center",
  right: "end",
  spaceBetween: "spaceBetween",
  spaceAround: "spaceAround",
};

export default function Row({
  children,
  className,
  gutter = "md",
  gutterX,
  gutterY,
  alignX,
  alignY,
}) {
  const boxClasses = extractBoxClasses({
    alignItems: mapResponsiveProp(alignY, alignYToAlignItems),
    justifyContent: mapResponsiveProp(alignX, alignXToJustifyContent),
  });

  return (
    <div
      data-row
      className={cx(className, "row", boxClasses, {
        [`g-${gutter}`]:
          Boolean(gutter) && (!Boolean(gutterX) || !Boolean(gutterY)),
        [`gx-${gutterX}`]: Boolean(gutterX),
        [`gy-${gutterY}`]: Boolean(gutterY),
      })}
    >
      {children}
    </div>
  );
}

const alignYType = PropTypes.oneOf(["top", "center", "bottom"]);
const alignXType = PropTypes.oneOf([
  "left",
  "center",
  "right",
  "spaceBetween",
  "spaceAround",
]);

Row.propTypes = {
  /** Expected to be one or more <Column>'s */
  children: PropTypes.node,

  /** Vertical and horizontal space between columns */
  gutter: tShirtType,

  /** Horizontal space between columns */
  gutterX: tShirtType,

  /** Vertical space between columns */
  gutterY: tShirtType,

  /** Horizontal alignment of columns *IF* columns do not fill the entire horizontal space */
  alignX: PropTypes.oneOfType([alignXType, PropTypes.arrayOf(alignXType)]),

  /** Vertical alignment of columns *IF* the columns are different heights */
  alignY: PropTypes.oneOfType([alignYType, PropTypes.arrayOf(alignYType)]),

  /** Additional class added to the div */
  className: PropTypes.string,
};
