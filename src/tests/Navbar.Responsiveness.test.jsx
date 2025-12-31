import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import Navbar from "../components/Navbar";


test("opens and closes mobile menu", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <Navbar darkMode={false} setDarkMode={vi.fn()} />
    </MemoryRouter>
  );

  const menuButton = screen.getByRole("button", { name: "mobile-menu" });

  await user.click(menuButton);
  expect(screen.getAllByText("Home").length).toBeGreaterThan(1);

  await user.click(menuButton);
});
