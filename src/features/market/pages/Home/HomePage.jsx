import { useEffect, useState } from "react";
import api from "@/services/items";
import { Content } from "@features/market/components/ProductSection/ContentStrip/Content";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isMore, setIsMore] = useState(true);
  const [progress, setProgress] = useState(40);
  const [show, setShow] = useState(false);
  let counter = 1;
  let size = 0;

  useEffect(() => {
    const fetchData = async () => {
      const sizeData = await api.getSize();
      size = sizeData + 40;
      const items = await api.getItems(41, 46);
      console.log(items);
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
      console.log("I'm here");
      if (isMore) {
        if ((counter + 1) * 10 >= size) {
          setIsMore(false);
        }
        console.log(counter * 10, Math.min((counter + 1) * 10, size));
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
