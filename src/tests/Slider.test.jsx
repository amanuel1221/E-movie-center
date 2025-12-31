import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Slider from "../components/Slider";

test("renders nothing when data is empties ", () => {
  const { container } = render(
    <MemoryRouter>
      <Slider title="Trending Movies" data={[]} type="movie" />
    </MemoryRouter>
  );

  expect(container.firstChild).toBeNull();
});


test("renders slider title without data ", () => {
  const mockData = [
    { id: 1, title: "Avengers", image: "img.jpg", rating: 8.5 },
  ];

  render(
    <MemoryRouter>
      <Slider title="Trending Movies" data={mockData} type="movie" />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /trending movies/i })
  ).toBeInTheDocument();
});

test("renders movie items with title, image, and rating", () => {
  const mockData = [
    {
      id: 1,
      title: "Avengers",
      image: "/avengers.jpg",
      rating: 8.5,
    },
  ];

  render(
    <MemoryRouter>
      <Slider title="Trending Movies" data={mockData} type="movie" />
    </MemoryRouter>
  );

  expect(screen.getByText("Avengers")).toBeInTheDocument();
  expect(screen.getByText(/⭐ 8.5/i)).toBeInTheDocument();

  const image = screen.getByRole("img", { name: /avengers/i });
  expect(image).toHaveAttribute("src", "/avengers.jpg");
});
