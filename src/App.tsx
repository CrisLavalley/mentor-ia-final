
import { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";
import Loader from "./components/Loader";

export default function App() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (tema: string, nivel: string) => {
    setLoading(true);
    const prompt = `
Quiero que actúes como tutor académico. Dado el siguiente tema: "${tema}" y el nivel educativo: "${nivel}", por favor:

1. Genera un resumen claro, extenso y bien estructurado del tema.
2. Sugiéreme una ruta de estudio de 3 pasos con detalles en cada uno.
3. Crea 10 preguntas de opción múltiple para autoevaluarme, señalando la respuesta correcta y explicándola si es necesario.

Responde usando Markdown estructurado con títulos y subtítulos.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    setContent(data.choices[0].message.content);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-md">🧠 Mentor IA Académico</h1>
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6">
          <InputForm onSubmit={handleGenerate} />
          {loading ? <Loader /> : <Results content={content} />}
        </div>
      </div>
    </div>
  );
}
