import React, { useCallback } from "react";
import { animated } from "react-spring";

import { Toast } from "./Toast";
import { useFlipList } from "./useFlipList";
import "./Toaster.scss";

export default function Toaster({ toasts, removeToast }) {
  const { itemRef, remove } = useFlipList();

  const onClear = useCallback(
    (dedupeKey, id) => {
      remove(id, () => {
        removeToast(dedupeKey);
      });
    },
    [remove, removeToast]
  );

  return (
    <div data-toaster>
      {toasts.map(({ id, ...rest }) => (
        <animated.div key={id} className="pb-sm">
          <Toast ref={itemRef(id)} id={id} onClear={onClear} {...rest} />
        </animated.div>
      ))}
    </div>
  );
}