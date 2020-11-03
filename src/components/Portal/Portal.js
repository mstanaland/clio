import React, { useState, useCallback, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

/**
 * Forces a re-render, similar to `forceUpdate` in class components.
 */
export function useForceUpdate() {
  let [, dispatch] = useState(Object.create(null));
  return useCallback(() => {
    dispatch(Object.create(null));
  }, []);
}

/**
 * Creates and appends a DOM node to the end of `document.body` and renders a
 * React tree into it. Useful for rendering a natural React element hierarchy
 * with a different DOM hierarchy to prevent parent styles from clipping or
 * hiding content (for popovers, drop-downs, and modals).
 */
const Portal = ({ children, type = "data-portal" }) => {
  let mountNode = useRef(null);
  let portalNode = useRef(null);
  let forceUpdate = useForceUpdate();

  useLayoutEffect(() => {
    // This ref may be null when a hot-loader replaces components on the page
    if (!mountNode.current) return;
    // It's possible that the content of the portal has, itself, been portaled.
    // In that case, it's important to append to the correct document element.
    const ownerDocument = mountNode.current?.ownerDocument;
    portalNode.current = ownerDocument?.createElement(type);
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate();
    return () => {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate]);

  return portalNode.current ? (
    createPortal(children, portalNode.current)
  ) : (
    <span ref={mountNode} />
  );
};

export default Portal;
