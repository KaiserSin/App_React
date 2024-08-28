import { Profile } from "@features/profile/pages/Profile/Profile";
import HomePage from "@features/market/pages/Home/HomePage";
import Plug from "@core/NotFound/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import { Navigate } from "react-router-dom";
import { CatalogPage } from "../features/catalog/pages/Catalog-page";

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
      { path: "catalog", element: <CatalogPage /> },
      { path: "inactive-link", element: <Plug /> },
    ],
  },
  { path: "/*", element: <Navigate to={"inactive-link"} /> },
];
