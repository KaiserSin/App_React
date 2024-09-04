import React from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "@core/Header/components/Header/Header";
import Footer from "@core/Footer/Footer";
import { MobileFooter } from "@core/MobileFooter/MobileFooter";
import Main from "@core/Main/Main";

export const MainLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <>
      <div className="wrapper">
        <Header />
        <Main>
          <Outlet />
        </Main>

        {isMobile ? <MobileFooter /> : <Footer />}
      </div>
    </>
  );
};

export default MainLayout;
