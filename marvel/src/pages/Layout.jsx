import { Outlet } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";

export default function Layout() {
  const { darkMode } = useThemeContext()

  return (
    <div
      className={`w-full min-h-dvh px-6 py-5 text-white transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-gradient-to-r from-red-600 to-red-900"
      }`}
    >
      <Outlet />
      <footer className="w-full my-4 py-2 border-t border-zinc-800 text-center text-sm">
        Desenvolvido por <a href="#" className="font-semibold">Gustavo Silva</a>
      </footer>
    </div>
  );
}
