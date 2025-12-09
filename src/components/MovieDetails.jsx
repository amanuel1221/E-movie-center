import { useEffect } from "react";
import { useParams } from "react-router-dom";
import movieStore from "../stores/movieStore";
import { FaStar } from "react-icons/fa";

const MovieDetails = ({ type = "movie" }) => {
  const { id } = useParams();

  const {
    fetchMovieFullDetails,
    fetchMovieCredits,
    fetchMovieVideos,
    movieDetails,
    movieCredits,
    movieVideos,
    loading,
  } = movieStore();

  useEffect(() => {
    fetchMovieFullDetails(id, type);
    fetchMovieCredits(id, type);
    fetchMovieVideos(id, type);
  }, [id, type]);

  if (loading || !movieDetails) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-lg">
        Loading...
      </div>
    );
  }

  const trailer = movieVideos?.[0];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      <div
        className="relative h-[60vh] sm:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${movieDetails.backdrop})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-36 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* POSTER */}
          <div className="flex-shrink-0 relative">
            <img
              src={movieDetails.poster}
              alt={movieDetails.title}
              className="w-64 md:w-72 rounded-2xl shadow-2xl object-cover transition-transform hover:scale-105"
            />
            
            <div className="absolute -top-4 -left-4 bg-yellow-500 text-gray-900 font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <FaStar /> {movieDetails.rating.toFixed(1)}
            </div>
          </div>

          {/* INFO */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {movieDetails.title}{" "}
              <span className="text-gray-400">({movieDetails.releaseYear})</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 flex flex-wrap gap-2 items-center">
              <span className="bg-gray-700 px-2 py-1 rounded-full">
                {movieDetails.language}
              </span>
              <span className="bg-gray-700 px-2 py-1 rounded-full">
                {movieDetails.status}
              </span>
              {movieDetails.runtime && (
                <span className="bg-gray-700 px-2 py-1 rounded-full">
                  {movieDetails.runtime} min
                </span>
              )}
            </p>

            <p className="text-gray-200 leading-relaxed">{movieDetails.overview}</p>

            {/* GENRES */}
            <div className="flex flex-wrap gap-2 mt-4">
              {movieDetails.genres.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-sm rounded-full shadow"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* EXTRA INFO */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-base text-gray-300 mt-4">
              <p>
                <span className="font-semibold">Budget:</span>{" "}
                ${movieDetails.budget?.toLocaleString() || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Revenue:</span>{" "}
                ${movieDetails.revenue?.toLocaleString() || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {movieDetails.status}
              </p>
              <p>
                <span className="font-semibold">Language:</span> {movieDetails.language}
              </p>
            </div>
          </div>
        </div>

        {/* TRAILER */}
        {trailer && (
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Trailer</h2>
            <div className="relative aspect-video w-full rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Trailer"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* CAST */}
        {movieCredits?.cast && movieCredits.cast.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {movieCredits.cast.slice(0, 12).map((actor) => (
                <div
                  key={actor.id}
                  className="bg-gray-800 p-3 rounded-2xl hover:scale-105 transition transform shadow-lg"
                >
                  <img
                    src={actor.image || "/no-avatar.png"}
                    alt={actor.name}
                    className="w-full h-44 object-cover rounded-xl mb-2"
                  />
                  <p className="font-semibold text-sm truncate">{actor.name}</p>
                  <p className="text-xs text-gray-400 truncate">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CREW */}
        {movieCredits?.crew && movieCredits.crew.length > 0 && (
          <div className="mt-12 mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Crew</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {movieCredits.crew
                .filter(
                  (c) => c.job === "Director" || c.department === "Writing"
                )
                .map((crew) => (
                  <div
                    key={crew.id}
                    className="bg-gray-800 p-3 rounded-2xl hover:scale-105 transition transform shadow-lg"
                  >
                    <p className="font-semibold">{crew.name}</p>
                    <p className="text-sm text-gray-400">{crew.job}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
