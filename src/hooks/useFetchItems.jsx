import { useEffect, useRef, useState, useCallback } from "react";
import api from "@/services/items";
import productsJson from "./productStrip.json";

export const useFetchItems = (isMobile, maxRequests) => {
  const [products, setProducts] = useState([]);
  const [isMore, setIsMore] = useState(true);
  const requestCount = useRef(0);
  const counter = useRef(1);
  const size = useRef(products.length);

  const fetchData = useCallback(() => {
    if (!isMore || requestCount.current >= maxRequests) return;

    requestCount.current += 1;
    const newItems = productsJson.slice(
      counter.current * 10,
      Math.min((counter.current + 1) * 10, size.current)
    );
    setProducts((prevProducts) => [...prevProducts, ...newItems]);
    counter.current += 1;

    if (counter.current * 10 >= size.current) {
      setIsMore(false);
    }
  }, [isMore, maxRequests]);

  useEffect(() => {
    const initializeData = () => {
      const items = productsJson.slice(0, 10);
      setProducts(items);
    };

    initializeData();
  }, [isMobile]);

  return { products, fetchData, isMore };
};
export const useInfiniteScroll = (isMobile, fetchData) => {
  useEffect(() => {
    const handleScroll = () => {
      const bottomReached = isMobile
        ? document.querySelector("main")?.scrollTop +
            document.querySelector("main")?.clientHeight >=
          document.querySelector("main")?.scrollHeight
        : window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (bottomReached) {
        fetchData();
      }
    };

    const target = isMobile ? document.querySelector("main") : window;
    target?.addEventListener("scroll", handleScroll);

    return () => target?.removeEventListener("scroll", handleScroll);
  }, [isMobile, fetchData]);
};
