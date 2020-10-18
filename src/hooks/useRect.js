/**
 * Adapted from reach-ui
 * https://github.com/reach/reach-ui
 * MIT license
 */

import { useRef, useState, useEffect } from "react";
import observeRect from "../utils/observeRect";

export function useRect(nodeRef, observe = true, onChange) {
  const initialRectSet = useRef(false);
  const [rect, setRect] = useState(null);

  const observerRef = useRef(null);

  useEffect(() => {
    const cleanup = () => {
      if (observerRef.current) {
        observerRef.current.unobserve();
      }
    };

    if (!nodeRef.current) {
      // eslint-disable-next-line no-console
      console.warn("You need to place the ref");
      return cleanup;
    }

    if (!observerRef.current) {
      observerRef.current = observeRect(nodeRef.current, (currentRect) => {
        if (onChange) {
          onChange(currentRect);
        }
        setRect(currentRect);
      });
    }

    if (!initialRectSet.current) {
      initialRectSet.current = true;
      setRect(nodeRef.current.getBoundingClientRect());
    }

    if (observe && observerRef.current) {
      observerRef.current.observe();
    }

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observe, onChange]);

  return rect;
}
