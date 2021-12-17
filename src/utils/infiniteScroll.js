import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useInfiniteScroll = (url, pageSize = 20) => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (fetching && !loading) {
      setLoading(true);
      axios
        .get(`${url}/${currentPage}/${pageSize}`)
        .then((response) => {
          setItems((prevState) => [...prevState, ...response.data.list]);
          setCurrentPage((prevState) => prevState + 1);
        })
        .finally(() => {
          setFetching(false);
          setLoading(false);
        });
    }
  }, [fetching]);

  const scrollHandler = useCallback((e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return { items, loading };
};
