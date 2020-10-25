import React, {
  useContext,
  createContext,
  useReducer,
  useCallback,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

import Toaster from "./Toaster";

let toastCounter = 0;

const ToastControllerContext = createContext(null);

const QUEUE_TOAST = 0;
const REMOVE_TOAST = 1;

function reducer(state, action) {
  switch (action.type) {
    case QUEUE_TOAST: {
      const { toast } = action;

      const hasExistingToast = state.toasts.some(
        (t) => t.dedupeKey === toast.dedupeKey
      );

      if (hasExistingToast) {
        return {
          toasts: state.toasts.map((t) => {
            if (t.dedupeKey === toast.dedupeKey) {
              return {
                ...t,
                shouldRemove: true,
              };
            }

            return t;
          }),
          queuedToasts: {
            ...state.queuedToasts,
            [toast.dedupeKey]: toast,
          },
        };
      }

      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      };
    }

    case REMOVE_TOAST: {
      const toasts = state.toasts.filter(
        ({ dedupeKey }) => dedupeKey !== action.dedupeKey
      );

      const queuedToast = state.queuedToasts[action.dedupeKey];

      if (queuedToast) {
        return {
          queuedToasts: {
            ...state.queuedToasts,
            [action.dedupeKey]: undefined,
          },
          toasts: [...toasts, queuedToast],
        };
      }

      return {
        ...state,
        toasts,
      };
    }

    default: {
      throw new Error("Invalid reducer case");
    }
  }
}

const ToastPortal = ({ children }) => {
  const [toastElement, setElement] = useState(null);

  useEffect(() => {
    const toastContainerId = "modzy-toast-container";
    let element = document.getElementById(toastContainerId);

    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", toastContainerId);
      element.setAttribute("class", "");

      document.body.appendChild(element);
    }

    setElement(element);
  }, []);

  if (!toastElement) {
    return null;
  }

  return createPortal(children, toastElement);
};

const InternalToastProvider = ({ children }) => {
  const [{ toasts }, dispatch] = useReducer(reducer, {
    toasts: [],
    queuedToasts: {},
  });

  const addToast = useCallback(
    (toast) => dispatch({ type: QUEUE_TOAST, toast }),
    []
  );

  const removeToast = useCallback(
    (dedupeKey) => dispatch({ type: REMOVE_TOAST, dedupeKey }),
    []
  );

  return (
    <ToastControllerContext.Provider value={addToast}>
      {children}
      <ToastPortal>
        <Toaster toasts={toasts} removeToast={removeToast} />
      </ToastPortal>
    </ToastControllerContext.Provider>
  );
};

export const ToastProvider = ({ children }) => {
  const currentContext = useContext(ToastControllerContext);

  if (currentContext !== null) {
    // Bail early because "ToastProvider" is already set up
    return <>{children}</>;
  }

  return <InternalToastProvider>{children}</InternalToastProvider>;
};

export const useToast = () => {
  const addToast = useContext(ToastControllerContext);

  if (addToast === null) {
    throw new Error('No "ToastProvider" configured');
  }

  return useCallback(
    (toast) => {
      const id = `${toastCounter++}`;
      const dedupeKey = toast.key ?? id;

      addToast({ ...toast, id, dedupeKey, shouldRemove: false });
    },
    [addToast]
  );
};
