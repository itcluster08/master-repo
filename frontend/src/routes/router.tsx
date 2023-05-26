import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Auth } from "./auth";
import { Home } from "./home";

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
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);
