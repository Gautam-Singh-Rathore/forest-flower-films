import React from "react";
import film from "../../public/assets/film.jpg";
import image from "../../public/assets/about.jpg";

const HomeComponent = () => {
  return (
    <div className="bg-black text-white">
      {/* About  */}
      <div className="px-12 lg:px-[20vw] md:px-[10vw] py-16 ">
        <div className="w-full  flex flex-col md:flex-row  border-gray-700 rounded-3xl cursor-pointer ">
          {/* Image  */}
          <div className="w-full  p-4">
            <img src={image} alt="" className="rounded-lg" />
          </div>
          {/* Text  */}
          <div className="p-4">
            <p className="text-lg font-semibold">Nidhi SAXENA</p>
            <br />
            <p className="leading-7">
              Nidhi Saxena is an Indian screenwriter and film director who
              studied at the Film and Television Institute of India and the New
              York Film Academy. Sad Letters of an Imaginary Woman is her first
              feature film and also a recipient of the 2024 ACF Post-Production
              Fund.
            </p>
          </div>
        </div>
      </div>

      

      {/* Work  */}
      <div>
        {/* Container  */}
        <div className="px-4 lg:px-[10vw] py-10 flex justify-center flex-col items-center gap-4">
              <h1 className="text-3xl font-extrabold">Recent Work</h1>
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
                    <div className="flex flex-col  justify-between gap-4 mt-6">
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
      </div>
      
    </div>
  );
};

export default HomeComponent;
