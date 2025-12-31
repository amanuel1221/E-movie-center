import { NavLink } from "react-router-dom";

export default function Slider({ title, data = [], type }) {
  if (!data || data.length === 0) {
    return null; // or show a loading spinner / placeholder
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory" data-testid="slider-container">
        {data.map((item) => (
          <NavLink
            key={item.id}
            to={`/${type}/${item.id}`}
            className="snap-start min-w-[160px] sm:min-w-[200px]"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition">
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover rounded-t-xl"
              />
              <div className="p-2">
                <p className="font-semibold truncate">{item.title}</p>
                <span className="text-sm text-gray-500">⭐ {item.rating}</span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
