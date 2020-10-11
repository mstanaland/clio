import PropTypes from "prop-types";

export const tShirtType = PropTypes.oneOf([
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
