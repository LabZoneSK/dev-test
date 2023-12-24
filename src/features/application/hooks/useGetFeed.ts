import { useCallback, useEffect, useState } from "react";
import { api } from "../../../shared/services/api";
import { FeedItem } from "../models";
import { DEFAULT_PAGE } from "../../../shared/constants/pagination";

export const useGetFeed = () => {
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [error, setError] = useState<Error | null>(null);
  const [items, setItems] = useState<FeedItem[]>([]);
  const [count, setCount] = useState(0);

  const refetch = useCallback(() => setCount((count) => count + 1), []);

  const fetchData = useCallback(async () => {
    setLoading(true);

    api.feed
      .get(page)
      .then((result) => {
        setItems((prevItems) => [...prevItems, ...result.items]);
        setPage((prevPage) => prevPage + 1);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [count]);

  return { isLoading, items, error, refetch };
};
