import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import movieStore from "../stores/movieStore";

export default function TVPage() {
  const { trendingTV, fetchTrendingTV, loading } = movieStore();

  useEffect(() => {
    fetchTrendingTV();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">TV Shows</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Trending and popular TV series
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {trendingTV.map((tv) => (
          <NavLink key={tv.id} to={`/tv/${tv.id}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition">
              <img
                src={tv.image}
                alt={tv.title}
                className="h-64 w-full object-cover rounded-t-xl"
              />
              <div className="p-2">
                <h3 className="font-semibold truncate">
                  {tv.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
                  <span>{tv.year}</span>
                  <span>⭐ {tv.rating?.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
