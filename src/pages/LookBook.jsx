import { LOOKBOOK_ITEMS } from "../components/data/barberData";
import { useState } from "react";

export default function LookBook() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(LOOKBOOK_ITEMS.map((item) => item.category))];

  const filteredItems =
    selectedCategory === "All"
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="lookbook" className="py-20 relative bg-[#0e0f14] border border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="bg-[#d4af37] uppercase text-sm">LookBook</span>
          <p className="text-4xl font-bold mb-4">Our Signature Styles</p>
          <p className="text-lg text-gray-300">
            Explore our collection of signature hairstyles and grooming styles that define our brand.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                selectedCategory === category
                  ? "bg-[#d4af37] text-black"
                  : "bg-neutral-800 text-gray-300 hover:bg-[#22c55e]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-neutral-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   