import React from "react";
import { FaImdb } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const FilmCard = ({ film }) => {
  return (
    <div className="overflow-hidden shadow-2xl flex flex-col lg:flex-row max-w-7xl mx-auto my-10 border border-zinc-800 p-3 rounded-3xl">
      
      {/* Left: Vertical Poster */}
      <div className="w-full lg:w-1/3 flex-shrink-0 mb-4 lg:mb-0">
        <img
          src={film.posterVertical}
          alt={film.title}
          className="w-full h-full object-cover rounded-2xl max-h-[500px] lg:max-h-full"
        />
      </div>

      {/* Right: Content Section */}
      <div className="w-full lg:w-2/3  p-5 sm:p-6 md:p-8 flex flex-col gap-6 justify-between">
        
        {/* Top: Horizontal Poster */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-800">
          <img
            src={film.posterHorizontal}
            alt={`${film.title} - horizontal`}
            className="w-full h-[180px] sm:h-[220px] md:h-[280px] object-cover transition-transform duration-300"
          />
        </div>

        {/* Middle: Text */}
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug tracking-tight">
            {film.title}
          </h3>
          <p className="text-base sm:text-lg text-gray-400 font-medium">
            {film.year} • {film.status}
          </p>
          <p className="text-sm sm:text-md text-amber-400 italic tracking-wide">
            Premiers: {film.festivals.join(", ")}
          </p>
          <p className="text-sm sm:text-md text-gray-300 leading-relaxed mt-1">
            {film.summary}
          </p>
        </div>

        {/* Bottom: Links */}
        <div className="mt-4 flex flex-wrap gap-4">
          {film.imdb && (
            <a
              href={film.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-base sm:text-lg font-semibold"
            >
              <FaImdb size={24} />
              <span>View on IMDb</span>
            </a>
          )}
          {film.trailer && (
            <a
              href={film.trailer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-base sm:text-lg font-semibold"
            >
              <FaYoutube size={22} />
              <span className="text-white">Watch Trailer</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
