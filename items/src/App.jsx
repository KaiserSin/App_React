import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./routes";

const App = () => {
  const router = createBrowserRouter(publicRoutes);

  return <RouterProvider router={router} />;
};

export default App;