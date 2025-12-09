import { NavLink } from "react-router-dom";
import { FaHome, FaFilm, FaTv, FaUsers } from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-full max-w-[600px]">
      <nav
        className="
          flex justify-around items-center
          bg-white dark:bg-gray-900
          shadow-xl
          rounded-full
          px-6 py-3
          border border-gray-200 dark:border-gray-700
        "
      >
        <NavItem to="/" icon={<FaHome />} label="Home" />
        <NavItem to="/movies" icon={<FaFilm />} label="Movies" />
        <NavItem to="/tv" icon={<FaTv />} label="TV Shows" />
        <NavItem to="/people" icon={<FaUsers />} label="People" />
      </nav>
    </div>
  );
}


function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `
        flex flex-col items-center gap-1 text-xs
        ${
          isActive
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-500 dark:text-gray-400"
        }
        hover:text-blue-500 transition
        `
      }
    >
      <div className="text-lg">{icon}</div>
      <span className="hidden sm:block">{label}</span>
    </NavLink>
  );
}
