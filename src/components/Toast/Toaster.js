import React, { useCallback } from "react";

import { Toast } from "./Toast";
import { useAnimationManager } from "./useAnimationManager";
import "./Toaster.scss";

export default function Toaster({ toasts, removeToast }) {
  const { itemRef, remove } = useAnimationManager();

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
        <div key={id} className="pb-sm">
          <Toast ref={itemRef(id)} id={id} onClear={onClear} {...rest} />
        </div>
      ))}
    </div>
  );
}
