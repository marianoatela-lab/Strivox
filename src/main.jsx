import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import PaginaError from "./pages/PaginaError";

import "./index.css";
import "./styles/general.css";
import "./styles/Cards.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const mapaRutas = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "*",
        element: <PaginaError />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={mapaRutas} />
  </StrictMode>,
);
