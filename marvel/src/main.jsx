import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Character from "./pages/Character";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CharacterProvider } from "./contexts/CharacterContext";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CharacterProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CharacterProvider>
  </StrictMode>
);
