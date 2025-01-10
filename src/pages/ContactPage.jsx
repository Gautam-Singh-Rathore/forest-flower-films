import React from "react";
import contact from "../../public/assets/contact.jpg";

const ContactPage = () => {
  return (
    <div className="w-full h-full text-white bg-black">
      <div className="relative bg-cover bg-center w-full h-full lg:px-[10vw] md:px-[10vw]">
        <img src={contact} className="h-[30vh] md:h-auto object-cover" />
        <h1 className="absolute top-[35%] text-black text-[60px] font-extrabold px-10 hidden md:flex">
          Contact Me{" "}
        </h1>
      </div>
      {/* <div className="border-b-[1px] border-gray-600"></div> */}

      <div class="px-4 lg:px-[20vw] md:px-[10vw] mx-auto p-4 py-20">
        <form class="space-y-6">
          <div className="flex  justify-between">
            <div className="w-[45%]">
              <label for="first_name" class="block text-white mb-4">
                First Name *
              </label>
              <input
                type="text"
                name="first_name"
                class="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
              />
            </div>

            <div className="w-[45%]"> 
              <label for="last" class="block text-white mb-4">
                Last Name *
              </label>
              <input
                type="text"
                name="last"
                class="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[45%]">
              <label for="email" class="block text-white mb-4">
                Email *
              </label>
              <input
                type="email"
                name="email"
                class="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
              />
            </div>

            <div className="w-[45%]">
              <label for="subject" class="block text-white mb-4">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                class="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
              />
            </div>
          </div>

          <div>
            <label for="message" class="block text-white">
              Message
            </label>
            <textarea
              name="message"
              class="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
              rows="4"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              class="w-full py-2 bg-white text-black font-semibold rounded hover: focus:ring-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

     

      {/* <div className="border-b-[1px] border-gray-600"></div> */}
    </div>
  );
};

export default ContactPage;
