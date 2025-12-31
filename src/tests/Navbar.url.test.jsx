import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter,Routes,Route } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import Navbar from "../components/Navbar";


test("test urls work in navbar home,people and tv shows ", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter initialEntries={["/"]}>

      <Navbar darkMode={false} setDarkMode={vi.fn()} />
      <Routes>
        <Route path="/" element={<p>This is home page</p>}/>
        <Route path="/movies" element={<p>This is movies page</p>}/>
        <Route path="/people" element={<p>This is peoples page</p>}/>
        <Route path="/Tv" element={<p>This is Tv shows</p>}/>
      </Routes>

    </MemoryRouter>
  );
const moviesLink = screen.getAllByText("Movies")[0];
const TvshowLink=screen.getAllByText("TV Shows")[0];
const PeopleLink=screen.getAllByText("People")[0];
const homeLink=screen.getAllByText("Home")[0];
  await user.click(homeLink);
  expect(screen.getByText("This is home page")).toBeInTheDocument();
    await user.click(moviesLink);
    expect(screen.getByText("This is movies page")).toBeInTheDocument();
    await user.click(TvshowLink);
    expect(screen.getByText("This is Tv shows")).toBeInTheDocument();
  await user.click(PeopleLink);
  expect(screen.getByText("This is peoples page")).toBeInTheDocument();
});