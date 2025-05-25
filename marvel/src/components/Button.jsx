import { MoveDown, MoveUp, Plus } from "lucide-react";

export default function Buttons({ limit, setLimit }) {
  return (
    <section className="w-full flex justify-end items-center">
      <button onClick={() => setLimit(limit + 10)}>
        <MoveDown className="w-5 cursor-pointer transition-transform hover:scale-120 hover:opacity-50"/>
      </button>
      <button onClick={() => setLimit(limit - 10)}>
        <MoveUp className="w-5 cursor-pointer transition-transform hover:scale-120 hover:opacity-50"/>
      </button>
    </section>
  );
}
