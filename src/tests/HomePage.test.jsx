import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
vi.mock("../Hero", () => ({
  default: ({ item }) => <div>Hero: {item.title}</div>,
}));

vi.mock("../Slider", () => ({
  default: ({ title }) => <div>Slider: {title}</div>,
}));
const mockFetch = vi.fn();

vi.mock("../stores/movieStore", () => ({
  default: () => ({
    trendingMovies: [{ id: 1, title: "Movie One" }],
    trendingTV: [],
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    popularPeople: [],

    fetchTrendingMovies: mockFetch,
    fetchTrendingTV: mockFetch,
    fetchPopularMovies: mockFetch,
    fetchUpcomingMovies: mockFetch,
    fetchTopRatedMovies: mockFetch,
    fetchPopularPeople: mockFetch,
  }),
}));
test("calls all fetch functions on mount", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  expect(mockFetch).toHaveBeenCalledTimes(6);
});
