import { Profile } from "@features/profile/pages/Profile/Profile";
import HomePage from "@features/market/pages/Home/HomePage";
import Plug from "@core/NotFound/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import { Navigate } from "react-router-dom";
import ProductPage from "../features/market/pages/ProductPage/ProductPage";
import CartPage from "@features/cart/pages/CartPage";
import { CatalogPage } from "../features/catalog/pages/Catalog-page";

import MediaQuery from "react-responsive";
import MobileCatalogPage from "@/features/catalog/pages/MobileCatalogPage";

export const privateRoutes = [
  // {path: "/", element:  }
];

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "profile", element: <Profile /> },
      { path: "cart", element: <CartPage /> },
      {
        path: "catalog",
        element: (
          <MediaQuery maxWidth={700}>
            {(matches) => {
              return matches ? <MobileCatalogPage /> : <CatalogPage />;
            }}
          </MediaQuery>
        ),
      },
      { path: "inactive-link", element: <Plug /> },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      { path: "/*", element: <Navigate to={"inactive-link"} replace /> },
    ],
  },
];
