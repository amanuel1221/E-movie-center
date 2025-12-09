import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import movieStore from "../stores/movieStore";

export default function PeoplePage() {
  const { popularPeople, fetchPopularPeople } = movieStore();

  useEffect(() => {
    fetchPopularPeople();
  }, []);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Popular People</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {popularPeople.map((p) => (
          <NavLink to={`/person/${p.id}`} key={p.id}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transform transition duration-300 overflow-hidden">
              <img
                src={p.image || "/no-avatar.png"}
                className="h-60 w-full object-cover rounded-t-xl"
                alt={p.name}
              />
              <div className="p-2 text-center">
                <p className="font-semibold text-gray-900 dark:text-white">{p.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {p.known_for?.map((m) => m.title || m.name).join(", ")}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
