import React from "react";
import films from "../../public/assets/films.jpg";
import film from "../../public/assets/film.jpg";

const FilmsPage = () => {
  return (
    <div className="w-full h-full text-white bg-black">
      <div className="relative bg-cover bg-center w-full h-full lg:px-[10vw] md:px-[10vw]">
        <img src={films} className="h-[30vh] md:h-auto object-cover" />
        <h1 className="absolute top-[35%] text-black text-[60px] font-extrabold px-10 hidden md:flex">
          My Films{" "}
        </h1>
      </div>
      {/* <div className="border-b-[1px] border-gray-600"></div> */}

      <div className="flex items-center justify-center py-10 text-3xl font-semibold">
        <h1>All Time Films</h1>
      </div>

      {/* <div className="border-b-[1px] border-gray-600"></div> */}

      {/* Container  */}    
      <div className="px-4 lg:px-[10vw] py-10 flex justify-center">    
        {/* Film Card */}     
        <div className="w-full max-w-4xl bg-black p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 cursor-pointer ">
          {/* Left Section: Image */}    
          <div className="w-full md:w-[40%]">
            <img
              src={film}
              alt="Film Poster"
              className="w-full h-[300px] md:h-auto object-cover rounded-lg" 
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-full md:w-[60%] text-left">
            <p className="text-xl font-bold text-white">
              Sad Letters of an Imaginary Woman
            </p>
            <p className="text-neutral-400 mt-2">Directed by Nidhi Saxena</p>
            <div className="text-neutral-300 mt-4">
              <p>
                <span className="font-semibold text-white">Producer: </span>
                Nila Madhab Panda, Vimukthi Jayasundhra, Ajender Chawla
              </p>
              <p>
                <span className="font-semibold text-white">Cast: </span> Anamika
                Tiwari, Bhadra Basu
              </p>
              <p className="mt-4">
                <span className="font-semibold text-white">
                  About the Film:{" "}
                </span>
                Nidhi lives in an old house where she calls her childhood self,
                capturing sounds with a boom mic to transmit her words back to
                the past. As she navigates the house, memories of her absent
                father and her mother’s depression come to light. The film
                explores a mother-daughter relationship filled with love,
                resentment, and emotional turmoil, as Nidhi faces the same
                struggles her mother once did.
              </p>
              
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-between gap-4 mt-6">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.youtube.com/watch?v=YvvemSwlczw")
                }
                className="w-full hover:bg-neutral-300 bg-white text-black font-bold text-lg rounded-full py-2"
              >
                Watch Trailer
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.biff.kr/eng/html/program/prog_view.asp?idx=76031&c_idx=401&sp_idx=&QueryStep=2")
                }
                className="w-full hover:bg-neutral-300 bg-white text-black font-bold text-lg rounded-full py-2"
              >
                Join Us At Bhusan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="border-b-[1px] border-gray-600"></div> */}
    </div>
  );
};

export default FilmsPage;

// import React from "react";
// import films from "../../public/assets/films.jpg";
// import film from "../../public/assets/film.jpg";

// const FilmsPage = () => {
//   return (
//     <div className="w-full h-full text-white bg-black">
//       {/* Hero Section */}
//       <div className="relative bg-cover bg-center w-full h-[40vh] lg:h-[50vh]">
//         <img src={films} className="w-full h-full object-cover" alt="Hero" />
//         <h1 className="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-black text-4xl md:text-6xl font-extrabold px-10 ">
//           My Films
//         </h1>
//       </div>

//       {/* Films Title */}
//       <div className="py-10 text-center"> 
//         <h1 className="text-3xl lg:text-4xl font-semibold">All Time Films</h1>
//       </div>

//       {/* Film Card Container */}
      
//     </div>
//   );
// };

// export default FilmsPage;
