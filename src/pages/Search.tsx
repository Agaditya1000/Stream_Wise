import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { MovieCard } from '../components/MovieCard';
import type { Movie } from '../types/movie';

const MOCK_SEARCH_RESULTS: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdrop_path: "/eVqR3NxKShhQWDHpvPqHNoVbquF.jpg",
    release_date: "2024-02-27",
    vote_average: 8.5,
    genre_ids: [878, 12]
  }
];

export function Search() {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setIsSearching(true);
    // In a real app, fetch search results from API
    setSearchResults(MOCK_SEARCH_RESULTS);
    setIsSearching(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {isSearching ? (
        <div className="text-center">Searching...</div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 dark:text-gray-400">
          No results found. Try searching for a movie title.
        </div>
      )}
    </div>
  );
}