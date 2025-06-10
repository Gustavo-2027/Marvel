import { createContext, useState, useEffect } from "react";
import { getCharacters } from "../Services";

export const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [order, setOrder] = useState("A-Z");

  const fetchCharacters = () => {
    getCharacters(offset, limit, search.trim() || undefined, order).then((res) => {
      setCharacters(res);
    });
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, limit, search, order]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      setPage(1);
    }
  };

  const handleRefresh = () => {
    setSearch("");
    setPage(1);
    setLimit(20);
    setOrder("A-Z");
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

  return <CharacterContext.Provider value={{characters, handleRefresh, handleSearchSubmit, PreviousPage, NextPage, page, search, setSearch, order, setOrder, limit, setLimit}}>{children}</CharacterContext.Provider>;
}
