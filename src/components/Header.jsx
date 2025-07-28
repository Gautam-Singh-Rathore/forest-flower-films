import React from "react";
import logo from "../../public/assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-black w-full h-[10vh] lg:h-[14vh] flex justify-between items-center lg:px-40 transition-all">
      {/* Logo  */}
      <div className="h-full w-max flex justify-center items-center">
        <div className=" h-full flex items-center justify-center">
          <img src={logo} alt="" className="h-[30%] lg:h-[50%] w-full cursor-pointer" onClick={()=> navigate("/")}/>
        </div>
      </div>
      {/* Nav Links  */}
      <div className="text-white hidden lg:flex">
        <ul className="flex justify-center items-center gap-8 text-sm text-gray-200 ">
          <li className="hover:text-gray-400 cursor-pointer" onClick={()=> navigate("/")}>Home</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={()=> navigate("/films")}>Films</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={()=> navigate("/recognition")}>Recognition</li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={()=> navigate("/about")}>About</li>
          {/* <li className="hover:text-gray-400 cursor-pointer" onClick={()=> navigate("/about")}>
            Screening Events
          </li> */}
          <li className="hover:text-gray-400 cursor-pointer" onClick={()=> navigate("/media")}>Media</li>
        </ul>
      </div>

      {/* Mobile Hamburger  */}
      <div className="flex lg:hidden pr-4 text-gray-300 ">
        <GiHamburgerMenu size={25} onClick={() => setIsVisible(true)} />
      </div>

      {/* Mobile Menu  */}
      {isVisible && 

        <div className=" w-full h-full absolute z-10 bg-black top-0 left-0 ">
            <div className=" text-white  relative w-full  ">
              <RxCross1 size={25} onClick={()=> setIsVisible(false)} className="absolute right-4 top-[35px] "/>
            </div>
            <div className="text-white list-none font-bold flex flex-col justify-start pt-36 items-center gap-6 w-full h-full text-2xl">
                <li onClick={()=> {navigate("/"); setIsVisible(false)}}>Home</li>
                <li onClick={()=> {navigate("/films"); setIsVisible(false)}}>Films</li>
                <li onClick={()=> {navigate("/about"); setIsVisible(false)}}>About</li>
                <li onClick={()=> {navigate("/recognition"); setIsVisible(false)}}>Recognition</li>
                <li onClick={()=> {navigate("/media"); setIsVisible(false)}}>Media</li>
            </div>


        </div>

      }
    </div>
  );
};

export default Header;


