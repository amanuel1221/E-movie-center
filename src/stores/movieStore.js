import { create } from "zustand";
import axios from "axios";


const API_KEY =import.meta.env.VITE_API_KEY;;
const BASE_URL = "https://api.themoviedb.org/3";
const IMG = "https://image.tmdb.org/t/p/w500";

const movieStore = create((set,get) => ({
  loading: false,
  error: null,
   favorites: [],

  // MAIN STATES
  trendingMovies: [],
  trendingTV: [],
  popularMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  popularPeople: [],
  searchResults: [],
  searchQuery: "",

  movieDetails: null,
  movieCredits: null,
  movieVideos: null,

  personDetails: null,
  personMovieCredits: [],
  personTVCredits: [],

  // ============================================
  // TRENDING MOVIES
  
  fetchTrendingMovies: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/trending/movie/week`, {
        params: { api_key: API_KEY },
      });

      const movies = res.data.results.map((d) => ({
        id: d.id,
        title: d.title,
        rating: d.vote_average,
        release: d.release_date?.slice(0, 4),
        image: d.poster_path ? `${IMG}${d.poster_path}` : null,
      }));

      set({ trendingMovies: movies, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  clearSearch: () =>
  set({
    searchResults: [],
    searchQuery: "",
  }),


  // ============================================
  // TRENDING TV SHOWS
  
  fetchTrendingTV: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/trending/tv/week`, {
        params: { api_key: API_KEY },
      });

      const shows = res.data.results.map((d) => ({
        id: d.id,
        title: d.name,
        rating: d.vote_average,
        release: d.first_air_date?.slice(0, 4),
        image: d.poster_path ? `${IMG}${d.poster_path}` : null,
      }));

      set({ trendingTV: shows, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ============================================
  // POPULAR MOVIES
  
  fetchPopularMovies: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/movie/popular`, {
        params: { api_key: API_KEY },
      });

      const movies = res.data.results.map((d) => ({
        id: d.id,
        title: d.title,
        rating: d.vote_average,
        release: d.release_date?.slice(0, 4),
        image: d.poster_path ? `${IMG}${d.poster_path}` : null,
      }));

      set({ popularMovies: movies, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ============================================
  // UPCOMING MOVIES
  
  fetchUpcomingMovies: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/movie/upcoming`, {
        params: { api_key: API_KEY },
      });

      const movies = res.data.results.map((d) => ({
        id: d.id,
        title: d.title,
        rating: d.vote_average,
        release: d.release_date?.slice(0, 4),
        image: d.poster_path ? `${IMG}${d.poster_path}` : null,
      }));

      set({ upcomingMovies: movies, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
  searchTMDB: async (query) => {
  if (!query.trim()) {
    set({ searchResults: [] });
    return;
  }

  set({ loading: true, error: null, searchQuery: query });

  try {
    const res = await axios.get(`${BASE_URL}/search/multi`, {
      params: {
        api_key: API_KEY,
        query,
        include_adult: false,
      },
    });

    const results = res.data.results
      .filter((r) => r.media_type !== "person" || r.profile_path)
      .map((r) => ({
        id: r.id,
        type: r.media_type, 
        title: r.title || r.name,
        year:
          r.release_date?.slice(0, 4) ||
          r.first_air_date?.slice(0, 4),
        rating: r.vote_average,
        image:
          r.poster_path
            ? `${IMG}${r.poster_path}`
            : r.profile_path
            ? `${IMG}${r.profile_path}`
            : null,
      }));

    set({ searchResults: results, loading: false });
  } catch (err) {
    set({ error: err.message, loading: false });
  }
},


  // ============================================
  // TOP RATED MOVIES
 
  fetchTopRatedMovies: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/movie/top_rated`, {
        params: { api_key: API_KEY },
      });

      const movies = res.data.results.map((d) => ({
        id: d.id,
        title: d.title,
        rating: d.vote_average,
        release: d.release_date?.slice(0, 4),
        image: d.poster_path ? `${IMG}${d.poster_path}` : null,
      }));

      set({ topRatedMovies: movies, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ============================================
  // POPULAR PEOPLE
  
  fetchPopularPeople: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/person/popular`, {
        params: { api_key: API_KEY },
      });

      const people = res.data.results.map((p) => ({
        id: p.id,
        name: p.name,
        knownFor: p.known_for_department,
        image: p.profile_path ? `${IMG}${p.profile_path}` : null,
      }));

      set({ popularPeople: people, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ========================================================
  // FULL MOVIE DETAILS (Budget, Revenue, Companies, etc.)

  fetchMovieFullDetails: async (id, type = "movie") => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/${type}/${id}`, {
        params: { api_key: API_KEY },
      });

      const d = res.data;

      const movieDetails = {
        id: d.id,
        title: d.title || d.name,
        overview: d.overview,
        rating: d.vote_average,
        releaseYear: d.release_date?.slice(0, 4) || d.first_air_date?.slice(0, 4),
        runtime: d.runtime,
        status: d.status,
        language: d.original_language?.toUpperCase(),
        countries: d.production_countries?.map((c) => c.name),
        budget: d.budget,
        revenue: d.revenue,
        genres: d.genres?.map((g) => g.name),
        poster: d.poster_path ? `${IMG}${d.poster_path}` : null,
        backdrop: d.backdrop_path ? `${IMG}${d.backdrop_path}` : null,
        companies: d.production_companies?.map((c) => ({
          id: c.id,
          name: c.name,
          logo: c.logo_path ? `${IMG}${c.logo_path}` : null,
        })),
      };

      set({ movieDetails, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ========================================================
  // CAST & CREW
  
  fetchMovieCredits: async (id, type = "movie") => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/${type}/${id}/credits`, {
        params: { api_key: API_KEY },
      });

      const cast = res.data.cast.map((c) => ({
        id: c.id,
        name: c.name,
        character: c.character,
        department: c.known_for_department,
        image: c.profile_path ? `${IMG}${c.profile_path}` : null,
      }));

      const crew = res.data.crew.map((c) => ({
        id: c.id,
        name: c.name,
        job: c.job,
        department: c.department,
        image: c.profile_path ? `${IMG}${c.profile_path}` : null,
      }));

      set({ movieCredits: { cast, crew }, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ========================================================
  // TRAILERS (YouTube videos)

  fetchMovieVideos: async (id, type = "movie") => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/${type}/${id}/videos`, {
        params: { api_key: API_KEY },
      });

      const trailers = res.data.results.filter(
        (v) => v.site === "YouTube" && v.type === "Trailer"
      );

      set({ movieVideos: trailers, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ========================================================
  // PERSON PROFILE DETAILS
  
  fetchPersonDetails: async (id) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/person/${id}`, {
        params: { api_key: API_KEY },
      });

      const p = res.data;

      const personDetails = {
        id: p.id,
        name: p.name,
        knownFor: p.known_for_department,
        birthday: p.birthday || "-",
        placeOfBirth: p.place_of_birth || "-",
        biography: p.biography,
        image: p.profile_path ? `${IMG}${p.profile_path}` : null,
      };

      set({ personDetails, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // ========================================================
  // PERSON MOVIE + TV CREDITS
  
  fetchPersonCredits: async (id) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${BASE_URL}/person/${id}/combined_credits`, {
        params: { api_key: API_KEY },
      });

      const movies = res.data.cast
        .filter((c) => c.media_type === "movie")
        .map((d) => ({
          id: d.id,
          title: d.title,
          rating: d.vote_average,
          release: d.release_date?.slice(0, 4),
          character: d.character,
          poster: d.poster_path ? `${IMG}${d.poster_path}` : null,
        }));

      const shows = res.data.cast
        .filter((c) => c.media_type === "tv")
        .map((d) => ({
          id: d.id,
          title: d.name,
          rating: d.vote_average,
          release: d.first_air_date?.slice(0, 4),
          character: d.character,
          poster: d.poster_path ? `${IMG}${d.poster_path}` : null,
        }));

      set({
        personMovieCredits: movies,
        personTVCredits: shows,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
   addFavorite: (item) => {
    const favorites = get().favorites;
    const exists = favorites.find(f => f.id === item.id && f.type === item.type);
    if (!exists) set({ favorites: [...favorites, item] });
  },

  removeFavorite: (item) => {
    const favorites = get().favorites;
    set({ favorites: favorites.filter(f => !(f.id === item.id && f.type === item.type)) });
  },

  toggleFavorite: (item) => {
    const favorites = get().favorites;
    const exists = favorites.find(f => f.id === item.id && f.type === item.type);
    if (exists) get().removeFavorite(item);
    else get().addFavorite(item);
  },

  clearFavorites: () => set({ favorites: [] }),
  setSearchQuery: (query) => set({ searchQuery: query }),


  // ========================================================
  // CLEAR
  
  clearAll: () =>
    set({
      trendingMovies: [],
      trendingTV: [],
      popularMovies: [],
      upcomingMovies: [],
      topRatedMovies: [],
      popularPeople: [],

      movieDetails: null,
      movieCredits: null,
      movieVideos: null,

      personDetails: null,
      personMovieCredits: [],
      personTVCredits: [],

      loading: false,
      error: null,
    }),
}));

export default movieStore;
