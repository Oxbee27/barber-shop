import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0e0f14] text-white py-32 px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold">
          Contact
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-5">
          Get In Touch
        </h1>

        <p className="text-gray-400 text-lg">
          Your next signature cut starts here. We're here to make
          every visit exceptional.
        </p>
      </div>

    
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

   
        <div className="bg-[#15171e] border border-white/5 rounded-2xl p-8 sm:p-10">

          <h2 className="text-2xl font-semibold mb-8">
            Contact Information
          </h2>

          <div className="space-y-7">

            <div>
              <p className="text-[#d4af37] text-sm uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-gray-300">
                Jos, Nigeria
              </p>
            </div>

            <div>
              <p className="text-[#d4af37] text-sm uppercase  mb-1">
                Phone
              </p>
              <p className="text-gray-300">
                +234 7062703300
              </p>
            </div>

            <div>
              <p className="text-[#d4af37] text-sm uppercase  mb-1">
                Email
              </p>
              <p className="text-gray-300">
                hello@oxbee.com
              </p>
            </div>

            <div>
              <p className="text-[#d4af37] text-sm uppercase mb-1">
                Opening Hours
              </p>
              <p className="text-gray-300">
                Monday – Saturday
              </p>
              <p className="text-gray-400 text-sm mt-1">
                9:00 AM – 8:00 PM
              </p>
            </div>

          </div>

         
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4">
              Prefer to book directly?
            </p>

            <button className="border hover:border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-lg   transition">
              Book An Appointment
            </button>
          </div>

        </div>

       
        <div className="bg-[#15171e] border border-white/5 rounded-2xl p-8 sm:p-10">

          <h2 className="text-2xl font-semibold mb-8">
            Send A Message
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#0e0f14] border border-[#d4af37] rounded-lg px-4 py-3 outline-none transition"
              />
            </div> 

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="enter your email address"
                className="w-full bg-[#0e0f14] border  rounded-lg px-4 py-3 outline-none border-[#d4af37] transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="How can we help?"
                className="w-full bg-[#0e0f14] border border-[#d4af37] rounded-lg px-4 py-3 outline-none  transition "
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full  text-black font-semibold py-3 rounded-lg border border-[#d4af37] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}