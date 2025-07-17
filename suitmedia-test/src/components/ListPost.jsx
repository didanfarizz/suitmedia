import React, { useState, useMemo } from 'react';
import { articles } from '../data/article';
import ArticleCard from './ArticleCard';
import Dropdown from './dropdown';
import Pagination from './Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState({ label: '10', value: 10 });
  const [sortBy, setSortBy] = useState({ label: 'Newest', value: 'newest' });

  const articlesPerPageOptions = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
  ];

  const sortByOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
  ];

  // sort page
  const sortedAndPaginatedArticles = useMemo(() => {
    const sorted = [...articles].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sortBy.value === 'newest') {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });

    const indexOfLastArticle = currentPage * articlesPerPage.value;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage.value;
    return sorted.slice(indexOfFirstArticle, indexOfLastArticle);
  }, [currentPage, articlesPerPage, sortBy]);

  const totalPages = Math.ceil(articles.length / articlesPerPage.value);

  const totalArticles = articles.length;
  const startIndex = (currentPage - 1) * articlesPerPage.value + 1;
  const endIndex = Math.min(currentPage * articlesPerPage.value, totalArticles);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleArticlesPerPageChange = (option) => {
    setArticlesPerPage(option);
    setCurrentPage(1); 
  };

  const handleSortByChange = (option) => {
    setSortBy(option);
    setCurrentPage(1); 
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <div className="text-gray-700 text-sm">
          Showing {startIndex} to {endIndex} of {totalArticles}
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Dropdown label="Show per page" options={articlesPerPageOptions} selectedOption={articlesPerPage} onSelect={handleArticlesPerPageChange} />
          <Dropdown label="Sort by" options={sortByOptions} selectedOption={sortBy} onSelect={handleSortByChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedAndPaginatedArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
