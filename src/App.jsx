import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { publicRoutes } from "./routes";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  const router = createBrowserRouter(publicRoutes);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
