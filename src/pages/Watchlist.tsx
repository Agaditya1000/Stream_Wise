import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { useWatchlist } from '../hooks/useWatchlist';
import { BookmarkX } from 'lucide-react';

export function Watchlist() {
  const { watchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4">
        <BookmarkX className="h-16 w-16 text-gray-400" />
        <h2 className="text-2xl font-bold">Your watchlist is empty</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Start adding movies to keep track of what you want to watch!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Watchlist</h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {watchlist.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}