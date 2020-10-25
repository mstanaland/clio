import { useEffect, useState, useRef, useCallback } from "react";

export const useTimeout = ({ onTimeout, duration }) => {
  const [activated, setActivated] = useState(true);
  const timeoutRef = useRef();

  const stopTimeout = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setActivated(false);
  }, []);

  useEffect(() => {
    if (activated) {
      timeoutRef.current = window.setTimeout(() => {
        onTimeout();
      }, duration);

      return () => {
        stopTimeout();
      };
    }
  }, [onTimeout, activated, duration, stopTimeout]);

  const startTimeout = useCallback(() => {
    setActivated(true);
  }, []);

  return {
    stopTimeout,
    startTimeout,
  };
};
