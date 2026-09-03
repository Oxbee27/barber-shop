
import { useNavigate, useParams } from "react-router-dom";
import { BARBERS } from "../components/data/barberData.js";


export default function Appointment() {
  const { barberId } = useParams();
  const navigate = useNavigate();

  const selectedBarber = BARBERS.find((barber) => barber.id === barberId);

  if (!selectedBarber) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-red-500">Barber Not Found</h2>
        <p className="mt-4 text-gray-400">The selected barber does not exist.</p>
        <button
          onClick={() => navigate("/barbers")}
          className="mt-6 inline-flex items-center bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300"
        >
          Back to Barbers
        </button>
      </div>
    );
  } 

  const handleBookAppointment = () => {
    
    console.log(`Booking appointment with ${selectedBarber.name}`);
    navigate("/");
  };

  return(
<section  id="barbers" className="py-20 relative bg-[#0e0f14] border border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-10">

<span className="bg-[#d4af37] uppercase text-sm">Appointment</span>


<p className="text-4xl font-bold mb-4">confirm your Barber</p>


<p className="text-lg text-gray-300">
  You have selected the following barber:
</p>
</div>
<div className="bg-neutral-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
<img src={selectedBarber.avatar} alt={selectedBarber.avatar} className="w-full h-48 object-cover rounded-md mb-4" />
    <h3 className="text-xl font-semibold mb-2">{selectedBarber.name}</h3>
    <p className="text-gray-400 mb-4">{selectedBarber.title}</p>
    <p className="text-lg font-bold text-[#d4af37]">{selectedBarber.experience} years of experience</p>
    <p className="text-gray-400">{selectedBarber.reviewsCount} reviews</p>
    <p className="text-gray-400">{selectedBarber.bio}</p>
    <p className="text-gray-400">{selectedBarber.speciality}</p>
    <p className="text-gray-400">{selectedBarber.availabilityToday}</p>


</div>

<button onClick={handleBookAppointment} className="mt-6 inline-flex items-center bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300">
  Book Appointment
</button>   

<button onClick={() => navigate("/barbers")} className="mt-6 inline-flex items-center bg-[#d4af37] text-black py-2 px-4 rounded-md hover:bg-[#c09e2d] transition duration-300 ml-4">
  Back to Barbers
</button>
</div>
</section>


  )

}