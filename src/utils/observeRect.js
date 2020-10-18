/* eslint-disable no-param-reassign */

/**
 * Adapted from @reach/observeRect
 * MIT License
 * https://github.com/reach/observe-rect
 */

const props = ["bottom", "height", "left", "right", "top", "width"];

const rectChanged = (a = {}, b = {}) =>
  props.some((prop) => a[prop] !== b[prop]);

const observedNodes = new Map();
let rafId;

const run = () => {
  const changedStates = [];
  observedNodes.forEach((state, node) => {
    const newRect = node.getBoundingClientRect();
    if (rectChanged(newRect, state.rect)) {
      state.rect = newRect;
      changedStates.push(state);
    }
  });

  changedStates.forEach((state) => {
    state.callbacks.forEach((cb) => cb(state.rect));
  });

  rafId = window.requestAnimationFrame(run);
};

export default function observeRect(node, cb) {
  return {
    observe() {
      const wasEmpty = observedNodes.size === 0;
      if (observedNodes.has(node)) {
        observedNodes.get(node).callbacks.push(cb);
      } else {
        observedNodes.set(node, {
          rect: undefined,
          hasRectChanged: false,
          callbacks: [cb],
        });
      }
      if (wasEmpty) run();
    },

    unobserve() {
      const state = observedNodes.get(node);
      if (state) {
        // Remove the callback
        const index = state.callbacks.indexOf(cb);
        if (index >= 0) state.callbacks.splice(index, 1);

        // Remove the node reference
        if (!state.callbacks.length) observedNodes.delete(node);

        // Stop the loop
        if (!observedNodes.size) cancelAnimationFrame(rafId);
      }
    },
  };
}
