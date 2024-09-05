import { Content } from "@features/market/components/ProductSection/ContentStrip/Content";
import { useMediaQuery } from "react-responsive";
import { useInfiniteScroll, useFetchItems } from "@hooks/useFetchItems";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width:700px)" });
  const maxRequests = 6;
  const { products, fetchData, isMore } = useFetchItems(isMobile, maxRequests);

  useInfiniteScroll(isMobile, fetchData);

  return <Content products={products} progress={40} show={false} />;
};

export default HomePage;
