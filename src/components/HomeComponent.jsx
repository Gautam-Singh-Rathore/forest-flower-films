import React from "react";
import MediaCard from "./MediaCard";
import image from "../../public/assets/profile.jpg";
import f1 from "../../public/assets/f1.jpg";
import f2 from "../../public/assets/f2.png";
import FilmCard from "./FilmCard";
import { useNavigate } from "react-router";

const HomeComponent = () => {
  const navigate = useNavigate();
  const articles = [
    {
      title:
        "Richa Chadha, Ali Fazal’s Pushing Buttons Studios Boards Venice-Bound ‘Secrets of a Mountain Serpent’ (EXCLUSIVE)",
      image:
        "https://variety.com/wp-content/uploads/2025/07/Secrets-of-a-Mountain-Serpent-1.jpg?w=1000&h=667&crop=1",
      source: "Variety",
      url: "https://variety.com/2025/film/news/richa-chadha-ali-fazal-venice-secrets-of-a-mountain-serpent-1236467779/",
    },
    {
      title:
        "Exploring The Effects Of Trauma On Memory With An Indian Director",
      image:
        "https://specials-images.forbesimg.com/imageserve/671e7634d130d62bd867d8a6/A-still-from-Nidhi-Saxena-s-Sad-Letter-of-an-Imaginary-Woman-/960x0.jpg?cropX1=0&cropX2=1600&cropY1=0&cropY2=900",
      source: "Forbes",
      url: "https://www.forbes.com/sites/swetakaushal/2024/10/31/exploring-the-effects-of-trauma-on-memory-with-an-indian-director/",
    },
    {
      title:
        "Busan Premiere ‘Sad Letters of an Imaginary Woman,’ Indian Drama Exploring Memory and Trauma, Unveils Trailer (EXCLUSIVE)",
      image:
        "https://variety.com/wp-content/uploads/2024/09/Sad-Letters-of-an-Imaginary-Woman.jpg?w=1000&h=667&crop=1",
      source: "Variety",
      url: "https://variety.com/2024/film/news/busan-sad-letters-of-an-imaginary-woman-trailer-1236151607/",
    },
  ];

  const filmData = [
    {
      title: "Sad Letters of an Imaginary Woman",
      image: f1,
      imdb: "https://www.imdb.com/title/tt33450429/",
      year: 2024,
      trailer: "https://www.youtube.com/watch?v=YvvemSwlczw",
      premiers: [
        "Busan International Film Festival",
        "IFFLA",
        "MIFF",
        "Bengaluru IFF",
      ],
      status: "Premiered",
      summary:
        "A lyrical meditation on memory, longing, and fragmented time, the film follows the haunting interior world of a woman navigating absence and the passage of seasons.",
    },
    {
      title: "Secrets of a Mountain Serpent",
      image: f2,
      imdb: "https://www.imdb.com/title/tt37535266/",
      year: 2025,
      premiers: ["Venice Film Festival (Upcoming)"],
      status: "World Premiere - Venice 2025",
      summary:
        "Rooted in ancient myth yet resonating with modern existentialism, this upcoming feature explores faith, solitude, and the secrets hidden in Himalayan silence.",
    },
  ];

  return (

    <div className="bg-black text-white">
      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[10vw] lg:px-[12vw] py-16 gap-10">
        {/* Image on Left */}
        <div className="w-full md:w-[40%] lg:w-[30%] flex justify-center">
          <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden rounded-md shadow-2xl">
            <img
              src={image}
              alt="Nidhi Saxena"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Text on Right */}
        <div className="w-full md:w-[60%] lg:w-[65%] text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
            Nidhi Saxena
          </h2>
          <h3 className="text-base md:text-lg font-medium mb-5 text-gray-400">
            Founder & Director, Forest Flower Films
          </h3>
          <p className="text-gray-300 text-base  leading-relaxed mb-4">
            Nidhi Saxena is an award-winning filmmaker and founder of Forest
            Flower Films. Her debut feature premiered at the Busan International
            Film Festival and screened worldwide.
          </p>
          <p className="text-gray-300 text-base  leading-relaxed mb-4">
            She is the first Indian woman director to receive the Asian Cinema
            Fund and has led groundbreaking storytelling projects with tribal
            girls in Rajasthan.
          </p>
          <p className="text-gray-300 text-base  leading-relaxed">
            With two acclaimed features, two children’s books, and a third film
            in the works, Nidhi continues to tell fearless, boundary-pushing
            stories.
          </p>
        </div>
      </section>

      {/* Latest Films Section */}
      <div className="px-4 md:px-[10vw] lg:px-[12vw] pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Latest Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filmData.map((film, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center  overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Vertical Poster */}
              <div className="w-full sm:w-[60%]">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover object-center rounded-md"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full sm:w-[60%] p-5 flex flex-col gap-3 text-sm sm:text-base">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {film.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {film.year} · {film.status}
                </p>
                <p className="text-gray-300 line-clamp-4">{film.summary}</p>
                <div className="text-gray-400 text-sm mt-1">
                  {film.premiers?.length > 0 && (
                    <p className="italic">
                      Premiers: {film.premiers.join(", ")}
                    </p>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-3 text-sm">
                  {film.imdb && (
                    <a
                      href={film.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
                    >
                      IMDb
                    </a>
                  )}
                  {film.trailer && (
                    <a
                      href={film.trailer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
                    >
                      Trailer
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <p
            className="text-sm md:text-base px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition cursor-pointer"
            onClick={()=>{navigate("/films")}}
          >
            View All Films
          </p>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="px-4 md:px-[10vw] lg:px-[12vw] pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          In the Media
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <MediaCard key={index} article={article} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <p
            className="text-sm md:text-base px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition cursor-pointer"
            onClick={()=>{navigate("/media")}}
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
