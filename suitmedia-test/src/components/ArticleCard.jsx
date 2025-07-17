import React from 'react';

const ArticleCard = ({ article }) => {
  const formattedDate = new Date(article.date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-[1.02]">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
        loading="lazy" // Tambahkan atribut ini
      />
      <div className="p-4">
        <p className="text-gray-500 text-xs mb-2">
          {formattedDate.toUpperCase().replace(' ', ' SEPTEMBER ')}
        </p>
        <h3 className="text-gray-800 font-semibold mb-2 text-xl line-clamp-3">
          {article.title}
        </h3>
      </div>
    </div>
  );
};

export default ArticleCard;