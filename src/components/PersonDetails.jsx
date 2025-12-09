import { useEffect } from "react";
import { useParams } from "react-router-dom";
import movieStore from "../stores/movieStore";

export default function PersonDetails() {
  const { id } = useParams();
  const {
    personDetails,
    fetchPersonDetails,
    personMovieCredits,
    personTVCredits,
    fetchPersonCredits,
    loading,
  } = movieStore();

  useEffect(() => {
    fetchPersonDetails(id);
    fetchPersonCredits(id);
  }, [id]);

  if (loading || !personDetails) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-lg">
        Loading...
      </div>
    );
  }

  const person = personDetails;

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto text-white font-[Inter]">

      {/* PERSON HEADER */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
        <img
          src={person.image || "/no-avatar.png"}
          alt={person.name}
          className="w-72 h-[380px] object-cover rounded-2xl shadow-2xl border border-gray-700"
        />

        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-amber-100">
            {person.name}
          </h1>

          <div className="space-y-2 text-gray-400">
            <p>
              <span className="font-semibold">Known for:</span>{" "}
              {person.knownFor || "-"}
            </p>

            <p>
              <span className="font-semibold">Birthday:</span>{" "}
              {person.birthday || "-"}
            </p>

            <p>
              <span className="font-semibold">Place of Birth:</span>{" "}
              {person.placeOfBirth || "-"}
            </p>
          </div>

          <p className="text-gray-500 mt-5 leading-relaxed text-[17px] tracking-wide bg-gray-900/40 p-4 rounded-xl border border-gray-700 shadow-inner">
            {person.biography || "No biography available."}
          </p>
        </div>
      </div>

      {/* MOVIE + TV GRIDS */}
      <PersonGrid
        title="Movie Credits"
        items={personMovieCredits}
      />

      <PersonGrid
        title="TV Credits"
        items={personTVCredits}
      />

    </div>
  );
}

/* IMAGE CARD GRID */
function PersonGrid({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-black tracking-tight">
        {title}
      </h2>

      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-6 
        gap-6
      ">
        {items.map((m) => (
          <div
            key={m.id}
            className="
              bg-gray-900 rounded-xl 
              overflow-hidden 
              shadow-lg 
              border border-gray-700 
              hover:border-purple-500/40 
              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            <img
              src={m.poster || "/no-poster.png"}
              alt={m.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-3">
              <h3 className="font-semibold text-[15px] text-white truncate">
                {m.title}
              </h3>

              <p className="text-gray-400 text-sm truncate">
                {m.character ? `as ${m.character}` : "—"}
              </p>

              <p className="text-gray-500 text-xs mt-1">
                {m.release || "-"}
              </p>

              <p className="text-purple-400 font-medium text-sm mt-1">
                ⭐ {m.rating?.toFixed(1) || "0.0"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
