// import React from "react";
// import recog from "../../public/assets/recog.jpg";
// import busan from "../../public/assets/busann.png";
// // import busan from "../../public/assets/busan.jpg"

// const RecognitionPage = () => {
//   return (
//     <div className="w-full h-full text-white bg-black min-h-screen">
//       <div className="relative bg-cover bg-center w-full h-full lg:px-[10vw] md:px-[10vw]">
//         <img src={recog} className="h-[30vh] md:h-auto object-cover" />
//         <h1 className="absolute top-[35%] text-black text-[60px] font-extrabold px-10 hidden md:flex">
//           Our Recognitions{" "}
//         </h1>
//       </div>
//       {/* Card Container */}
//       <div className="flex justify-center items-center mt-10 px-6">
//         {/* Card */}
//         <div className="w-full md:w-[50vw] flex flex-col bg-gradient-to-r  rounded-2xl shadow-lg overflow-hidden">
//           {/* Card Image */}
//           <div className="w-full">
//             <img
//               src={busan}
//               className="w-full object-contain rounded-2xl"
//               alt="Busan International Film Festival"
//             />
//           </div>

//           {/* Card Content */}
//           <div className="p-6 flex flex-col justify-center items-center">
//             <p className="text-lg md:text-xl font-bold text-center mb-4 text-gray-100">
//               World Premiere at the 29th Busan International Film Festival
//             </p>
//             <p className="text-sm md:text-base text-gray-400 text-center mb-6">
//               Witness a moment of pride as we take our creative vision to one of
//               the most prestigious film festivals in the world.
//             </p>

//             {/* Buttons */}
//             <div className="flex gap-5">
//               <button
//                 onClick={() =>
//                   (window.location.href =
//                     "https://www.biff.kr/eng/html/program/prog_view.asp?idx=76031&c_idx=401&sp_idx=&QueryStep=2")
//                 }
//                 className=" text-black bg-white px-6 py-3 rounded-lg text-lg font-medium  transition"
//               >
//                 Read More
//               </button>
//               <button
//                 onClick={() =>
//                   (window.location.href =
//                     "https://www.youtube.com/watch?v=kev8wZdZqIo")
//                 }
//                 className=" text-black bg-white px-6 py-3 rounded-lg text-lg font-medium  transition"
//               >
//                 Watch Here
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecognitionPage;

import React from "react";
import recog from "../../public/assets/recog.jpg";
import busan from "../../public/assets/busann.png";
// import busan from "../../public/assets/busan.jpg"

const RecognitionPage = () => {
  return (
    <div className="w-full h-full text-white bg-black min-h-screen">
      <div className="relative bg-cover bg-center w-full h-full lg:px-[10vw] md:px-[8vw] sm:px-[5vw]">
        <img src={recog} className="h-[30vh] md:h-auto object-cover w-full" />
        <h1 className="absolute top-[35%] text-black text-[60px] font-extrabold px-10 hidden md:block">
          Our Recognitions{" "}
        </h1>
      </div>
      {/* Card Container */}
      <div className="flex justify-center items-center mt-10 px-6">
        {/* Card */}
        <div className="w-full sm:w-[90vw] md:w-[60vw] lg:w-[50vw] flex flex-col bg-gradient-to-r rounded-2xl shadow-lg overflow-hidden">
          {/* Card Image */}
          <div className="w-full">
            <img
              src={busan}
              className="w-full object-cover rounded-2xl"
              alt="Busan International Film Festival"
            />
          </div>

          {/* Card Content */}
          <div className="p-6 flex flex-col justify-center items-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 text-gray-100">
              World Premiere at the 29th Busan International Film Festival
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center mb-6">
              Witness a moment of pride as we take our creative vision to one of
              the most prestigious film festivals in the world.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.biff.kr/eng/html/program/prog_view.asp?idx=76031&c_idx=401&sp_idx=&QueryStep=2")
                }
                className="w-full sm:w-auto text-black bg-white px-6 py-3 rounded-lg text-lg font-medium transition"
              >
                Read More
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.youtube.com/watch?v=kev8wZdZqIo")
                }
                className="w-full sm:w-auto text-black bg-white px-6 py-3 rounded-lg text-lg font-medium transition"
              >
                Watch Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionPage;

