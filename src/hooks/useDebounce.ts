import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debounceData, setDebounceData] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceData(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceData;
}
