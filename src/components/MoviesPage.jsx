import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import movieStore from "../stores/movieStore";

export default function MoviesPage() {
  const { trendingMovies, fetchTrendingMovies, loading } = movieStore();

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Movies</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Discover popular and trending movies
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {trendingMovies.map((movie) => (
          <NavLink key={movie.id} to={`/movie/${movie.id}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition">
              <img
                src={movie.image}
                alt={movie.title}
                className="h-64 w-full object-cover rounded-t-xl"
              />
              <div className="p-2">
                <h3 className="font-semibold truncate">
                  {movie.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
                  <span>{movie.year}</span>
                  <span>⭐ {movie.rating?.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
