import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import SearchModal from "./components/SearchModal";

import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";

import PeoplePage from "./components/PeoplePage";
import MoviesPage from "./components/MoviesPage";
import TVPage from "./components/TVPage";
import Footer from "./components/Footer";
import PersonDetails from "./components/PersonDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Global dark mode (Tailwind)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* TOP NAVBAR */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openSearch={() => setShowSearch(true)}
      />

      {/* SEARCH MODAL */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      {/* MAIN CONTENT */}
      <main className="pb-28">
        <Routes>
          <Route path="/people" element={<PeoplePage/>} />
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="/tv" element={<TVPage/>}/>
          <Route path="/" element={<HomePage />} />
          

          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<MovieDetails type="tv" />} />
         
          <Route path="/person/:id" element={<PersonDetails />} />
        </Routes>
      </main>

      {/* FLOATING BOTTOM NAV */}
      <BottomNav />
      <Footer/>
    </div>
  );
}

export default App;
