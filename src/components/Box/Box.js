import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import {
  htmlElementsType,
  unitOrUnitlessMeasureType,
  responsiveTShirtType,
} from "../../types";
import resolveUnitlessValue from "../../utils/resolveUnitlessValue";
import extractBoxClasses from "./extractBoxClasses";

export default function Box({
  children,
  tag = "div",
  width,
  height,
  style,
  className,
  ...props
}) {
  const [boxClasses, rest] = extractBoxClasses(props);
  const Tag = tag;

  return (
    <Tag
      className={cx(boxClasses, className)}
      style={{
        width: resolveUnitlessValue(width),
        height: resolveUnitlessValue(height),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const displayTypes = PropTypes.oneOf(["none", "block", "flex", "inlineFlex"]);

const positionTypes = PropTypes.oneOf(["static", "relative", "absolute"]);

const flexDirectionTypes = PropTypes.oneOf(["row", "column"]);

const alignItemTypes = PropTypes.oneOf(["start", "center", "end", "stretch"]);

const justifyContentTypes = PropTypes.oneOf([
  "start",
  "end",
  "center",
  "spaceBetween",
  "spaceAround",
]);

Box.propTypes = {
  children: PropTypes.node,
  tag: htmlElementsType,
  width: unitOrUnitlessMeasureType,
  height: unitOrUnitlessMeasureType,
  style: PropTypes.object,
  className: PropTypes.string,
  padding: responsiveTShirtType,
  paddingTop: responsiveTShirtType,
  paddingBottom: responsiveTShirtType,
  paddingLeft: responsiveTShirtType,
  paddingRight: responsiveTShirtType,
  paddingX: responsiveTShirtType,
  paddingY: responsiveTShirtType,
  margin: responsiveTShirtType,
  marginTop: responsiveTShirtType,
  marginBottom: responsiveTShirtType,
  marginLeft: responsiveTShirtType,
  marginRight: responsiveTShirtType,
  marginX: responsiveTShirtType,
  marginY: responsiveTShirtType,
  display: PropTypes.oneOfType([displayTypes, PropTypes.arrayOf(displayTypes)]),
  position: PropTypes.oneOfType([
    positionTypes,
    PropTypes.arrayOf(positionTypes),
  ]),
  flexDirection: PropTypes.oneOfType([
    flexDirectionTypes,
    PropTypes.arrayOf(flexDirectionTypes),
  ]),
  alignItems: PropTypes.oneOfType([
    alignItemTypes,
    PropTypes.arrayOf(alignItemTypes),
  ]),
  justifyContent: PropTypes.oneOfType([
    justifyContentTypes,
    PropTypes.arrayOf(justifyContentTypes),
  ]),
  background: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOf([1, 2, 3]),
  borderRadius: PropTypes.oneOf(["sm", "md", "lg"]),
  borderTopRadius: PropTypes.oneOf(["sm", "md", "lg"]),
  borderBottomRadius: PropTypes.oneOf(["sm", "md", "lg"]),
  borderLeftRadius: PropTypes.oneOf(["sm", "md", "lg"]),
  borderRightRadius: PropTypes.oneOf(["sm", "md", "lg"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl"]),
};
