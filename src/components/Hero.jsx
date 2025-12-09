import { motion } from "framer-motion";
import { HiOutlineFire } from "react-icons/hi";

export default function Hero() {
  return (
    <div
      className="relative h-[65vh] sm:h-[75vh] w-full rounded-2xl overflow-hidden mb-12 mt-10"
      style={{
        backgroundImage: `url(/images/hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
      <div className="absolute inset-0 bg-black/60" />
      
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />

     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/3 left-6 sm:left-16 max-w-2xl text-white space-y-4"
      >
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          className="text-yellow-400 text-4xl"
        >
          <HiOutlineFire />
        </motion.div>

        
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg animate-pulse">
          Today is Your Movie Night
        </h1>

        
        <motion.h3
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-2xl sm:text-3xl font-bold drop-shadow-lg"
        >
          Discover Your Next Favorite Film
        </motion.h3>

       
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="text-gray-300 sm:text-lg drop-shadow-sm"
        >
          Explore trending movies, top-rated TV shows, and timeless classics in one place.
        </motion.p>
      </motion.div>

      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent" />
    </div>
  );
}
