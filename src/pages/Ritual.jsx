import {
  RITUAL_STEPS,
  barberData,
  TESTIMONIALS,
} from "../components/data/barberData";

import { FaWineGlass, FaCoffee, FaWind, FaShieldAlt } from "react-icons/fa";
import React from "react";

export default function Ritual() {
  return (
    <section
      id="ritual"
      className="py-20 relative bg-[#0e0f14] border border-white/5"     >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="bg-[#d4af37] uppercase text-sm">Ritual</span>
          <p className="text-4xl font-bold mb-4">Our Signature Ritual</p>
          <p className="text-lg text-gray-300">
            Experience the art of grooming with our signature ritual, designed
            to elevate your style and leave you feeling refreshed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between mt-10 ">
          {RITUAL_STEPS.map((step) => {
            return (
            <div
              key={step.step}
              className="bg-neutral-900 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 mb-4"
            >
              <h3 className="text-xl font-semibold mb-2">
                {step.step}. {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          )})}
        </div>
        <div className="mt-12 text-center relative bg-[#0e0f14] border border-white/5 rounded-lg p-6 hover:shadow-lg duration-300 sm:p-12 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10 ">
            <div className="lg:col-span-6">
              <span className="text-sm font-bold mb-4 text-[#d4af37]">
                private mayfair santuary
              </span>

              <h3>
                designed for calm, <br />
                <span className="text-[#d4af37]"> privacy & distinction </span>
              </h3>

              <p className="text-sm text-[#a2a4b0] leading-6">
                Step away from urban noise into our acoustic-treated private
                lounge. Relax in custom Japanese Belmont leather chairs with
                bespoke brass fixtures and an artisan spirits bar.
              </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1c24] border border-white/5">
                <FaWineGlass className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />

                <div>
                  <h4 className="text-xs font-bold text-white">
                    Single Malt Scotch Bar
                  </h4>

                  <p className="text-[11px] text-[#8c8e9a]">
                    Highland & Speyside selections
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1c24] border border-white/5">
                <FaCoffee className="w-5 h-5 text-[#d4af37] flex mt-0.5" />

                <div>
                  <h4 className="text-xs font-bold text-white">
                    Artisan Italian Espresso
                  </h4>

                  <p className="text-[11px] text-[#8c8e9a]">
                    Freshly pulled roast of the day
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1c24] border border-white/5">
                <FaWind className="w-5 h-5 text-[#d4af37] flex mt-1" />

                <div>
                  <h4 className="text-xs font-bold text-white">
                    Ozone Air Clarification
                  </h4>

                  <p className="text-[11px] text-[#8c8e9a]">
                    Hospital grade botanical filtration
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1a1c24] border border-white/5">
                <FaShieldAlt className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />

                <div>
                  <h4 className="text-xs font-bold text-white">
                    Ultra-Private Suites
                  </h4>

                  <p className="text-[11px] text-[#8c8e9a]">
                    Confidential sessions on request
                  </p>
                </div>
                  </div>
            </div>
          </div>
            
          <div className="lg:col-span-6 relative">
            <img
              src={barberData.atmosphere}
              alt="OXBEE BARBER SHOP High-End Interior Lounge"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>  
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          {TESTIMONIALS.map((testimonial, index) => {
            return (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4"
            >
              <p className="text-gray-400">"{testimonial.quote}"</p>
              <p className="text-gray-400 mt-2">- {testimonial.author}</p>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
              <p className="text-gray-400 text-sm">{testimonial.service}</p>
            </div>
          )})}
        </div>
            </div>
         </section>
  );
}
