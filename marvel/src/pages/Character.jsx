import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../Services";
import LogoMarvel from "../components/LogoMarvel";
import ButtonTheme from "../components/ButtonTheme";
import { useThemeContext } from "../hooks/useThemeContext";
import { Undo2 } from "lucide-react";
import Loading from "../components/Loading";

export default function Character() {
  const { id } = useParams();
  const [personagem, setPersonagem] = useState(null);
  const { darkMode } = useThemeContext();
  const [add, setAdd] = useState(false);

  useEffect(() => {
    getCharacterById(id).then(setPersonagem);
  }, [id]);

  if (!personagem) return <Loading />;

  return (
    <div>
      <header className="max-w-full flex justify-between items-center">
        <LogoMarvel />
        <section className="flex gap-2 items-center justify-center px-2">
          <ButtonTheme />
          <Link to={"/"}>
            <Undo2 className="w-5 cursor-pointer transition-transform hover:scale-115" />
          </Link>
        </section>
      </header>
      <main className="pt-20 pb-10 flex flex-col items-center gap-8">
        <h1
          className={`text-4xl font-bold border-b-2 pb-2 ${
            darkMode ? "border-red-600" : "border-zinc-900"
          }`}
        >
          {personagem.name}
        </h1>
        <section
          className={`border-4 rounded-md ${
            darkMode ? "border-red-600" : "border-zinc-900"
          } hover:scale-115 duration-700`}
        >
          <img
            src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
            alt="Imagem do personagem"
            className="w-100"
          />
        </section>

        {personagem.description ? (
          <p className="w-300 text-xl indent-1.5 text-center">
            {personagem.description}
          </p>
        ) : (
          <p>O personagem não possui descrição</p>
        )}

        <section
          className={`flex gap-2 flex-col justify-center items-center w-300 font-semibold ${
            darkMode ? "bg-red-600" : "bg-zinc-900"
          } pb-5 rounded-xl hover:scale-90 duration-700`}
        >
          <h1 className="py-2.5 w-300 text-center font-bold">Comics:</h1>
          {personagem.comics.items.slice(0, 8).map((item, index) => (
            <div className="border-b" key={index}>{item.name}</div>
          ))}
        </section>
        <button
          onClick={() => setAdd(e => !e)}
          className={`cursor-pointer font-semibold duration-500 border-b ${darkMode ? "hover:text-red-600" : "hover:text-zinc-900"}`}
        >
          {add ? "Exibir menos" : "Exibir mais"}
        </button>
        {add && (
          <section
            className={`flex gap-2 flex-col justify-center items-center w-300 font-semibold ${
              darkMode ? "bg-red-600" : "bg-zinc-900"
            } pb-5 rounded-xl hover:scale-90 duration-700`}
          >
            <h1 className="py-2.5 w-300 text-center font-bold">Series:</h1>
            <section className="flex px-7 gap-5">
              {personagem.series.items.slice(0, 4).map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
            </section>
          </section>
        )}
      </main>
    </div>
  );
}
