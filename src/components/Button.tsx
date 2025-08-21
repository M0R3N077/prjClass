interface ButtonProps {
  // O tipo () => void significa que onClick é uma função que não recebe parâmetros e não retorna nada (ou seja, apenas executa alguma ação).
// Isso é útil para passar funções de evento, como a que você passa para buscar uma nova frase.
  onClick: () => void;
// O children é um conceito do React que representa o conteúdo que você coloca dentro do componente, no seu caso o texto do botão.
// React.ReactNode é o tipo que pode ser qualquer coisa que o React consegue renderizar: texto, números, JSX, outro componente, até arrays de elementos.
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}
