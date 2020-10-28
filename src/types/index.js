import PropTypes from "prop-types";

export const tShirtType = PropTypes.oneOf([
  "none",
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
]);

export const responsiveTShirtType = PropTypes.oneOfType([
  tShirtType,
  PropTypes.arrayOf(PropTypes.string),
]);

export const htmlElementsType = PropTypes.oneOf([
  "div",
  "article",
  "section",
  "aside",
  "figure",
  "figcaption",
  "footer",
  "header",
  "nav",
  "menu",
  "summary",
  "span",
  "p",
  "pre",
  "code",
  "ol",
  "ul",
  "li",
  "dl",
  "dt",
  "dd",
  "blockquote",
  "form",
  "fieldset",
  "label",
  "legend",
  "table",
  "caption",
  "tbody",
  "thead",
  "tr",
  "td",
  "th",
  "a",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
]);

export const unitOrUnitlessMeasureType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);

const displayTypes = PropTypes.oneOf(["none", "block", "flex", "inlineFlex"]);

const positionTypes = PropTypes.oneOf(["static", "relative", "absolute"]);

const flexDirectionTypes = PropTypes.oneOf(["row", "column"]);

export const alignXType = PropTypes.oneOf([
  "left",
  "right",
  "center",
  "spaceAround",
  "spaceBetween",
]);

export const responsiveAlignXType = PropTypes.oneOfType([
  alignXType,
  PropTypes.arrayOf(alignXType),
]);

export const alignYType = PropTypes.oneOf([
  "top",
  "bottom",
  "center",
  "stretch",
]);

export const responsiveAlignYType = PropTypes.oneOfType([
  alignYType,
  PropTypes.arrayOf(alignYType),
]);

const alignItemTypes = PropTypes.oneOf(["start", "center", "end", "stretch"]);

const justifyContentTypes = PropTypes.oneOf([
  "start",
  "end",
  "center",
  "spaceBetween",
  "spaceAround",
]);

export const boxTypes = {
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
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl"]),
};

export const breakpointsType = PropTypes.oneOf([
  "mobile",
  "tablet",
  "desktop",
  "wideScreen",
]);

export const selectValueType = (props, propName, componentName) => {
  if (props[propName] != null) {
    const type = typeof props[propName];
    const shouldBeArray = !!props.multiple;

    if (shouldBeArray && !Array.isArray(props[propName])) {
      return new Error(
        `Invalid prop \`${propName}\` of type \`${type}\` supplied to \`${componentName}\`, expected \`array\``
      );
    }
    if (!shouldBeArray && type !== "string") {
      return new Error(
        `Invalid prop \`${propName}\` of type \`${type}\` supplied to \`${componentName}\`, expected \`string\``
      );
    }
  }
  return null;
};
