import React, { useRef } from "react";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     
        "template_rbh6o78",    
        formRef.current,
        "e51q4UsC28CfLxfrN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="border-t-[1px] border-gray-800  bg-black w-full text-white min-h-screen px-4 lg:px-[20vw] md:px-[10vw] flex flex-col justify-around gap-10">
      {/* Follow me  */}
      <div className=" flex flex-col lg:flex-row gap-8 lg:gap-0 pt-4  justify-between items-center">
        <p className="text-3xl lg:text-4xl font-extrabold">Follow Us.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 w-full justify-between items-center">
        {/* Email and phone */}
        <div className="py-10 w-full md:w-[45%] flex flex-col gap-5 text-sm sm:text-base text-gray-300 px-6 lg:px-0">
          <div className="space-y-1">
            <p className="font-semibold text-base sm:text-lg">Rahul Saxena</p>
            <p className="text-gray-400">producer@forestflowerfilms.com</p>
            <p className="text-gray-400">rahul@forestflowerfilms.com</p>
            <p className="text-gray-400">9460144678</p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-base sm:text-lg">Ajender Singh</p>
            <p className="text-gray-400">ajender@forestflowerfilms.com</p>
            <p className="text-gray-400">7895817157</p>
          </div>

          <div className="flex items-center gap-6 text-xl sm:text-2xl mt-4">
            <a
              href="https://www.facebook.com/people/Forest-Flower-Films/61560437582794/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-500 transition" />
            </a>

            <a
              href="https://www.instagram.com/forest_flower_films/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="hover:text-pink-500 transition" />
            </a>

            <a
              href="https://x.com/Thekabootari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="hover:text-white transition" />
            </a>

            <a
              href="https://www.youtube.com/@ForestFlowerfilms/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube className="hover:text-red-600 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/nidhi-saxena-417302198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>

        {/* Subscribe form */}
        <div className=" w-full md:w-[45%] px-10 flex flex-col gap-6 ">
          <h1 className="text-center font-semibold text-lg">Subscribe Form</h1>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="first_name" className="block text-white mb-4">
                Name *
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-4">
                Email *
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white mb-4">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                className="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                name="message"
                className="w-full border-b-2 border-gray-400 bg-transparent text-white focus:outline-none  placeholder-white placeholder-opacity-50"
                rows="4"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 bg-white text-black font-semibold rounded hover: focus:ring-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* End bar */}
      <div className="text-white text-center">
        Forest Flower Films © - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
