import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query: any, page: any, searchText: any = "") {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<any>([]);
  const [text, setText] = useState("");
  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      if (text !== searchText) {
        setText(searchText);
        setList([]);
      }
      const res = await axios.get(query + page + text);
      //   await new Promise((r) => setTimeout(r, 20000));

      setList((prev: any) => [...prev, ...res.data.photos.photo]);
      setLoading(false);
    } catch (err: any) {
      setError(err);
    }
  }, [query, page, searchText]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
