
import { useState } from "react";

interface Props {
  onSubmit: (tema: string, nivel: string) => void;
}

export default function InputForm({ onSubmit }: Props) {
  const [tema, setTema] = useState("");
  const [nivel, setNivel] = useState("Secundaria");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(tema, nivel);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center mb-6">
      <input
        type="text"
        placeholder="Escribe un tema..."
        value={tema}
        onChange={(e) => setTema(e.target.value)}
        className="flex-1 p-3 rounded-xl border shadow-inner dark:bg-gray-700 dark:text-white"
        required
      />
      <select
        value={nivel}
        onChange={(e) => setNivel(e.target.value)}
        className="p-3 rounded-xl border dark:bg-gray-700 dark:text-white"
      >
        <option value="Secundaria">Secundaria</option>
        <option value="Preparatoria">Preparatoria</option>
        <option value="Universidad">Universidad</option>
      </select>
      <button
        type="submit"
        className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition"
      >
        Generar contenido IA
      </button>
    </form>
  );
}
