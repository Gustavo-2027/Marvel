import { useEffect, useState } from "react";
import { getCharacters } from "../Services";
import Personagens from "../components/Personagens";
import Header from "../components/Header";
import Buttons from "../components/Button";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [numberRandom, setNumberRandom] = useState(
    Math.floor(Math.random() * 1500)
  );
  const [limit, setLimit] = useState(20);
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCharacters(numberRandom, limit).then((res) => {
      setCharacters(res);
    });
  }, [numberRandom, limit]);

  function refresh() {
    setNumberRandom(Math.floor(Math.random() * 1800));
  }

  function color() {
    setDarkMode(!darkMode);
  }

  function searchCharacter(e) {
    e.preventDefault();
    if (search.trim() === "") return;
    console.log(search);
    getCharacters(0, limit, search).then((res) => {
      setCharacters(res);
    });
  }

  return (
    <div
      className={`w-full min-h-dvh h-full px-25 py-5 text-white ${
        darkMode ? "bg-zinc-900" : "bg-gradient-to-r from-red-600 to-red-900"
      } transition-discrete duration-700`}
    >
      <Header
        refresh={refresh}
        color={color}
        search={search}
        setSearch={setSearch}
        searchCharacter={searchCharacter}
      />

      {characters.length > 0 ? (
        <Personagens characters={characters} darkMode={darkMode} />
      ) : (
        <h1>Carregando...</h1>
      )}
      <Buttons limit={limit} setLimit={setLimit} />
    </div>
  );
}
