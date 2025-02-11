import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { formatDate } from '../lib/utils';
import { useWatchlist } from '../hooks/useWatchlist';
import type { MovieDetails as MovieDetailsType } from '../types/movie';

const MOCK_MOVIE: MovieDetailsType = {
  id: 1,
  title: "Dune: Part Two",
  overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
  poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
  backdrop_path: "/eVqR3NxKShhQWDHpvPqHNoVbquF.jpg",
  release_date: "2024-02-27",
  vote_average: 8.5,
  genre_ids: [878, 12],
  runtime: 166,
  genres: [
    { id: 878, name: "Science Fiction" },
    { id: 12, name: "Adventure" }
  ],
  cast: [
    {
      id: 1,
      name: "Timothée Chalamet",
      character: "Paul Atreides",
      profile_path: "/BE2sdjpgsa2rNTFa66f7upkaOP.jpg"
    }
  ]
};

export function MovieDetails() {
  const { id } = useParams();
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const movie = MOCK_MOVIE; // In a real app, fetch movie details using the ID

  const inWatchlist = isInWatchlist(movie.id);

  const handleWatchlistToggle = () => {
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="mb-4 text-4xl font-bold text-white">{movie.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>{movie.vote_average.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{movie.runtime} min</span>
              </div>
              <div className="flex gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full bg-gray-800 px-3 py-1 text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto grid gap-8 lg:grid-cols-3">
        {/* Poster and Actions */}
        <div className="space-y-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
          <button
            onClick={handleWatchlistToggle}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {inWatchlist ? (
              <>
                <BookmarkCheck className="h-5 w-5" />
                Remove from Watchlist
              </>
            ) : (
              <>
                <BookmarkPlus className="h-5 w-5" />
                Add to Watchlist
              </>
            )}
          </button>
        </div>

        {/* Details */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <section>
              <h2 className="mb-4 text-2xl font-bold">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300">{movie.overview}</p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Cast</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {movie.cast.map((actor) => (
                  <div key={actor.id} className="text-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                      alt={actor.name}
                      className="mx-auto mb-2 rounded-lg"
                    />
                    <p className="font-semibold">{actor.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {actor.character}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}