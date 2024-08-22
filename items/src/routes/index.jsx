import { Profile } from "../components/Profile/Profile";
import HomePage from "../pages/Home/HomePage";

export const privateRoutes = [
  // {path: "/", element:  }
];

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/profile", element: <Profile /> },
];
