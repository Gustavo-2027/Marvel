import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCharacterById } from "../Services";
import Logo from "../assets/Marvel_Logo.svg.png";

export default function Character() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [personagem, setPersonagem] = useState(null);
  console.log(personagem);

  useEffect(() => {
    getCharacterById(id).then(setPersonagem);
  }, [id]);

  if (!personagem) return <h1 className="text-white p-10">Carregando...</h1>;

  return (
    <div className="bg-zinc-900 w-full min-h-dvh h-full px-25 py-5 text-white">
      <header className="w-full flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Logo da marvel"
            className="w-25 duration-500 transition-transform hover:scale-120 cursor-pointer"
          />
        </Link>
        <button onClick={(() => navigate(-1))} className="p-2 bg-gradient-to-r from-red-600 to-red-900 rounded-xl cursor-pointer font-semibold transition-transform hover:scale-110">
          Voltar
        </button>
      </header>

      <main className="bg-gradient-to-r from-red-600 to-red-900 rounded-md py-15 px-10 my-10 flex gap-5">
        <img
          src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
          alt={personagem.description}
          className="w-100 rounded-md transition-transform hover:scale-110 shadow-2xl shadow-black duration-500"
        />
        <section className="flex flex-col gap-5 px-5">
          <h1 className="text-3xl font-semibold text-center">
            {personagem.name}
          </h1>
          <h2 className="text-xl">{personagem.description}</h2>
          <div className="flex gap-2 flex-wrap">
            {personagem.comics.items.slice(0, 7).map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
