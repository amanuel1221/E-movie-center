import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import Navbar from "../components/Navbar";

test("calls setDarkMode when toggle clicked", async () => {
  const user = userEvent.setup();
  const setDarkMode = vi.fn();

  render(
    <MemoryRouter>
      <Navbar darkMode={false} setDarkMode={setDarkMode} />
    </MemoryRouter>
  );

  const toggleButton = screen.getAllByRole("button")[0];

  await user.click(toggleButton);

  expect(setDarkMode).toHaveBeenCalled();
});
// i showed this only behaviour not fully implementations
