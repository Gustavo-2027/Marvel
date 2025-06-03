import { useEffect, useState } from "react";
import { getCharacters } from "../Services";
import Personagens from "../components/Personagens";
import Header from "../components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [limit] = useState(20);
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const fetchCharacters = () => {
    getCharacters(offset, limit, search.trim() || undefined).then((res) => {
      setCharacters(res);
    });
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, limit, search]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      setPage(1); 
    }
  };

  const handleRefresh = () => {
    setSearch("");
    setPage(1);
  };

  const PreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    } else {
      alert("Erro");
    }
  };

  const NextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div
      className={`w-full min-h-dvh h-full px-6 py-5 text-white transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-gradient-to-r from-red-600 to-red-900"
      }`}
    >
      <Header
        refresh={handleRefresh}
        color={toggleDarkMode}
        search={search}
        setSearch={setSearch}
        searchCharacter={handleSearchSubmit}
        setPages={setPage}
      />

      {characters.length > 0 ? (
        <Personagens characters={characters} darkMode={darkMode} />
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
