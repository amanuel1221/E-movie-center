import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import Navbar from "../components/Navbar";

test("renders navbar links", () => {
  render(
    <MemoryRouter>
      <Navbar darkMode={false} setDarkMode={vi.fn()} />
    </MemoryRouter>
  );

   expect(screen.getByText("E-Movie")).toBeInTheDocument();
  expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
  expect(screen.getAllByText("Movies").length).toBeGreaterThan(0);
  expect(screen.getAllByText("TV Shows").length).toBeGreaterThan(0);
  expect(screen.getAllByText("People").length).toBeGreaterThan(0);
});
