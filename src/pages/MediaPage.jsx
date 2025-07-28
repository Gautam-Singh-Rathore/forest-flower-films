import React from "react";
import MediaCard from "../components/MediaCard";

const articles = [
  {
    title: "Richa Chadha, Ali Fazal’s Pushing Buttons Studios Boards Venice-Bound ‘Secrets of a Mountain Serpent’ (EXCLUSIVE)",
    image: "https://variety.com/wp-content/uploads/2025/07/Secrets-of-a-Mountain-Serpent-1.jpg?w=1000&h=667&crop=1",
    source: "Variety",
    url: "https://variety.com/2025/film/news/richa-chadha-ali-fazal-venice-secrets-of-a-mountain-serpent-1236467779/",
  },
  {
    title: "Exploring The Effects Of Trauma On Memory With An Indian Director",
    image:
      "https://specials-images.forbesimg.com/imageserve/671e7634d130d62bd867d8a6/A-still-from-Nidhi-Saxena-s-Sad-Letter-of-an-Imaginary-Woman-/960x0.jpg?cropX1=0&cropX2=1600&cropY1=0&cropY2=900",
    source: "Forbes",
    url: "https://www.forbes.com/sites/swetakaushal/2024/10/31/exploring-the-effects-of-trauma-on-memory-with-an-indian-director/",
  },
  
  {
    title: "Nidhi Saxena’s Sad Letters of an Imaginary Woman captivates audiences at Busan International Film Festival 2024: “Cinema can instigate or draw attention”",
    image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/10/Nidhi-Saxenas-Sad-Letters-of-an-Imaginary-Woman-captivates-audiences-at-Busan-International-Film-Festival-2024.jpg",
    source: "Bollywood Hungama",
    url: "https://www.bollywoodhungama.com/news/features/nidhi-saxenas-sad-letters-imaginary-woman-captivates-audiences-busan-international-film-festival-2024-cinema-can-instigate-draw-attention/",
  },
  {
    title: "Richa Chadha and Ali Fazal’s Pushing Buttons Studios boards Secrets of a Mountain Serpent, set for Venice premiere: “This is a story rooted in myth and yet is startlingly relevant today”",
    image: "https://media5.bollywoodhungama.in/wp-content/uploads/2025/07/Richa-1.jpg",
    source: "Bollywood Hungama",
    url: "https://www.bollywoodhungama.com/news/features/richa-chadha-ali-fazals-pushing-buttons-studios-boards-secrets-mountain-serpent-set-venice-premiere-story-rooted-myth-yet-startlingly-relevant-toda/",
  },
  {
    title: "Busan Premiere ‘Sad Letters of an Imaginary Woman,’ Indian Drama Exploring Memory and Trauma, Unveils Trailer (EXCLUSIVE)",
    image: "https://variety.com/wp-content/uploads/2024/09/Sad-Letters-of-an-Imaginary-Woman.jpg?w=1000&h=667&crop=1",
    source: "Variety",
    url: "https://variety.com/2024/film/news/busan-sad-letters-of-an-imaginary-woman-trailer-1236151607/",
  },
  {
    title: "Sad Letters of an Imaginary Woman’ Review: A Lyrical Antidote to Storytelling",
    image: "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Fbms-new%2Farticle%2F-2024-10-07T12%253A40%253A32.010Z-LEAD_Sad-Letters.jpg&w=1920&q=75",
    source: "The Hollywood Reporters",
    url: "https://www.hollywoodreporterindia.com/reviews/theatrical/sad-letters-of-an-imaginary-woman-review-a-lyrical-antidote-to-storytelling",
  },
  {
    title: "Sad Letters Of An Imaginary Woman Wistfully Glances Through Shards Of Memories",
    image: "https://media.assettype.com/outlookindia/2024-11-11/wx31h3ww/Screenshot-2024-11-11-204608.png?w=800&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0",
    source: "Outlook",
    url: "https://www.outlookindia.com/art-entertainment/sad-letters-of-an-imaginary-woman-wistfully-glances-through-shards-of-memories",
  },
  {
    title: "Film sets are patriarchal: Nidhi Saxena",
    image: "https://media.assettype.com/deccanherald%2F2024-07%2F0972702e-4e52-4770-9a01-35bb6a77a2d9%2Ffile7w5v3j05m784fpjangf.jpeg?w=900&auto=format%2Ccompress&fit=max",
    source: "Deccan Herald",
    url: "https://www.deccanherald.com/entertainment/film-sets-are-patriarchal-nidhi-saxena-3094791",
  },
  
];

const MediaPage = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-[10vw] lg:px-[12vw] py-4 pb-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Media & Press Coverage
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
        Discover how global media is talking about our films, our founder, and
        the bold stories we bring to light.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <MediaCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
