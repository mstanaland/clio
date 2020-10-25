// cSpell:ignore transitionend

import { useMemo, useCallback, useLayoutEffect } from "react";

const entranceTransition = "transform 150ms ease-in, opacity 250ms ease-in";
const exitTransition = "opacity 200ms ease-out";
const animationTimeout = 3000;

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

export const useFlipList = () => {
  const refs = useMemo(() => new Map(), []);
  const positions = useMemo(() => new Map(), []);

  useLayoutEffect(() => {
    const animations = [];

    Array.from(refs.entries()).forEach(([id, element]) => {
      if (element) {
        const prevTop = positions.get(id);
        const { top, height } = element.getBoundingClientRect();

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

        // ****** Do we really need to get the rect again here ???????? **************
        positions.set(id, element.getBoundingClientRect().top);
      } else {
        refs.delete(id);
      }
    });

    animations.forEach((item) => {
      animate(item);
    });
  });

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
