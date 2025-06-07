import miniSpider from "../assets/mini.png";

export default function Loading() {
  return (
    <div className="max-w-full h-full">
      <section className="flex flex-col justify-center items-center transition-transform duration-700 h-220 animate-pulse ">
        <img
          src={miniSpider}
          alt="Imagem do Homem aranha"
          className="w-100 rounded-[50%] shadow-2xl shadow-orange-900"
        />
        <h1 className="text-5xl text-orange-900 font-bold py-2">
          Carrregando...
        </h1>
      </section>
    </div>
  );
}
