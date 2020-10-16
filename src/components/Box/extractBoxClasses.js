function indexToBreakpoint(index) {
  switch (index) {
    case 0:
      return "";
    case 1:
      return "-md";
    case 2:
      return "-lg";
    case 3:
      return "-xl";
    default:
      return "";
  }
}

export default function extractBoxClasses(props) {
  const {
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingX,
    paddingY,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
    display,
    position,
    flexDirection,
    alignItems,
    justifyContent,
    background,
    borderColor,
    borderWidth,
    borderRadius,
    borderTopRadius,
    borderBottomRadius,
    borderLeftRadius,
    borderRightRadius,
    shadow,
    ...rest
  } = props;

  const classes = {};

  // padding
  if (Boolean(padding)) {
    if (typeof padding === "string") {
      classes[`p-${padding}`] = true;
    } else if (Array.isArray(padding)) {
      padding.forEach(
        (item, index) =>
          (classes[`p${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // paddingTop
  if (Boolean(paddingTop)) {
    if (typeof paddingTop === "string") {
      classes[`pt-${paddingTop}`] = true;
    } else if (Array.isArray(paddingTop)) {
      paddingTop.forEach(
        (item, index) =>
          (classes[`pt${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // paddingBottom
  if (Boolean(paddingBottom)) {
    if (typeof paddingBottom === "string") {
      classes[`pb-${paddingBottom}`] = true;
    } else if (Array.isArray(paddingBottom)) {
      paddingBottom.forEach(
        (item, index) =>
          (classes[`pb${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // paddingLeft
  if (Boolean(paddingLeft)) {
    if (typeof paddingLeft === "string") {
      classes[`pl-${paddingLeft}`] = true;
    } else if (Array.isArray(paddingLeft)) {
      paddingLeft.forEach(
        (item, index) =>
          (classes[`pl${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // paddingRight
  if (Boolean(paddingRight)) {
    if (typeof paddingRight === "string") {
      classes[`pr-${paddingRight}`] = true;
    } else if (Array.isArray(paddingRight)) {
      paddingRight.forEach(
        (item, index) =>
          (classes[`pr${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // paddingX
  if (Boolean(paddingX)) {
    if (typeof paddingX === "string") {
      classes[`px-${paddingX}`] = true;
    } else if (Array.isArray(paddingX)) {
      paddingX.forEach(
        (item, index) =>
          (classes[`px${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // paddingY
  if (Boolean(paddingY)) {
    if (typeof paddingY === "string") {
      classes[`py-${paddingY}`] = true;
    } else if (Array.isArray(paddingY)) {
      paddingY.forEach(
        (item, index) =>
          (classes[`py${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // margin
  if (Boolean(margin)) {
    if (typeof margin === "string") {
      classes[`m-${margin}`] = true;
    } else if (Array.isArray(margin)) {
      margin.forEach(
        (item, index) =>
          (classes[`m${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // marginTop
  if (Boolean(marginTop)) {
    if (typeof marginTop === "string") {
      classes[`mt-${marginTop}`] = true;
    } else if (Array.isArray(marginTop)) {
      marginTop.forEach(
        (item, index) =>
          (classes[`mt${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // marginBottom
  if (Boolean(marginBottom)) {
    if (typeof marginBottom === "string") {
      classes[`mb-${marginBottom}`] = true;
    } else if (Array.isArray(marginBottom)) {
      marginBottom.forEach(
        (item, index) =>
          (classes[`mb${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // marginLeft
  if (Boolean(marginLeft)) {
    if (typeof marginLeft === "string") {
      classes[`ml-${marginLeft}`] = true;
    } else if (Array.isArray(marginLeft)) {
      marginLeft.forEach(
        (item, index) =>
          (classes[`ml${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // marginRight
  if (Boolean(marginRight)) {
    if (typeof marginRight === "string") {
      classes[`mr-${marginRight}`] = true;
    } else if (Array.isArray(marginRight)) {
      marginRight.forEach(
        (item, index) =>
          (classes[`mr${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // marginX
  if (Boolean(marginX)) {
    if (typeof marginX === "string") {
      classes[`mx-${marginX}`] = true;
    } else if (Array.isArray(marginX)) {
      marginX.forEach(
        (item, index) =>
          (classes[`mx${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // marginY
  if (Boolean(marginY)) {
    if (typeof marginY === "string") {
      classes[`my-${marginY}`] = true;
    } else if (Array.isArray(marginY)) {
      marginY.forEach(
        (item, index) =>
          (classes[`my${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // display
  if (Boolean(display)) {
    if (typeof display === "string") {
      classes[`display-${display}`] = true;
    } else if (Array.isArray(display)) {
      display.forEach(
        (item, index) =>
          (classes[`display${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // position
  if (Boolean(position)) {
    if (typeof position === "string") {
      classes[`position-${position}`] = true;
    } else if (Array.isArray(position)) {
      position.forEach(
        (item, index) =>
          (classes[`position${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // flexDirection
  if (Boolean(flexDirection)) {
    if (typeof flexDirection === "string") {
      classes[`flex-direction-${flexDirection}`] = true;
    } else if (Array.isArray(flexDirection)) {
      flexDirection.forEach(
        (item, index) =>
          (classes[`flex-direction${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // justifyContent
  if (Boolean(justifyContent)) {
    if (typeof justifyContent === "string") {
      classes[`justify-content-${justifyContent}`] = true;
    } else if (Array.isArray(justifyContent)) {
      justifyContent.forEach(
        (item, index) =>
          (classes[`justify-content${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // alignItems
  if (Boolean(alignItems)) {
    if (typeof alignItems === "string") {
      classes[`align-items-${alignItems}`] = true;
    } else if (Array.isArray(alignItems)) {
      alignItems.forEach(
        (item, index) =>
          (classes[`align-items${indexToBreakpoint(index)}-${item}`] = true)
      );
    }
  }

  // background
  if (Boolean(background)) {
    classes[background] = true;
  }

  // borderColor
  if (Boolean(borderColor)) {
    classes[`border-${borderColor}`] = true;

    if (!Boolean(borderWidth)) {
      classes["border-1"] = true;
    }
  }

  // borderWidth
  if (Boolean(borderWidth)) {
    classes[`border-${borderWidth}`] = true;
  }

  // borderRadius
  if (Boolean(borderRadius)) {
    classes[`radius-${borderRadius}`] = true;
  }
  // borderTopRadius
  if (Boolean(borderTopRadius)) {
    classes[`radius-top-${borderTopRadius}`] = true;
  }
  // borderBottomRadius
  if (Boolean(borderBottomRadius)) {
    classes[`radius-bottom-${borderBottomRadius}`] = true;
  }
  // borderLeftRadius
  if (Boolean(borderLeftRadius)) {
    classes[`radius-left-${borderLeftRadius}`] = true;
  }
  // borderRightRadius
  if (Boolean(borderRightRadius)) {
    classes[`radius-right-${borderRightRadius}`] = true;
  }

  // shadow
  if (Boolean(shadow)) {
    classes[`shadow-${shadow}`] = true;
  }

  return [classes, rest];
}
