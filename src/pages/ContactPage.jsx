import React from "react";
import contact from "../../public/assets/contact.jpg";

const ContactPage = () => {
  return (
    <div className="w-full h-full text-white bg-black">
      <div className="relative bg-cover bg-center w-full h-full lg:px-[10vw] md:px-[10vw]">
        <img src={contact} className="h-[30vh] md:h-auto object-cover" />
        <h1 className="absolute top-[35%] text-black text-[60px] font-extrabold px-10 hidden md:flex">
          Contact Us{" "}
        </h1>
      </div>
      
    </div>
  );
};

export default ContactPage;
