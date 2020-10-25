// cSpell:ignore transitionend

/**
 * Adapted from Braid Design System. MIT License
 * https://github.com/seek-oss/braid-design-system
 */

import { useMemo, useCallback, useLayoutEffect } from "react";

const entranceTransition = "transform 150ms ease-in, opacity 250ms ease-in";
const exitTransition = "opacity 200ms ease-out";
const animationTimeout = 3000;

/**
 * Takes an object containing the element, desired transitions, and call backs
 * and applies those transition properties and styles to the element directly.
 *
 * Generally, when a toast is added or removed, every toast in the toaster has its
 * translateY value change and we transition to that new value so it appears that the
 * vertical stack slides up and down
 */
function animate({ element, transforms, transition, isRemove, callback }) {
  const fallbackTimeout = setTimeout(() => {
    if (callback) {
      callback();
    }
  }, animationTimeout);

  if (isRemove) {
    element.classList.add("out");
  }

  transforms.forEach(({ property, from = "" }) => {
    element.style.setProperty(property, from);
  });
  element.style.setProperty("transition", "");

  const transitionEndHandler = (event) => {
    if (event.target !== element) {
      return;
    }

    element.style.setProperty("transition", "");

    if (callback) {
      callback();
    }

    element.removeEventListener("transitionend", transitionEndHandler);

    clearTimeout(fallbackTimeout);
  };

  element.addEventListener("transitionend", transitionEndHandler);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      element.style.setProperty("transition", transition);

      transforms.forEach(({ property, to = "" }) => {
        element.style.setProperty(property, to);
      });
    });
  });
}

/**
 * Hook used in Toaster to key track of the individual toast refs and their positions
 * so they can be animated in and out
 */
export const useAnimationManager = () => {
  // Map to track ref for each toast
  const refs = useMemo(() => new Map(), []);
  // Map to track boundingClientRect.top for each toast
  const positions = useMemo(() => new Map(), []);

  useLayoutEffect(() => {
    const animations = [];

    // Convert ref map to array and iterate over each ref
    Array.from(refs.entries()).forEach(([id, element]) => {
      if (element) {
        // Get the previous top position from map, and then get the new top position
        const prevTop = positions.get(id);
        const { top, height } = element.getBoundingClientRect();

        // Construct the animation description object for the animate func
        if (typeof prevTop === "number" && prevTop !== top) {
          // Move animation
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: "transform",
                from: `translateY(${prevTop - top}px)`,
              },
            ],
          });
        } else if (typeof prevTop !== "number") {
          // Enter animation
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: "transform",
                from: `translateY(${height}px)`,
              },
              {
                property: "opacity",
                from: "0",
              },
            ],
          });
        }

        positions.set(id, top);
      } else {
        refs.delete(id);
      }
    });

    // call the animate func for each toast item
    animations.forEach((item) => {
      animate(item);
    });
  });

  // remove handler
  const remove = useCallback(
    (id, callback) => {
      const element = refs.get(id);
      const transforms = [
        {
          property: "opacity",
          to: "0",
        },
      ];

      if (element) {
        // Removal animation
        animate({
          element,
          transforms,
          transition: exitTransition,
          isRemove: true,
          callback,
        });
      }
    },
    [refs]
  );

  const itemRef = useCallback(
    (id) => (ref) => {
      refs.set(id, ref);
    },
    [refs]
  );

  return {
    itemRef,
    remove,
  };
};
