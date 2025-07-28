import React from "react";
import FilmCard from "../components/FilmCard";
import film1_vert from "../../public/assets/film1_vert.jpg"
import film2_vert from "../../public/assets/film2_vert.jpg"
import film1_hor from "../../public/assets/film1_hor.png"
import film2_hor from "../../public/assets/film2_hor.png"

const FilmsPage = () => {
  const filmData = [
    {
      title: "Sad Letters of an Imaginary Woman",
      posterVertical: film1_vert,
      posterHorizontal: film1_hor,
      imdb: "https://www.imdb.com/title/tt33450429/",
      year: 2024,
      festivals: ["Busan International Film Festival", "IFFLA", "MIFF", "Bengaluru IFF"],
      status: "Premiered",
      summary:
        "A lyrical meditation on memory, longing, and fragmented time, the film follows the haunting interior world of a woman navigating absence and the passage of seasons.",
    },
    {
      title: "Secrets of a Mountain Serpent",
      posterVertical: film2_vert,
      posterHorizontal: film2_hor,
      imdb: "https://www.imdb.com/title/tt37535266/",
      year: 2025,
      festivals: ["Venice Film Festival (Upcoming)"],
      status: "World Premiere - Venice 2025",
      summary:
        "Rooted in ancient myth yet resonating with modern existentialism, this upcoming feature explores faith, solitude, and the secrets hidden in Himalayan silence.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-[10vw] lg:px-[12vw] py-10 space-y-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Our Films</h2>
      <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
        A cinematic journey through memory, myth, and meaning. Explore our past and upcoming features.
      </p>

      {filmData.map((film, idx) => (
        <FilmCard key={idx} film={film} />
      ))}
    </div>
  );
};

export default FilmsPage;
