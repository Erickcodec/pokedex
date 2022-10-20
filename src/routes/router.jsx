import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "@/routes/root";
import { Home } from "@/pages/Home";
import { ErrorPage } from "@/pages/Error";
import { Pokedex } from "@/pages/Pokedex";
import { PokedexById } from "@/pages/PokedexById";
import { Dashboard } from "@/layout/Dashboard";
import { PrivateRoute } from "@/routes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "pokedex",
            element: <Pokedex />,
          },
          {
            path: "pokedex/:id",
            element: <PokedexById />,
          },
        ],
      },
    ],
  },
]);
