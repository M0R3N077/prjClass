//Tipando as minhas props
interface QuoteCardProps {
  content: string;
}


//Parâmetro do meu componente (props)
export default function QuoteCard({ content}: QuoteCardProps) {
  return (
    <div className="bg-white max-w-lg text-center p-6 mb-6 rounded-2xl shadow-xl border border-gray-200">
      <p className="text-lg font-medium text-gray-700 leading-relaxed italic">
        "{content}"
      
      </p>
    </div>
  );
}
