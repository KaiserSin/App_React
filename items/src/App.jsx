import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { publicRoutes } from "./routes";
import { DisplayProfileProvider } from "./context/ProfileContext";

const App = () => {
  const router = createBrowserRouter(publicRoutes);
  return (
    <DisplayProfileProvider>
      <RouterProvider router={router} />;
    </DisplayProfileProvider>
  );
};

export default App;
