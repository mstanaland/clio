import { useState, useEffect } from "react";
import { debounce } from "lodash";

export function useOffsetSize(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let isMounted = true;
    const getDimensions = debounce(() => {
      if (ref.current) {
        if (isMounted) {
          setDimensions({
            width: ref.current.offsetWidth,
            height: ref.current.offsetHeight,
          });
        }
      }
    }, 50);

    getDimensions();

    window.addEventListener("resize", getDimensions);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", getDimensions);
      getDimensions.cancel();
    };
  }, [ref]);

  return dimensions;
}
