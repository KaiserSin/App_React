import HomePage from "../pages/Home/HomePage";
import Plug from "../components/Plug/Plug"; 

export const privateRoutes = [
  // {path: "/", element:  }
];

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/inactive-link-1", element: <Plug /> }, 
  { path: "/inactive-link-3", element: <Plug /> }, 
];



