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
        <div className="px-4 lg:px-[20vw] md:px-[10vw] py-10 ">
          <h1 className="text-3xl md:text-4xl text-white text-center font-extrabold pb-8">
            Recent Work
          </h1>
          {/* Card  */}
          <div className="w-full  border-gray-700  h-max rounded-3xl flex flex-col md:flex-row cursor-pointer">
            <div className="w-full md:w-[50%] p-2">
              <p className="text-white text-lg font-bold py-2 text-center">
                Sad Letters of an Imaginary Woman
              </p>
              <img src={film} alt="" />
            </div>
            <div className="w-full md:w-[50%] p-2 leading-7">
              <p className="text-neutral-200">
                <span className="font-bold text-white">Director : </span>Nidhi
                SAXENA
              </p>
              <p className="text-neutral-200">
                <span className="font-bold text-white">Producer : </span>Nila
                MADHAB PANDA, Vimukthi JAYASUNDHRA, Ajender CHAWLA
              </p>
              <p className="text-neutral-200">
                <span className="font-bold text-white">Cast : </span> Anamika
                TIWARI, Bhadra BASU
              </p>
              <p className="font-bold text-white">About the film : </p>
              <p className="text-neutral-200">
                Living a life tied to an old, worn-down house, Nidhi makes a
                phone call to her childhood self. “You are me,” she says. In the
                film, the protagonist moves through the house, capturing sounds
                with a boom mic and transmitting her words back to the past. In
                the place full of spirits, the interplay between past and
                present is expressed through sounds. Nidhi’s childhood memories
                are stained with the absence of her father and her mother’s
                depression, and now, as an adult, she finds herself sinking into
                the same deep depression her mother once experienced. Poetically
                portraying a woman’s inner world, this film presents a
                mother-daughter relationship tangled in love and resentment, all
                seeming to merge into a single character—the narrator. In the
                final scene, as Nidhi finally steps out of the house, the
                camera, which had been confined to the dark interior of the
                house, captures a ghostly gaze moving across an open space,
                layering the scene with deeper meaning.
              </p>
              <div className="flex flex-col gap-3 py-3">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://www.youtube.com/watch?v=YvvemSwlczw")
                  }
                  className="hover:bg-neutral-300 bg-white w-full text-black font-bold text-xl rounded-full py-2"
                >
                  Watch Trailer
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://www.biff.kr/eng/html/program/prog_view.asp?idx=76031&c_idx=401&sp_idx=&QueryStep=2")
                  }
                  className="hover:bg-neutral-300 bg-white w-full text-black font-bold text-xl rounded-full py-2 "
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
