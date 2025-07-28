import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="border-t-[1px] border-gray-800  bg-black w-full text-white min-h-screen px-4 lg:px-[20vw] md:px-[10vw] flex flex-col justify-around gap-10">
      {/* Follow me  */}
      <div className=" flex flex-col lg:flex-row gap-8 lg:gap-0 pt-4  justify-between items-center">
        <p className="text-3xl lg:text-4xl font-extrabold">Follow Us.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 w-full justify-between items-center">
        {/* Email and phone  */}
        <div className="py-10 w-full md:w-[45%] flex flex-col gap-4 text-sm lg:text-lg text-gray-300 px-10 lg:px-0">
          <div>
            <p className="font-bold md:text-xl">Rahul Saxena</p>
            <p className="text-sm md:text-lg">rahul@forestflowerfilms.com</p>
            <p className="text-sm md:text-lg">9460144678</p>
          </div>
          <div className="mb-4">
            <p className="font-bold md:text-xl">Ajender Singh</p>
            <p className="text-sm md:text-lg">ajender@forestflowerfilms.com</p>
            <p className="text-sm md:text-lg">7895817157</p>
          </div>

          <div className="flex justify-start gap-8 text-2xl lg:text-3xl">
            <a
              href="https://www.facebook.com/people/Forest-Flower-Films/61560437582794/"
              target="blank"
            >
              <FaFacebook className="cursor-pointer " />
            </a>

            <a
              href="https://www.instagram.com/forest_flower_films/"
              target="blank"
            >
              <RiInstagramFill className="cursor-pointer " />
            </a>

            <a href="https://x.com/Thekabootari" target="blank">
              <FaSquareXTwitter className="cursor-pointer" />
            </a>

            <a
              href="https://www.youtube.com/@ForestFlowerfilms/videos"
              target="blank"
            >
              <IoLogoYoutube className="cursor-pointer " />
            </a>
            <a
              href="https://www.linkedin.com/in/nidhi-saxena-417302198/"
              target="blank"
            >
              <BsLinkedin className="cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Subscribe form  */}
        <div className=" w-full md:w-[45%] px-10 flex flex-col gap-6 ">
          <h1 className="text-center font-semibold text-lg">Subscribe Form</h1>
          <form class="space-y-6">
            <div className="">
              <label for="first_name" class="block text-white mb-4">
                Name *
              </label>
              <input
                type="text"
                name="first_name"
                class="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
              />
            </div>
            <div className="">
              <label for="email" class="block text-white mb-4">
                Email *
              </label>
              <input
                type="email"
                name="email"
                class="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
              />
            </div>

            <div className="">
              <label for="subject" class="block text-white mb-4">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                class="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
              />
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
      </div>

      {/* End bar  */}
      <div className="text-white text-center">
        Forest Flower Films © - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
