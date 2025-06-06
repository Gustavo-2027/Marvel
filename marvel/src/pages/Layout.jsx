import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Layout() {
    const {darkMode} = useContext(ThemeContext)

  return (
    <div
        className={`w-full min-h-dvh h-full px-6 py-5 text-white transition-all duration-700 ${
          darkMode ? "bg-zinc-900" : "bg-gradient-to-r from-red-600 to-red-900"
        }`}
      >
      <Outlet />

     
    </div>
  );
}
