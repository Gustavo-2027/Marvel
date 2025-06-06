import miniSpider from "../assets/mini.png";

export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center flex-col my-10">
      <section className="flex flex-col justify-center items-center hover:scale-110 transition-transform duration-700">
        <img
          src={miniSpider}
          alt="Imagem do Homem aranha"
          className="w-150 rounded-[50%] shadow-2xl shadow-orange-600"
        />
        <h1 className="text-5xl text-orange-600 font-bold py-2 text-shadow-2xs text-shadow-white">
          Carrregando...
        </h1>
      </section>
    </div>
  );
}
