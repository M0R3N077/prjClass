import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";
import Button from "./components/Button";

interface Quote {
  content: string;
  author: string;
}

export default function App() {
  const [quote, setQuote] = useState<Quote | null>(null);

  // Função que pega uma frase da API
  const fetchQuote = async () => {
   const res = await fetch(`https://api.adviceslip.com/advice?${Date.now()}`);
    const data = await res.json();

    // Aqui já dá para trocar o texto para português com tradutor simples (exemplo)
    const translated = {
      content: data.slip.advice, // depois você pode integrar API de tradução, mas mantém simples
      author: "",
    };

    setQuote(translated);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">React Quotes App</h1>

      {quote && <QuoteCard content={quote.content} author={quote.author} />}

      <Button text="Nova frase" onClick={fetchQuote} />
    </div>
  );
}
