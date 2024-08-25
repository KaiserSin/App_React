import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../shared/components/Main/Main";
import { useSelector } from "react-redux";
import { Catalog } from "../components/Catalog/Catalog";

const MainLayout = () => {
  const { isCatalogVisible } = useSelector((state) => {
    return state.catalog;
  });
  return (
    <>
      <Header />
      <Main>{isCatalogVisible ? <Catalog /> : <Outlet />}</Main>
      <Footer />
    </>
  );
};

export default MainLayout;
