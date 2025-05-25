import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../Services";
import Header from "../components/Header";

export default function Character() {

    const {id} = useParams()
    const [personagem, setPersonagem] = useState(null)

    useEffect(() => {
         getCharacterById(id).then(setPersonagem);
    }, [id])

    if (!personagem) return <h1 className="text-white p-10">Carregando...</h1>;

  return (
    <div>
      <h1>{personagem.name}</h1>
      <img src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} alt="" />
      
    </div>
  );
}
