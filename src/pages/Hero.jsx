
import { FaChevronRight } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="
    
      mt-10
        bg-black

    "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 relative gap-6 sm:gap-8 lg:gap-10">
        <div className="lg:col-span-6 pt-32 sm:mt-10 relative sm:pt-[124px] lg:pt-12 justify-center items-center">
          <h1 className="text-5xl text-center capitalize sm:text-4xl md:text-5xl lg:text-6xl font-bold italic  text-[#d4af37] font-inter ">
            Bigwig barber studio
          </h1>
          <h2 className="text-3xl text-center capitalize sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            where precision meets
            <br />
            <span className="text-[#d4af37] italic font-normal capitalize">
              timeless distinction
            </span>
          </h2>
          <p className="text-[#9ca3af] text-lg sm:text-base leading-6">
            our shop is an elevated sanctuary for bespoke men's grooming. Expert
            barbering, premium grooming rituals, and tailored hair architecture
            crafted by master barbers
          </p>
               
        
      </div>
      <div className=" w-full lg:block bg-[url('/barber-interior.jpg')] bg-cover bg-center h-[400px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-white">
        <img
          src="/barber-hero.jpg"
          alt="hero-image"
          className="w-full h-[400px] sm:h-[400px] md:h-[450px] lg:h-[250px] object-cover "
       />
      </div>
</div>
<div className=" text-center flex justify-center  capitalize sm:text-2xl md:text-2xl lg:text-lg font-bold text-white  gap-5 mt-10">
            <Link to="/barbers" className="bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300">
              Reserve Appointment
            </Link>
          
            <Link to="/services"
            className="bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300 flex gap-2">
              view services 
              <FaChevronRight className="ml-2 mt-2" />
            </Link>
            </div>

      <div className=" text-center capitalize sm:text-4xl md:text-5xl lg:text-xl font-bold text-white ">
        <div className="mt-10">
        <span className="bg-[#d4af37] text-black py-2 px-4 rounded-full hover:bg-[#c09e2d] transition duration-300 ">chiar open today</span>
      </div>
<div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
      <div className=" text-center gap-2 flex capitalize sm:text-4xl md:text-2xl lg:text-xl font-bold text-white border border-[#c09e2d] transition duration-300 mt-10 py-2 px-4 rounded">
        <span>*</span>
        Best Nigerian Barber
      </div>
      <div className=" text-center gap-2 flex capitalize sm:text-4xl md:text-2xl lg:text-xl font-bold text-white border border-[#c09e2d] transition duration-300 mt-10 py-2 px-4 rounded ">
        <span>*</span>
        4.99 rating
      </div>
      <div className=" text-center gap-2 flex capitalize sm:text-4xl md:text-2xl lg:text-xl font-bold text-white border border-[#c09e2d] transition duration-300 mt-10 py-2 px-4  rounded ">
        <span>*</span>
        486 reviews
      </div>
      <div className=" text-center gap-2 flex capitalize sm:text-4xl md:text-2xl lg:text-xl font-bold text-white border border-[#c09e2d] transition duration-300 mt-10 rounded p-2 px-4 ">
        <span>*</span>
        12 years experience
      </div>
     </div> 
    </div>
    </div>
  );
}

export default Hero;
