import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Slider from "../components/Slider";

test("slider container allows horizontal scrolling", () => {
  const data = [
    { id: 1, title: "Movie 1", image: "/img.jpg", rating: 7 },
    { id: 2, title: "Movie 2", image: "/img.jpg", rating: 9 },
    { id: 3, title: "Movie 3", image: "/img.jpg", rating: 7 },
    { id: 4, title: "Movie 4", image: "/img.jpg", rating: 10},
    { id: 5, title: "Movie 5", image: "/img.jpg", rating: 8.3 },
  ];
  render(
    <MemoryRouter>
      <Slider title="Scrolling Test" data={data} type="movie" />
    </MemoryRouter>
  );

  const container = screen.getByTestId("slider-container");

  expect(container).toHaveClass("overflow-x-auto");
});
test("check slider items laid out horizontally", () => {
  const data = [
    { id: 1, title: "A", image: "/a.jpg", rating: 8 },
    { id: 2, title: "B", image: "/b.jpg", rating: 7 },
  ];

  render(
    <MemoryRouter>
      <Slider title="layouts Test" data={data} type="movie" />
    </MemoryRouter>
  );

  const container = screen.getByTestId("slider-container");

  expect(container).toHaveClass("flex");
});
test("tests slider snap scrolling with class NAme", () => {
  const data = [
    { id: 1, title: "Snap", image: "/s.jpg", rating: 9 },
  ];

  render(
    <MemoryRouter>
      <Slider title="Snap Test" data={data} type="movie" />
    </MemoryRouter>
  );

  const container = screen.getByTestId("slider-container");

  expect(container).toHaveClass("snap-x");
  expect(container).toHaveClass("snap-mandatory");
});
