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
    <div className="bg-black w-full text-white h-screen px-4 lg:px-[20vw] md:px-[10vw] flex flex-col justify-around">
      {/* Follow me  */}
      <div className=" flex flex-col lg:flex-row gap-8 lg:gap-0   justify-between items-center">
        <p className="text-3xl lg:text-4xl font-extrabold">Follow Me.</p>
        <div className="flex justify-between gap-8 text-2xl lg:text-3xl">
          <FaFacebook onClick={()=> window.location.href="https://www.facebook.com/people/Forest-Flower-Films/61560437582794/" } className="cursor-pointer"/>
          <RiInstagramFill onClick={()=>window.location.href="https://www.instagram.com/forest_flower_films/" } className="cursor-pointer"/>
          <FaSquareXTwitter onClick={()=>window.location.href= "https://x.com/Thekabootari" } className="cursor-pointer"/>
          <IoLogoYoutube onClick={()=> window.location.href="https://www.youtube.com/@ForestFlowerfilms/videos" } className="cursor-pointer"/>
          <BsLinkedin onClick={()=> window.location.href="https://www.linkedin.com/in/nidhi-saxena-417302198/" } className="cursor-pointer"/>
        </div>
      </div>

      {/* Email and phone  */}
      <div className="flex flex-col gap-4 text-sm lg:text-lg text-gray-300 px-10 lg:px-0">
        <p>+91-7895817157</p>
        <p>+91-9460144678</p>
        <p>producer@forestflowerfilms.com</p>
      </div>
      {/* End bar  */}
      <div className="text-white text-center">
        Forest Flower Films © - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
