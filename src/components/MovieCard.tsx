import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export function MovieCard({ movie, className }: MovieCardProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className={cn(
        'group relative overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105',
        className
      )}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-full w-full object-cover transition-opacity group-hover:opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-white">{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
}