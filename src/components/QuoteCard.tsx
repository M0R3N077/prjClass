interface QuoteProps {
  content: string;
  author: string;
}

export default function QuoteCard({ content, author }: QuoteProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-4 max-w-md text-center">
      <p className="text-lg italic mb-2">"{content}"</p>
      <p className="text-sm text-gray-600">- {author}</p>
    </div>
  );
}
    