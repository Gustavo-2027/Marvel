import { Link } from "react-router-dom";
import Logo from "../assets/Marvel_Logo.svg.png";
import { BrushCleaning, Moon, RefreshCcw, Search } from "lucide-react";

export default function Header({
  refresh,
  color,
  search,
  setSearch,
  searchCharacter,
}) {
  return (
    <header className="w-full h-10 flex justify-between items-center">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="Logo da marvel"
          className="w-20 duration-500 transition-transform hover:scale-110 cursor-pointer"
        />
      </Link>

      <form
        className="flex justify-center items-center"
        onSubmit={searchCharacter}
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
        <button onClick={color}>
          <Moon className="w-5 cursor-pointer transition-transform hover:scale-115" />
        </button>
        <button onClick={refresh}>
          <RefreshCcw className="w-5 cursor-pointer transition-transform hover:scale-115" />
        </button>
      </section>
    </header>
  );
}
