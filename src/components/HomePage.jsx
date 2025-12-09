import React, { useEffect } from "react";
import movieStore from "../stores/movieStore";
import Hero from "./Hero";
import Slider from "./Slider";

export default function HomePage() {
  const {
    trendingMovies,
    trendingTV,
    popularMovies,
    upcomingMovies,
    topRatedMovies,
    popularPeople,
    fetchTrendingMovies,
    fetchTrendingTV,
    fetchPopularMovies,
    fetchUpcomingMovies,
    fetchTopRatedMovies,
    fetchPopularPeople,
  } = movieStore();

  useEffect(() => {
    fetchTrendingMovies();
    fetchTrendingTV();
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchTopRatedMovies();
    fetchPopularPeople();
  }, []);

  return (
    <div className="px-4 max-w-7xl mx-auto">
      
      {trendingMovies.length > 0 && <Hero item={trendingMovies[0]} />}

      <Slider title="Trending Movies" data={trendingMovies} type="movie" />
      <Slider title="Trending TV Shows" data={trendingTV} type="tv" />
      <Slider title="Popular Movies" data={popularMovies} type="movie" />
      <Slider title="Top Rated Movies" data={topRatedMovies} type="movie" />
      <Slider title="Upcoming Movies" data={upcomingMovies} type="movie" />
    </div>
  );
}
