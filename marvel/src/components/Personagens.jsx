import { Link } from "react-router-dom";

export default function Personagens({ characters, darkMode}) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 w-full">
      {characters.map((item) => (
        <Link to={`/character/${item.id}`} key={item.id}>
        <div
          
          className={` ${darkMode ? "bg-gradient-to-r from-red-600 to-red-800 duration-700" : "bg-zinc-900 duration-700"} p-2 duration-500 transition-transform hover:scale-110 cursor-pointer rounded`}
        >
          <li
            className="rounded shadow-2xl h-70 w-full bg-cover bg-center flex items-end overflow-clip text-white"
            style={{
              backgroundImage: `url(${item.thumbnail.path}.${item.thumbnail.extension})`,
            }}
          ></li>
          <h1 className="bg-opacity-50 p-2 font-semibold">{item.name}</h1>
        </div>
        </Link>
      ))}
    </ul>
  );
}
