import Tobey from "../assets/Tobey.png";
import { useThemeContext } from "../hooks/useThemeContext";

export default function ErrorPage() {
  const { darkMode } = useThemeContext();

  return (
    <div
      className={`w-full min-h-dvh h-full px-6  text-white transition-all duration-700 flex justify-between flex-col items-center ${
        darkMode ? "bg-zinc-900" : "bg-gradient-to-r from-red-600 to-red-900"
      }`}
    >
      <h1 className="text-4xl font-black text-red-500 pt-40">ERRO 404</h1>

      <section className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold text-center">
          E quem disse que isso é problema meu?
        </h1>
        <img src={Tobey} alt="Tobey sarcastico" className="w-160" />
      </section>
    </div>
  );
}
