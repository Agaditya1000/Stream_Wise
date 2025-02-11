import React, { useState, useEffect } from 'react';
import { MovieCard } from '../components/MovieCard';
import type { Movie } from '../types/movie';

const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdrop_path: "/eVqR3NxKShhQWDHpvPqHNoVbquF.jpg",
    release_date: "2024-02-27",
    vote_average: 8.5,
    genre_ids: [878, 12]
  },
  {
    id: 2,
    title: "Poor Things",
    overview: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
    release_date: "2023-12-07",
    vote_average: 8.1,
    genre_ids: [878, 10749, 35]
  },
  {
    id: 3,
    title: "Oppenheimer",
    overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    release_date: "2023-07-19",
    vote_average: 8.2,
    genre_ids: [18, 36]
  },
  {
    id: 4,
    title: "Anyone But You",
    overview: "After an amazing first date, Bea and Ben's fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia.",
    poster_path: "/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
    backdrop_path: "/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg",
    release_date: "2023-12-21",
    vote_average: 7.2,
    genre_ids: [10749, 35]
  },
  {
    id: 5,
    title: "Madame Web",
    overview: "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
    poster_path: "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
    backdrop_path: "/oXHZiWQGTY3UWAydXUFaMTh4Qnx.jpg",
    release_date: "2024-02-14",
    vote_average: 5.3,
    genre_ids: [28, 878, 14]
  }
];

const TOP_RATED_MOVIES: Movie[] = [
  {
    id: 6,
    title: "The Godfather",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers.",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    release_date: "1972-03-14",
    vote_average: 8.7,
    genre_ids: [18, 80]
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden.",
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    release_date: "1994-09-23",
    vote_average: 8.7,
    genre_ids: [18, 80]
  },
  {
    id: 8,
    title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    release_date: "2008-07-16",
    vote_average: 8.5,
    genre_ids: [18, 28, 80]
  }
];

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>(MOCK_MOVIES);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>(TOP_RATED_MOVIES);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative mb-12 h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2225&q=80"
            alt="Cinema Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 max-w-2xl text-5xl font-bold text-white">
              Discover Your Next Favorite Movie
            </h1>
            <p className="max-w-xl text-lg text-gray-200">
              Explore the latest releases, trending movies, and timeless classics. Your perfect movie night starts here.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-bold">Trending Now</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {trendingMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-bold">Top Rated</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {topRatedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}