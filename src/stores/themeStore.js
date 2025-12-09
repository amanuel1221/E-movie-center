import { create } from "zustand";

const useThemeStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => {
    const newMode = !state.darkMode;
    if (newMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    return { darkMode: newMode };
  }),
}));

export default useThemeStore;
