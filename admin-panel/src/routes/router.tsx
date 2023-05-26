import { createBrowserRouter } from "react-router-dom";
import { SingIn } from "./singin";
import { SingUp } from "./singup";
import { Root } from "./root";
import { Orders } from "./orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Orders />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/singin",
    element: <SingIn />,
  },
  {
    path: "/singup",
    element: <SingUp />,
  },
]);
