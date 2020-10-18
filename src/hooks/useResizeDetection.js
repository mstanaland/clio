import { useEffect, useState } from "react";
import { debounce } from "lodash";

export function useResizeDetection({ timeout = 100 } = {}) {
  const [isResizing, setIsResizing] = useState(false);
  const isClient = typeof window === "object";

  useEffect(() => {
    let isMounted = true;

    if (!isClient) {
      return false;
    }

    const setToFalse = debounce(
      () => {
        if (isMounted) {
          setIsResizing(false);
        }
      },
      timeout,
      { leading: false, trailing: true }
    );

    const handleResize = () => {
      if (!isResizing && isMounted) {
        setIsResizing(true);
      }

      if (isMounted) {
        setToFalse();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      setToFalse.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient, isResizing, timeout]);

  return isResizing;
}
