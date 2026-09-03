import { Link } from "react-router-dom";
import {  FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import React from "react";

function Header() {
 
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0d10] py-4 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2"
             onClick={() => setMenuOpen(false)}
          >
            <img
              src="/Gemini_Generated_Image_2f98w2f98w2f98w2.jpeg"
              alt="Barber Shop"
              className="w-10 h-10 sm:w-10 sm:h-10 rounded-full"
            />

            <p
              className="
      block
          
      px-4
      sm:px-6
      py-2
      rounded-lg
      font-medium
      text-sm
      sm:text-base
      hover:text-[#d4af37]/30
       text-[#d4af37]
      transition
      whitespace-nowrap
      bg-white/10
    "
            >
              BarberShop
            </p>
          </Link>
        </div>

        <nav className=" hidden md:block w-full md:w-auto">
          <ul
            className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            sm:gap-5
            md:gap-6
          "
          >
            <li>
              <Link
                to="/services"
                className="
      relative
      flex
      items-center
      justify-center
      p-2
      rounded-lg
      hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
    "
              >
                <span>service and pricing</span>
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="
                  flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                  hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
                "
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/LookBook"
                className="
                  flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                  hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
                "
              >
                <span>lookBook</span>
              </Link>
            </li>

            <li>
              <Link
                to="/ritual"
                className="
                  flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                 hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
                "
              >
                <span>my ritual</span>
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="
                  flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                  hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
                
                "
              >
                <span>contact</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800 p-2 bg-black"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4 bg-black">
            <div className="flex flex-col gap-4">
              <div
                className="
              flex
              items-center
              border
              border-gray-300
              rounded-lg
              px-3
              py-2
              w-full
            "
              >
                <nav className="w-full md:w-auto">
                  <ul
                    className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            sm:gap-5
            md:gap-6
          "
                  >
                    <li>
                      <Link
                        to="/services"
                        className="
      relative
      flex
      items-center
      justify-center
      p-2
      rounded-lg
      hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
    "
                      >
                        <span>service and pricing</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/"
                        className="
                  flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                  hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
                "
                      >
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lookbook"
                        className="
                  flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                  hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
                "
                      >
                        <span>lookBook</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/ritual"
                        className="
                  flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                 hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
                "
                      >
                        <span>my ritual</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contact"
                        className="
                  flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                  hover:text-[#d4af37]/30
                  text-[#d4af37]
                  capitalize
                
                "
                      >
                        <span>contact</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
