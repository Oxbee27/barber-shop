import { barberData } from "./data/barberData.js";
import { FaChevronRight } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="
     lg:flex-row
      mt-10
        bg-black

    "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 relative gap-6 sm:gap-8 lg:gap-10">
        <div className="lg:col-span-6 pt-32 sm:mt-10 relative sm:pt-124 lg:pt-12 justify-center items-center">
          <h1 className="text-5xl text-center capitalize sm:text-4xl md:text-5xl lg:text-6xl font-bold italic  text-[#d4af37] font-inter leading-tight">
            Bigwig barber studio
          </h1>
          <h2 className="text-3xl text-center capitalize sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
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

          <div>
            <p> private Barber suites </p>
            <p>expresso and refeshment bar </p>
            <p>master barbers</p>
            <p>Hot Towel rituals</p>
          </div>

          <div>
            <button>Reserve Appointment </button>
            <button>
              view price menu
              <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full lg:block">
        <img
          src="/barber-interior.jpg"
          alt="hero-image"
          className="w-full h-[400px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover "
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span>chiar open today</span>
      </div>

      <div className="mt-4">
        <span>*</span>
        Best Nigerian Barber
      </div>
      <div className="flex items-center gap-2">
        <span>4.99</span>
      </div>
    </div>
  );
}

export default Hero;
