import React from "react";
import MediaCard from "./MediaCard";
import image from "../../public/assets/profile.jpg";

const HomeComponent = () => {
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
        "Nidhi Saxena’s Sad Letters of an Imaginary Woman captivates audiences at Busan International Film Festival 2024: “Cinema can instigate or draw attention”",
      image:
        "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/10/Nidhi-Saxenas-Sad-Letters-of-an-Imaginary-Woman-captivates-audiences-at-Busan-International-Film-Festival-2024.jpg",
      source: "Bollywood Hungama",
      url: "https://www.bollywoodhungama.com/news/features/nidhi-saxenas-sad-letters-imaginary-woman-captivates-audiences-busan-international-film-festival-2024-cinema-can-instigate-draw-attention/",
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
          <h3 className="text-md md:text-lg lg:text-xl font-medium mb-5 text-gray-400">
            Founder & Director, Forest Flower Films
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            Nidhi Saxena is an award-winning filmmaker and founder of Forest
            Flower Films. Her debut feature premiered at the Busan International
            Film Festival and screened worldwide.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            She is the first Indian woman director to receive the Asian Cinema
            Fund and has led groundbreaking storytelling projects with tribal
            girls in Rajasthan.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            With two acclaimed features, two children’s books, and a third film
            in the works, Nidhi continues to tell fearless, boundary-pushing
            stories.
          </p>
        </div>
      </section>

      {/* Latest Fims Section  */}

      {/* Latets Articles  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-[10vw] lg:px-[12vw] py-16">
        {articles.map((article, index) => (
          <MediaCard key={index} article={article} />
        ))}
        
      </div>
    </div>
  );
};

export default HomeComponent;
