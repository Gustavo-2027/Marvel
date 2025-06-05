import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Error from "./pages/ErrorPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CharacterProvider } from "./contexts/CharacterContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character/:id",
    element: <Character />,
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
