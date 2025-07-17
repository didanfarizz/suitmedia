import React from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  const maxPageButtons = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  if (endPage - startPage + 1 < maxPageButtons) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex items-center justify-center pt-4" aria-label="Pagination">
      <div className="relative z-0 inline-flex rounded-md -space-x-px" aria-label="Pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="sr-only">Previous</span>
          <FiChevronsLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="bg-white  text-gray-700 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              1
            </button>
            {startPage > 2 && (
              <span className="relative inline-flex items-center px-4 py-2  bg-white text-sm font-medium text-gray-700">
                ...
              </span>
            )}
          </>
        )}

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            aria-current={currentPage === number ? 'page' : undefined}
            className={`relative inline-flex items-center px-3 py-2  text-sm font-medium rounded-lg ${
              currentPage === number
                ? 'z-10 bg-[#f26d36] border-[#f26d36] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {number}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="relative inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className="bg-white text-gray-700 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="sr-only">Next</span>
          <FiChevronsRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;