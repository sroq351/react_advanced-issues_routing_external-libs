import { createBrowserRouter } from "react-router-dom";
import { Root } from "../react context/Root";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    errorElement: <p> error </p>,
    element: <Root />,
    children: [
      { index: true, element: <h2> home page</h2> },
      { path: "/contact", element: <p> contact with us...</p> },
      { path: "/offer", element: <p> our offer </p> },
    ],
  },
]);
