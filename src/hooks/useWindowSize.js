import { useState, useEffect } from "react";
import { debounce } from "lodash";

export function useWindowSize(timeout = 50) {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    let isMounted = true;

    if (!isClient) {
      return false;
    }

    const handleResize = debounce(() => {
      if (isMounted) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }, timeout);

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, [timeout, isClient]);

  return windowSize;
}
