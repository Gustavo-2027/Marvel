import { BrushCleaning, Moon, RefreshCcw, Search } from "lucide-react";
import { useContext } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import LogoMarvel from "./LogoMarvel";
import ButtonTheme from "./ButtonTheme";
import { useThemeContext } from "../hooks/useThemeContext";

export default function Header() {
  const { darkMode } = useThemeContext();

  const {
    handleRefresh,
    handleSearchSubmit,
    search,
    setSearch,
    order,
    setOrder,
    limit,
    setLimit,
  } = useContext(CharacterContext);

  return (
    <header className="max-w-full h-10 flex justify-between items-center">
      <LogoMarvel />
      <form
        className="flex justify-center items-center"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          placeholder="Pesquisar personagens"
          className="w-200 border-b border-zinc-400 outline-0 mr-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <Search className="w-5 cursor-pointer transition-transform hover:scale-115 hover:opacity-50" />
        </button>
        <button className="px-2" onClick={() => setSearch("")}>
          <BrushCleaning className="w-5 cursor-pointer transition-transform hover:scale-115 hover:opacity-50" />
        </button>
      </form>
      <section className="flex gap-5">
        <section className="flex justify-center items-center">
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className={`bg-zinc-900 text-white flex rounded-md justify-center items-center ${
              darkMode ? "bg-red-800" : "bg-zinc-900"
            }`}
          >
            <optgroup label="Ordem:">
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </optgroup>
          </select>

          <select
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className={`bg-zinc-900 text-white flex rounded-md ml-2 ${
              darkMode ? "bg-red-700" : "bg-zinc-900"
            }`}
          >
            <optgroup label="N personagens:">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </optgroup>
          </select>
        </section>
        <ButtonTheme />
        <button onClick={() => handleRefresh()}>
          <RefreshCcw className="w-5 cursor-pointer transition-transform hover:scale-115" />
        </button>
      </section>
    </header>
  );
}
