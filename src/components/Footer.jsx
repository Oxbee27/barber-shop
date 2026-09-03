import React from 'react';


export default function Footer() {
  return (
    <footer id="location" className="bg-black border-t border-neutral-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xl font-black uppercase mb-4">
            
            <span>Bigwig<span className="text-gold">Barber</span></span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Premium men's grooming lounge specializing in modern cuts, traditional shaves, and personalized service.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">Location & Contact</h4>
          <div className="space-y-3 text-neutral-400 text-sm">
            <p className="flex items-center gap-3">
            452 Grand Avenue, Suite 102</p>
            <p className="flex items-center gap-3"> (555) 234-5678</p>
            <p className="flex items-center gap-3">
               Mon - Sat: 9 AM - 8 PM | Sun: Closed</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase text-gold mb-4">Follow Us</h4>
          <p className="text-neutral-400 text-sm">@bigwigbarberstudio on Instagram & Facebook</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-neutral-900 pt-8 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Bigwig Barber Studio. All rights reserved.
      </div>
    </footer>
  );
}