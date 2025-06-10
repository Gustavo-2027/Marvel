import Personagens from "../components/Personagens";
import Header from "../components/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Loading from "../components/Loading";
import { useCharacterContext } from "../hooks/useCharacterContext";

export default function Home() {
  const { characters, orderCharacter, search, PreviousPage, NextPage, page } = useCharacterContext();

  return (
    <div>
      <Header />

      {characters.length > 0 ? (
        <div>
          <Personagens characters={orderCharacter(characters)} />
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
      ) : (
        <Loading />
      )}
    </div>
  );
}
