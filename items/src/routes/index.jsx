import HomePage from "../pages/Home/HomePage";
import PlugPage from "../components/Plug/PlugPage"; 

export const privateRoutes = [
  // {path: "/", element:  }
];

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/inactive-link", element: <PlugPage /> },
];



