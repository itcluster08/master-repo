import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Auth } from "./auth";
import { Home } from "./home";
import { Products } from "./products";
import { Shopper } from "./shopper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/shopper",
        element: <Shopper />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);
