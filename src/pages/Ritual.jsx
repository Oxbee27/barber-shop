 import { RITUAL_STEPS, ASSETS_IMAGES,  TESTIMONIALS } from "../components/data/barberData";

 export default function Ritual() {
   return (
     <section id="ritual" className="py-20 relative bg-[#0e0f14] border border-white/5">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-10">
           <span className="bg-[#d4af37] uppercase text-sm">Ritual</span>
           <p className="text-4xl font-bold mb-4">Our Signature Ritual</p>
           <p className="text-lg text-gray-300">
             Experience the art of grooming with our signature ritual, designed to elevate your style and leave you feeling refreshed.
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between mt-10 ">
           {RITUAL_STEPS.map((step) => (
             <div key={step.step} className="bg-neutral-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
               <h3 className="text-xl font-semibold mb-2">{step.step}. {step.title}</h3>
               <p className="text-gray-400">{step.description}</p>
             </div>
           ))}
         </div>
<div className="mt-12 text-center relative bg-[#0e0f14] border border-white/5 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 sm:p-12 p-8">
<div className="grid grid-col-1 lg:grid-cols-2 gap-8 items-center mt-10 ">






</div>




</div>
         <div className="mt-12 text-center">
           <img src={ASSETS_IMAGES.ritualImage} alt="Ritual" className="mx-auto rounded-lg shadow-md" />
         </div>

         <div className="mt-12 text-center">
           <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
           {TESTIMONIALS.map((testimonial, index) => (
             <div key={index} className="bg-neutral-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
               <p className="text-gray-400">"{testimonial.quote}"</p>
               <p className="text-gray-400 mt-2">- {testimonial.name}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }  