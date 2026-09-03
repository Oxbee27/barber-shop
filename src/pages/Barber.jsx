import {FaStar, FaCut, FaAward, FaCalenderAlt, FaClock, FaChevronRight} from "react-icons/fa"
import {BARBERS} from "../components/data/barberData.js"

export default function MasterBarber({onSelectBarber}) {  
  return (
<section  id="barbers" className="py-20 relative bg-[#0e0f14] border border/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between mt-10 ">
<div>
<div>
<FaAward className="text-[#d4af37] text-4xl mb-4" />

<span>Master Artisan</span>

</div>

<h2>
  the hand behind the {""}
  <span className="text-[#d4af37]">craft</span>
</h2>

<p className="text-sm text-base text=[#9acfac] max-w-xl">
  each master barber at our studio is a seasoned professional, blending traditional techniques with contemporary styles to deliver unparalleled grooming experiences. Their expertise ensures every cut, shave, and style is executed with precision and care, leaving clients looking and feeling their best.
</p>
</div>
<div className="flex items-center bg-[#8c8e9a]">

<span className="w-5 h-5 bg-[#22c55e] rounded-full" />

<span>

  Accepting appointment today?
</span>

</div>

<div>
{BARBERS.map((barber) => (
  <div key={barber.id} className="bg-neutral-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
    <img src={barber.image} alt={barber.name} className="w-full h-48 object-cover rounded-md mb-4" />
    <h3 className="text-xl font-semibold mb-2">{barber.name}</h3>
    <p className="text-gray-400 mb-4">{barber.title}</p>
    <p className="text-lg font-bold text-[#d4af37]">{barber.experience} years of experience</p>
    <p className="text-gray-400">{barber.reviewsCount} reviews</p>
    <p className="text-gray-400">{barber.bio}</p>
    <p className="text-gray-400">{barber.speciality}</p>
    <p className="text-gray-400">{barber.availabilityToday}</p>
    
    {onSelectBarber && (
      <div className="mt-12 text-center">
        <button id={barber.id}
          onClick={() => onSelectBarber(barber.id)}
          className="inline-flex items-center bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300"
        >
          Select Barber
        </button>
      </div>
    )}


    
  </div>
))}




</div>

</div>
<div className="mt-12 text-center">
  <Link to="/barbers"
    className="inline-flex items-center bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300"
  >
    View All Barbers
    <FaChevronRight className="ml-2" />
  </Link>


</div>






</div>


</section>



  )

  }