import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import Navbar from "../components/Navbar";



test("test the search icon if it would be drop down when clicked", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <Navbar darkMode={false} setDarkMode={vi.fn()} />
    </MemoryRouter>
  );

  const searchIcon = screen.getByTestId("search-icon");

  await user.click(searchIcon);

  expect(screen.getByText("Explore")).toBeInTheDocument();
});
