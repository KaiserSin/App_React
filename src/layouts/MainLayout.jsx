import { Outlet } from "react-router-dom";
import Header from "@core/Header/components/Header/Header";
import Footer from "@core/Footer/Footer";
import Main from "@core/Main/Main";

const MainLayout = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
