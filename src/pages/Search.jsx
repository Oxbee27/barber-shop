import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Restaurant from "./Restaurant";

function SearchDetails() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [selectedproduct, setSelectedProduct] = useState(null);

  const query = searchParams.get("query") || "";

  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`
        );

        const data = await response.json();
        setProducts(data.recipes);
      } catch (error) {
        console.log(error);
      }
    }

    if (query) {
      getItems();
    }
  }, [query]);

  const handleImage = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      {/* Heading */}
      <h1 className="flex justify-center items-center uppercase text-2xl sm:text-3xl font-semibold px-4 py-5 text-center">
        {query}
      </h1>

      {/* Navigation */}
      <div className="flex flex-wrap gap-3 px-4 sm:px-6 md:px-10">
        <Link
          to="/dishes"
          className="rounded-xl bg-orange-400 text-white px-4 py-2 capitalize text-sm sm:text-base"
        >
          dishes
        </Link>

        <Link
          to="/restaurant"
          className="rounded-xl border-2 border-orange-400 px-4 py-2 capitalize text-sm sm:text-base"
        >
          restaurant
        </Link>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 mt-5">

        {/* Products */}
        <div
          className="
            w-full
            lg:flex-1
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-2
            xl:grid-cols-3
            gap-5
            bg-gray-100
            rounded-xl
            border-2
            border-gray-400
            p-4
            sm:p-5
          "
        >
          {products.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full py-10">
              No restaurant found
            </p>
          ) : (
            products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="
                    bg-white
                    rounded-xl
                    overflow-hidden
                    shadow-sm
                    hover:shadow-md
                    transition
                    w-full
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => handleImage(product)}
                    className="
                      w-full
                      h-48
                      sm:h-52
                      md:h-56
                      object-cover
                      cursor-pointer
                    "
                  />

                  <div className="p-4">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      {product.name}
                    </p>

                    <div className="flex justify-between gap-3 mt-3 text-xs sm:text-sm text-gray-600">
                      <p>{product.cuisine}</p>
                      <p>⭐ {product.rating}</p>
                    </div>

                    <div className="flex justify-between gap-3 mt-2 text-xs sm:text-sm text-gray-500">
                      <p>{product.cookTimeMinutes} mins</p>
                      <p>{product.caloriesPerServing} calories</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Selected product */}
        <div className="w-full lg:w-80 xl:w-96">
          {selectedproduct && (
            <div className="rounded-xl bg-pink-100 border-2 border-pink-200 overflow-hidden lg:sticky lg:top-5">
              <img
                src={selectedproduct.image}
                alt={selectedproduct.name}
                className="
                  w-full
                  h-56
                  sm:h-64
                  md:h-72
                  object-cover
                "
              />

              <div className="p-4 sm:p-5">
                <h2 className="text-lg sm:text-xl font-semibold">
                  {selectedproduct.name}
                </h2>

                <h2 className="mt-3 text-sm sm:text-base text-gray-700">
                  {selectedproduct.ingredients}
                </h2>

                <h2 className="mt-3 text-sm sm:text-base text-gray-700 leading-6">
                  {selectedproduct.instructions}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Restaurant */}
      <div className="mt-8">
        <Restaurant />
      </div>
    </>
  );
}

export default SearchDetails;