import { Profile } from "../components/Profile/Profile";
import HomePage from "../pages/Home/HomePage";
import PlugPage from "../components/Plug/PlugPage"; 

export const privateRoutes = [
  // {path: "/", element:  }
];

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/profile", element: <Profile /> },
  { path: "/inactive-link", element: <PlugPage /> }
];