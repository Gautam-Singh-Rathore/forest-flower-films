import React from "react";
import contact from "../../public/assets/contact.jpg";

const ContactPage = () => {
  return (
    <div className="w-full h-full text-white bg-black min-h-screen">
      <div className="relative bg-cover bg-center w-full h-full lg:px-[10vw] md:px-[10vw] ">
        {/* <img src={contact} className="h-[30vh] md:h-auto object-cover" /> */}
        <h1 className=" text-white text-[60px] font-extrabold px-10 hidden md:flex">
          Contact Us{" "}
        </h1>
        </div>
        <div className="w-full mt-6">
          <div className="flex justify-around items-start w-full">
            <div className="text-lg font-bold md:text-xl">Our Members</div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-bold md:text-xl">Rahul Saxena</p>
                <p className="text-sm md:text-lg">rahul@forestflowerfilms.com</p>
                <p className="text-sm md:text-lg">9460144678</p>
              </div>
              <div>
                <p className="font-bold md:text-xl">Ajender Singh</p>
                <p className="text-sm md:text-lg">ajender@forestflowerfilms.com</p>
                <p className="text-sm md:text-lg">7895817157</p>
              </div>
            </div>
          </div>
        </div>
      
      
    </div>
  );
};

export default ContactPage;
