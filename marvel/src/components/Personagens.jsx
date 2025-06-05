import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Personagens({ characters }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 w-full">
      {characters.map((item) => (
        <li key={item.id} className="list-none">
          <Link to={`/character/${item.id}`}>
            <div
              className={`${
                darkMode
                  ? "bg-gradient-to-r from-red-600 to-red-800"
                  : "bg-zinc-900"
              } p-2 duration-500 transition-transform hover:scale-110 cursor-pointer rounded`}
            >
              <div
                className="rounded shadow-2xl h-70 w-full bg-cover bg-center flex items-end overflow-clip text-white"
                style={{
                  backgroundImage: `url(${item.thumbnail.path}.${item.thumbnail.extension})`,
                }}
              ></div>
              <h1 className="bg-opacity-50 p-2 font-semibold">{item.name}</h1>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
