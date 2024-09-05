import { useEffect, useState } from "react";
import api from "@/services/items";
import { Content } from "@features/market/components/ProductSection/ContentStrip/Content";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isMore, setIsMore] = useState(true);
  const [progress, setProgress] = useState(40);
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });

  let counter = 1;
  let size = 0;

  useEffect(() => {
    const fetchData = async () => {
      const sizeData = await api.getSize();
      size = sizeData;
      const items = await api.getItems(1, isMobile ? sizeData : 10);

      setProducts(items.map((val) => ({ ...val, isFiltered: true })));
    };
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (isMore) {
        if ((counter + 1) * 10 >= size) {
          setIsMore(false);
        }
        api
          .getItems(counter * 10, Math.min((counter + 1) * 10, size))
          .then((val) => {
            setProducts((prevProducts) => [
              ...prevProducts,
              ...val.map((v) => ({ ...v, isFiltered: true })),
            ]);
          });
        counter += 1;
      }
    }
  };

  return (
    <>
      <Content products={products} progress={progress} show={show} />
    </>
  );
};

export default HomePage;
