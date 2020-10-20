import React, { Children } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import {
  responsiveTShirtType,
  responsiveAlignXType,
  responsiveAlignYType,
  breakpointsType,
} from "../../types";
import { resolveResponsiveRangeProps } from "../../utils/resolveResponsiveRangeProps";
import { extractBoxClasses } from "../Box";
import {
  mapSpaceToNegativeSpace,
  mapAlignXToJustifyContent,
  mapAlignYToAlignItems,
} from "./utils";

export default function Inline({
  children,
  space = "md",
  alignX = "left",
  alignY = "center",
  collapseBelow: below,
}) {
  const negativeSpace = mapSpaceToNegativeSpace(space);
  const [
    blockOnMobile,
    blockOnTablet,
    blockOnDesktop,
    blockOnWideScreen,
  ] = resolveResponsiveRangeProps({ below });

  const display = [
    blockOnMobile ? "block" : "flex",
    blockOnTablet ? "block" : "flex",
    blockOnDesktop ? "block" : "flex",
    blockOnWideScreen ? "block" : "flex",
  ];

  const innerContainerProps = {
    display,
    marginTop: negativeSpace,
    marginLeft: negativeSpace,
    justifyContent: mapAlignXToJustifyContent(alignX),
    alignItems: mapAlignYToAlignItems(alignY),
  };
  const [innerContainerClasses] = extractBoxClasses(innerContainerProps);

  return (
    <div data-inline style={{ overflowX: "hidden" }}>
      <div className={cx("flex-wrap", innerContainerClasses)}>
        {Children.map(children, (child) => {
          const itemProps = {
            marginTop: space,
            marginLeft: space,
          };

          const [itemClasses] = extractBoxClasses(itemProps);

          return <div className={cx(itemClasses)}>{child}</div>;
        })}
      </div>
    </div>
  );
}

Inline.propTypes = {
  children: PropTypes.node,
  space: responsiveTShirtType,
  alignX: responsiveAlignXType,
  alignY: responsiveAlignYType,
  collapseBelow: breakpointsType,
};
