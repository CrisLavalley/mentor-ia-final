
interface Props {
  onSubmit: (tema: string, nivel: string) => void;
}
export default function InputForm({ onSubmit }: Props) {
  const handleClick = () => {
    const tema = (document.getElementById("tema") as HTMLInputElement).value;
    const nivel = (document.getElementById("nivel") as HTMLSelectElement).value;
    onSubmit(tema, nivel);
  };
  return (
    <div className="space-y-4">
      <input id="tema" className="w-full p-2 rounded-xl border shadow-inner dark:bg-gray-700" placeholder="Escribe un tema (ej. Revolución Francesa)" />
      <select id="nivel" className="w-full p-2 rounded-xl border shadow-inner dark:bg-gray-700">
        <option>Primaria</option>
        <option>Secundaria</option>
        <option>Preparatoria</option>
        <option>Universidad</option>
      </select>
      <button onClick={handleClick} className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl shadow-lg transition">
        Generar contenido IA
      </button>
    </div>
  );
}
