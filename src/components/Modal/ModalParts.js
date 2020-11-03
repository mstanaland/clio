/* eslint-disable jsx-a11y/no-static-element-interactions */

/**
 * Adapted from Reach-ui dialog
 * MIT License https://github.com/reach/reach-ui
 */

import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import PropTypes from "prop-types";

import { useForkedRef } from "../../hooks";
import { getOwnerDocument, wrapEvent } from "../../utils";

import Portal from "../Portal";
import "./Modal.scss";

const noop = () => {};

const overlayPropTypes = {
  allowPinchZoom: PropTypes.bool,
  dangerouslyBypassFocusLock: PropTypes.bool,
  dangerouslyBypassScrollLock: PropTypes.bool,
  initialFocusRef: PropTypes.object,
  onDismiss: PropTypes.func,
};

////////////////////////////////////////////////////////////////////////////////

/**
 * ModalOverlay
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog overlay.
 *
 * Note: You must render a `ModalContent` inside.
 */
export const ModalOverlay = forwardRef(function ModalOverlay(
  props,
  forwardedRef
) {
  const { isOpen = true, ...rest } = props;

  return isOpen ? (
    <Portal data-modal-wrapper>
      <ModalInner ref={forwardedRef} {...rest} />
    </Portal>
  ) : null;
});

ModalOverlay.propTypes = overlayPropTypes;

////////////////////////////////////////////////////////////////////////////////

/**
 * ModalInner
 */
const ModalInner = forwardRef(function ModalInner(
  {
    allowPinchZoom,
    dangerouslyBypassFocusLock = false,
    dangerouslyBypassScrollLock = false,
    initialFocusRef,
    onClick,
    onDismiss = noop,
    onKeyDown,
    onMouseDown,
    unstable_lockFocusAcrossFrames = true,
    ...props
  },
  forwardedRef
) {
  const mouseDownTarget = useRef(null);
  const overlayNode = useRef(null);
  const ref = useForkedRef(overlayNode, forwardedRef);

  const activateFocusLock = useCallback(() => {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);

  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss(event);
    }
  }

  function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  }

  useEffect(
    () =>
      overlayNode.current ? createAriaHider(overlayNode.current) : void null,
    []
  );

  return (
    <FocusLock
      autoFocus
      returnFocus
      onActivation={activateFocusLock}
      disabled={dangerouslyBypassFocusLock}
      crossFrame={unstable_lockFocusAcrossFrames}
    >
      <RemoveScroll
        allowPinchZoom={allowPinchZoom}
        enabled={!dangerouslyBypassScrollLock}
      >
        <div
          {...props}
          ref={ref}
          data-modal-overlay
          /*
           * We can ignore the `no-static-element-interactions` warning here
           * because our overlay is only designed to capture any outside
           * clicks, not to serve as a clickable element itself.
           */
          onClick={wrapEvent(onClick, handleClick)}
          onKeyDown={wrapEvent(onKeyDown, handleKeyDown)}
          onMouseDown={wrapEvent(onMouseDown, handleMouseDown)}
        />
      </RemoveScroll>
    </FocusLock>
  );
});

////////////////////////////////////////////////////////////////////////////////

/**
 * ModalContent
 *
 * Low-level component if you need more control over the styles or rendering of
 * the dialog content.
 *
 * Note: Must be a child of `ModalOverlay`.
 *
 * Note: You only need to use this when you are also styling `ModalOverlay`,
 * otherwise you can use the high-level `Modal` component and pass the props
 * to it. Any props passed to `Modal` component (besides `isOpen` and
 * `onDismiss`) will be spread onto `ModalContent`.
 *
 */
export const ModalContent = forwardRef(function ModalContent(
  { onClick, onKeyDown, ...props },
  forwardedRef
) {
  return (
    <div
      data-modal-content
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      {...props}
      ref={forwardedRef}
      onClick={wrapEvent(onClick, (event) => {
        event.stopPropagation();
      })}
    />
  );
});

////////////////////////////////////////////////////////////////////////////////
function createAriaHider(dialogNode) {
  let originalValues = [];
  let rootNodes = [];
  let ownerDocument = getOwnerDocument(dialogNode) || document;

  if (!dialogNode) {
    console.warn(
      "A ref has not yet been attached to a dialog node when attempting to call `createAriaHider`."
    );
    return noop;
  }

  Array.prototype.forEach.call(
    ownerDocument.querySelectorAll("body > *"),
    (node) => {
      const portalNode = dialogNode.parentNode?.parentNode?.parentNode;
      if (node === portalNode) {
        return;
      }
      let attr = node.getAttribute("aria-hidden");
      let alreadyHidden = attr !== null && attr !== "false";
      if (alreadyHidden) {
        return;
      }
      originalValues.push(attr);
      rootNodes.push(node);
      node.setAttribute("aria-hidden", "true");
    }
  );

  return () => {
    rootNodes.forEach((node, index) => {
      let originalValue = originalValues[index];
      if (originalValue === null) {
        node.removeAttribute("aria-hidden");
      } else {
        node.setAttribute("aria-hidden", originalValue);
      }
    });
  };
}
