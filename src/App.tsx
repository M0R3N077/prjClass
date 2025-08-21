import { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import Button from "./components/Button";

// Aqui no nosso projeto, eu criei a interface Quote, que obriga o objeto a ter uma propriedade content do tipo texto.
interface Quote {
  content: string;
} 

export default function App() {
  // quando eu coloco o setQuote, ele só pode chamar as chaves que estão no objeto quote da minha interface.
  const [quote, setQuote] = useState<Quote | null>(null);

  async function fetchQuote() {
    //Date.now() é uma função do JavaScript que retorna o número de milissegundos desde 1º de janeiro de 1970 (também chamado de Unix Epoch).
    //Mesmo que a API ignore esse parâmetro, o navegador entende que é uma URL diferente, então não reutiliza o cache. Isso garante que você receba uma nova frase sempre.
    const res = await fetch(`https://api.adviceslip.com/advice?${Date.now()}`);
    const data = await res.json();
    setQuote({ content: data.slip.advice});
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 drop-shadow-sm">
        Random Advice Generator
      </h1>

{/* Se quote existir (ou seja, não for null ou undefined), então o que vem depois do && será renderizado.
Se quote não existir, nada será renderizado. */}
      {quote && <QuoteCard content={quote.content}/>}

{/* onClick é uma prop que você definiu no seu componente Button.
Ou seja, você está dizendo que quando o botão for clicado, a função fetchQuote deve ser executada.
fetchQuote é a função que busca uma nova frase da API e atualiza o estado (setQuote). */}
      <Button onClick={fetchQuote}>Get New Advice</Button>
    </div>
  );
}
