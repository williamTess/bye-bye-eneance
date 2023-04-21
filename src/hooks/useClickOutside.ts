import { useCallback, useEffect } from "react";

export const useClickOutside = (ref: any, callback: () => any) => {
  const handleClick = useCallback(
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);
};
