import { useEffect, useState, useRef } from "react";
import api from "@/services/items";
import Header from "@/components/Header/Header";
import { Content } from "../../components/ProductSection/ContentStrip/Content";
import Footer from "@/components/Footer/Footer";


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState(0);
  const [counter, setCounter] = useState(1);
  const [isMore, setIsMore] = useState(true);
  const [progress, setProgress] = useState(40);

  const sizeRef = useRef(size);
  const counterRef = useRef(counter);

  useEffect(() => {
    sizeRef.current = size;
  }, [size]);

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("Вы достигли конца страницы!");
      if (isMore) {
        
        if ((counterRef.current + 1) * 10 >= sizeRef.current) {
          setIsMore(false);
        }
        api.getItems(counterRef.current * 10, Math.min((counterRef.current + 1) * 10, sizeRef.current)).then((val) => {
          setProducts((prevProducts) => [...prevProducts, ...val.map((v) => ({ ...v, isFiltered: true }))]);
        });
        
        setCounter((prevCounter) => prevCounter + 1);
      }
    }
  } ;


  useEffect(() => {
    const fetchData = async () => {
      const sizeData = await api.getSize();
      setSize(sizeData);
      const items = await api.getItems(0, 30);
      setProducts(items.map((val) => ({ ...val, isFiltered: true })));
    };
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <>
      <Header />
      <Content products={products} progress={progress} />
      <Footer />
    </>
  );
};

export default HomePage;
