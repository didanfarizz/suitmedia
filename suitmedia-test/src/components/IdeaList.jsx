import React, { useState, useEffect } from 'react';

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIdeas = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Panggil prefix proxy baru Anda di Vite: /api
        const apiUrlWithParams = '/api/ideas?' + // <-- Perhatikan: /api
          'page[number]=1&' +
          'page[size]=10&' +
          'append[]=small_image&' +
          'append[]=medium_image&' +
          'sort=-published_at';

        // Tidak perlu menambahkan headers di sini, karena Go server yang akan menanganinya
        const response = await fetch(apiUrlWithParams);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText || 'Unknown error'}`);
        }

        const data = await response.json();

        if (data && Array.isArray(data.data)) {
          setIdeas(data.data);
        } else {
          console.warn("API response does not contain a valid 'data' array:", data);
          setIdeas([]);
        }

      } catch (err) {
        console.error('Error fetching ideas:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  if (isLoading) {
    return <div className="text-center p-4">Loading ideas...</div>;
  }
  if (error) {
    return <div className="text-center p-4 text-red-600">Error: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Ideas from API</h1>
      {ideas.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ideas.map((idea) => (
            <li key={idea.id} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
              <h2 className="text-xl font-semibold mb-2 text-blue-700">{idea.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{idea.description}</p>
              {idea.medium_image && <img src={idea.medium_image} alt={idea.title} className="w-full h-48 object-cover rounded-md mb-2" />}
              <p className="text-xs text-gray-400">Published: {new Date(idea.published_at).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No ideas found. Please check the API response or try again later.</p>
      )}
    </div>
  );
};

export default IdeaList;