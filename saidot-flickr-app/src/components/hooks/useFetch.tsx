import { useState, useEffect, useCallback } from "react";
 import axios from "axios";

function useFetch(
  query: string,
  page: number,
  searchText: string,
  setPage: React.Dispatch<React.SetStateAction<number>>
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([] as any[]);
  const [text, setText] = useState("");
  const sendQuery = useCallback(async () => {
    setLoading(true);
    setError(false);
    if (text !== searchText) {
      setText(searchText);
      setPage(1);
      setList([]);
    }
    const res = await axios.get(query + page + text);

    setList((prev: any[]) => [...prev, ...res.data.photos.photo]);
    setLoading(false);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page, searchText]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
