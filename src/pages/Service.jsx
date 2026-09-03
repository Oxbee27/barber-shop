 import {SERVICES, ADD_ONS} from '../components/data/barberData.js'
import  React from 'react'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

import {useState} from "react"

export default function ServicePricingList({onSelectService}) {
    const [activecategory, setactivecategory] = useState('services')
    const handleCategoryChange = (category) => {
        setactivecategory(category)
    }

 const items = activecategory === 'services' ? SERVICES : ADD_ONS

  return (
    <div id='services' className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Service and Pricing</h2>
<div>

<button onClick={() => handleCategoryChange("services")}>
    { activecategory === "services" ? (
        <span className="bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300">
            Services
        </span>
    ) : (
        <span className="bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-800 transition duration-300">
            Services
        </span>
    )}
</button>
   
<button onClick={() => handleCategoryChange("add-ons")}>
    { activecategory === "add-ons" ? (
        <span className="bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300">
            Add-Ons
        </span>
    ) : (
        <span className="bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-neutral-800 transition duration-300">
            Add-Ons
        </span>
    )}
</button>

</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{items.map((item) => (
    <div key={item.id} className="bg-neutral-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-400 mb-4">{item.description}</p>
        <p className="text-lg font-bold text-[#d4af37]">${item.price}</p>
        {onSelectService && (
    <div className="mt-12 text-center">
        <button
            onClick={() => onSelectService(item.id)}
            className="inline-flex items-center bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300" >
            Select Service
            </button>
</div>

)}
    </div>
))}

             
        </div>
        <div className="mt-12 text-center">
          <Link to="/"
          className="inline-flex items-center bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300">
          Back to Home Page
<FaChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}  

     