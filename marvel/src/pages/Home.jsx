import { useContext } from "react";
import Personagens from "../components/Personagens";
import Header from "../components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CharacterContext } from "../contexts/CharacterContext";
import Loading from "../components/Loading";

export default function Home() {
  const { characters, orderCharacter, search, PreviousPage, NextPage, page } =
    useContext(CharacterContext);

  return (
    <div>
      <Header />

      {characters.length > 0 ? (
        <Personagens characters={orderCharacter(characters)} />
      ) : (
        <Loading/>
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
