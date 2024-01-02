import { useEffect, useCallback, useRef, Dispatch, SetStateAction } from "react";

interface UseFetchProps {
  setPage: Dispatch<SetStateAction<number>>;
}

function useFetch({ setPage }: UseFetchProps) {
  const loader = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries.length > 0) {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      }
    },
    [setPage]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  return { loader };
}

export default useFetch;
