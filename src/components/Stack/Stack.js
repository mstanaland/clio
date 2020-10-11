import React, { Children } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import mapResponsiveProp from "../../utils/mapResponsiveProp";

import { extractBoxClasses } from "../Box";
import Divider from "../Divider";

const alignToDisplay = {
  left: "block",
  center: "flex",
  right: "flex",
};

const alignToFlexAlign = {
  left: "start",
  center: "center",
  right: "end",
};

export default function Stack({
  children,
  space = "md",
  align,
  tag: OuterTag = "div",
  hasDividers,
  dividerColor = "normal",
}) {
  const stackItems = Children.toArray(children);
  const isList = OuterTag === "ol" || OuterTag === "ul";
  const StackItemTag = isList ? "li" : "div";
  const alignProps = {};

  if (Boolean(align) && align !== "left") {
    alignProps.display = mapResponsiveProp(align, alignToDisplay);
    alignProps.flexDirection = "column";
    alignProps.alignItems = mapResponsiveProp(align, alignToFlexAlign);
  }

  return (
    <OuterTag data-stack>
      {stackItems.map((child, index) => {
        const shouldRenderDivider = hasDividers && index > 0;
        const stackItemBoxProps = {
          paddingTop: index > 0 ? space : null,
          ...alignProps,
        };
        const dividerWrapBoxProps = {
          paddingBottom: space,
        };

        const [stackItemClasses] = extractBoxClasses(stackItemBoxProps);
        const [dividerWrapClasses] = extractBoxClasses(dividerWrapBoxProps);

        return (
          <StackItemTag key={index} className={cx(stackItemClasses)}>
            {shouldRenderDivider && (
              <div className={cx(dividerWrapClasses)} style={{ width: "100%" }}>
                <Divider color={dividerColor} />
              </div>
            )}
            {child}
          </StackItemTag>
        );
      })}
    </OuterTag>
  );
}

Stack.propTypes = {
  /** Sets the color of the divider */
  dividerColor: PropTypes.oneOf(["normal", "light", "dark"]),
};
