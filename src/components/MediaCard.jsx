import React from "react";

const MediaCard = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-[1.01] transition-all duration-300 flex flex-col"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">
            {article.source}
          </span>
        </div>
      </div>

      {/* Text Section */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-white text-lg font-bold leading-snug line-clamp-3">
          {article.title}
        </h3>
      </div>
    </a>
  );
};

export default MediaCard;
