import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useButton } from "@react-aria/button";

export default function Button(props) {
  const {
    children,
    type = "button",
    appearance = "primary",
    size = "md",
    isDisabled,
    href,
    to,
    iconBeforeElement,
    isLoading,
    shouldFocusOnMount,
    className,
    onClick,
  } = props;

  function getTag() {
    if (Boolean(to)) {
      return Link;
    }

    if (Boolean(href)) {
      return "a";
    }

    return "button";
  }

  function handleKeyDown(event) {
    const key = event.key || event.code || event.keyCode;
    switch (key) {
      case " " || "Space" || 32:
        event.preventDefault();
        window.location = event.target.href;
        break;
      default:
        break;
    }
  }

  function handleClick(event) {
    if (onClick && !(isLoading || isDisabled)) {
      onClick(event);
    }
  }

  const isNativeButton = !Boolean(to) || !Boolean(href);
  const buttonRef = useRef();

  const ButtonElement = getTag();
  let { buttonProps } = useButton(
    { ...props, elementType: ButtonElement },
    buttonRef
  );
  return (
    <ButtonElement
      {...buttonProps}
      ref={buttonRef}
      type={isNativeButton ? type : null}
    >
      {children}
    </ButtonElement>
  );
}
