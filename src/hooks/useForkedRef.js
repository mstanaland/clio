import { useMemo } from "react";

import { assignRef } from "../utils";

/**
 * Passes or assigns a value to multiple refs (typically a DOM node). Useful for
 * dealing with components that need an explicit ref for DOM calculations but
 * also forwards refs assigned by an app.
 *
 * @param refs Refs to fork
 */
export function useForkedRef(...refs) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node) => {
      refs.forEach((ref) => {
        assignRef(ref, node);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...refs]);
}
