import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import SearchModal from "./SearchModal";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          
          <NavLink
            to="/"
            className="flex items-center gap-2 font-bold text-xl select-none"
          >
            <p>E-Movie</p>
            
          </NavLink>

         
          <div className="hidden md:flex items-center gap-6 font-medium">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/movies">Movies</NavItem>
            <NavItem to="/tv">TV Shows</NavItem>
            <NavItem to="/people">People</NavItem>
          </div>

          
          <div className="flex items-center gap-4 text-lg">
            <FaSearch
            data-testid="search-icon" 
              onClick={() => setSearchOpen(true)}
              className="cursor-pointer hover:text-blue-500"
            />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hover:text-yellow-400"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
            aria-label="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 
          ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex flex-col p-4 gap-4">
            <MobileItem to="/" close={() => setMenuOpen(false)}>Home</MobileItem>
            <MobileItem to="/movies" close={() => setMenuOpen(false)}>Movies</MobileItem>
            <MobileItem to="/tv" close={() => setMenuOpen(false)}>TV Shows</MobileItem>
            <MobileItem to="/people" close={() => setMenuOpen(false)}>People</MobileItem>
          </div>
        </div>
      </header>

      
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}


function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition ${
          isActive
            ? "text-blue-600 dark:text-blue-400 font-bold"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function MobileItem({ to, close, children }) {
  return (
    <NavLink
      to={to}
      onClick={close}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
    >
      {children}
    </NavLink>
  );
}
