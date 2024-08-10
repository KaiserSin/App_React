import { useEffect, useState, useRef } from 'react';
import api from '../services/items';
import Header from './components/header/Header';
import { Content } from './components/content/Content';
import Footer from './components/footer/Footer';


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState(0);
  const [counter, setCounter] = useState(1);
  const [isMore, setIsMore] = useState(true);
  const [progress, setProgress] = useState(40);


  const sizeRef = useRef(size);
  const counterRef = useRef(counter);
  const isMoreRef = useRef(isMore);

  useEffect(() => {
    sizeRef.current = size;
  }, [size]);

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  useEffect(() => {
    isMoreRef.current = isMore;
  }, [isMore]);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('Вы достигли конца страницы!');
      if (isMoreRef.current) {
        if ((counterRef.current + 1) * 10 >= sizeRef.current) {
          setIsMore(false);
        }
        api.getItems(counterRef.current * 10, Math.min((counterRef.current + 1) * 10, sizeRef.current))
          .then(val => {
            setProducts(prevProducts => [...prevProducts, ...val.map(v => ({ ...v, isFiltered: true }))]);
          });
        setCounter(prevCounter => prevCounter + 1);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const sizeData = await api.getSize();
      console.log('Fetched size:', sizeData.size);
      setSize(sizeData.size);
      const items = await api.getItems(0, 30);
      setProducts(items.map(val => ({ ...val, isFiltered: true })));
    };
    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header
          languageCode="RU"
          address="🏦 Москва: Пушкина 10"
          addressHref="https://www.google.com/search?q=Москва: Пушкина 10"
          companyBuy="💼 Покупать как компания"
          companyBuyHref="#"
          sell="❤️ Продавайте у нас"
          sellHref="#"
          pvsMap="🗺️ Карта ПВЗ"
          pvsMapHref="#"
          pvs="📦 Открыть ПВЗ"
          pvsHref="#"
          catalogName="Каталог"
          catalogHref="#"
        />
      <Content products={products} progress={progress}/>
      <Footer/>
    </>
  );
};

export default HomePage;