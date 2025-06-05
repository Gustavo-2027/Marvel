import { useContext, useEffect } from "react";
import Personagens from "../components/Personagens";
import Header from "../components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CharacterContext } from "../contexts/CharacterContext";

export default function Home() {
  const { characters, orderCharacter, search, PreviousPage, NextPage, page } =
    useContext(CharacterContext);

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme != null) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`w-full min-h-dvh h-full px-6 py-5 text-white transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-gradient-to-r from-red-600 to-red-900"
      }`}
    >
      <Header />

      {characters.length > 0 ? (
        <Personagens characters={orderCharacter(characters)} />
      ) : (
        <h1 className="text-center text-xl mt-10">Carregando...</h1>
      )}

      {search.trim() === "" && (
        <section className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={PreviousPage}
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <p className="text-lg">{page}</p>
          <button
            onClick={NextPage}
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronRight />
          </button>
        </section>
      )}
    </div>
  );
}
