import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import movieStore from "../stores/movieStore";
import { FaTimes } from "react-icons/fa";

export default function SearchModal({ open, onClose }) {
  const {
    searchQuery,
    searchResults,
    setSearchQuery,
    searchTMDB,
    clearSearch,
  } = movieStore();

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (!e.target.closest("#search-box")) onClose();
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        id="search-box"
        className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-2xl shadow-xl p-6 relative max-h-[85vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black dark:text-gray-300 transition-colors"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Explore
        </h2>

        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            searchTMDB(e.target.value);
          }}
          placeholder="Search movies, TV shows, people..."
          className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none mb-6 transition-colors"
          autoFocus
        />

        {/* Search Results */}
        <div className="grid grid-cols-1 gap-4">
          {searchResults.map((item) => (
            <NavLink
              key={`${item.type}-${item.id}`}
              to={`/${item.type}/${item.id}`}
              onClick={() => {
                clearSearch();
                onClose();
              }}
              className="flex items-center gap-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
            >
              {/* Poster / Image */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-16 h-24 object-cover rounded-lg shadow-sm"
                />
              ) : (
                <div className="w-16 h-24 bg-gray-300 dark:bg-gray-700 flex items-center justify-center rounded-lg text-gray-600 text-2xl">
                  {item.type === "movie" && "🎬"}
                  {item.type === "tv" && "📺"}
                  {item.type === "person" && "🧑"}
                </div>
              )}

              {/* Title & Type */}
              <div className="flex flex-col">
                <p className="font-medium text-gray-800 dark:text-gray-100">
                  {item.title || item.name}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.type === "movie" && "Movie"}
                  {item.type === "tv" && "TV Show"}
                  {item.type === "person" && "Person"}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
