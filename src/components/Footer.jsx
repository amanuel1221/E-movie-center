import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-xl font-bold text-white mb-2">🎬 E-Movie</h3>
          <p className="text-sm">
            Discover trending movies, TV shows, and your favorite actors. Stay updated with the latest releases and top-rated picks — all in one place.
          </p>
        </div>

        
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com/manuell211"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/amanuel1221"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/manuelll211"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      
      <div className="mt-6 text-center text-xs text-shadow-white">
        © {new Date().getFullYear()} E-Movie. All rights reserved.
      </div>
    </footer>
  );
}
