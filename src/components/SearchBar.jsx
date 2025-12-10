import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import movieStore from "../stores/movieStore";

const SearchBar = () => {
  const navigate = useNavigate();
  const searchTMDB = movieStore((state) => state.searchTMDB);

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    searchTMDB(query);
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded bg-gray-800 text-white"
        placeholder="Search..."
      />
      <button className="bg-red-600 px-4 py-2 rounded text-white">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
