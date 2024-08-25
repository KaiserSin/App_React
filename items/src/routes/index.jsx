import { Profile } from "../components/Profile/Profile";
import HomePage from "../pages/Home/HomePage";
import Plug from "../components/Plug/Plug";
import MainLayout from "../layouts/MainLayout";
import { Navigate } from "react-router-dom";

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
      { path: "inactive-link", element: <Plug /> },
      { path: "/*", element: <Navigate to={"inactive-link"} /> },
    ],
  },
];
