import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@core/Header/components/Header/Header";
import Footer from "@core/Footer/Footer";
import Main from "@core/Main/Main";
import { useSelector } from "react-redux";
import { Catalog } from "@features/market/components/Catalog/Catalog";

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
