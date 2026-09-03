import { useState } from "react";
import Cart from "./Cart";
import SecureCheckout from "./Secure";

const Restaurant = () => {
  const [products, setProducts] = useState([]);
  const [query, setquery] = useState("");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("search"); 
  const [checkoutType, setCheckoutType] = useState("schedule"); 

  const handleSearch = async () => {
    if (!query.trim()) {
      return;
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`,
      );

      const data = await response.json();

      setProducts(data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  // Cart items are expected as { id, qty } — SecureCheckout re-fetches full
  // product details for each id, so we only need to track id + quantity here.
  // `type` tells checkout which tab to open on: "schedule" for a one-off
  // order, "subscription" for a recurring plan.
  const handleCheckout = (type = "schedule") => {
    if (cart.length === 0) return;
    setCheckoutType(type);
    setPage("checkout");
  };

  const handlePlaceOrder = () => {
    // hook this up to your order-submission API when ready
    setProducts([]);
    setCart([]);
    setPage("search");
  };

  if (page === "checkout") {
    return (
      <SecureCheckout
        cart={cart}
        onBack={() => setPage("search")}
        onPlaceOrder={handlePlaceOrder}
        initialOrderType={checkoutType}
      />
    );
  }

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-8">
   
      <h1
        className="
          flex
          justify-center
          text-center
          uppercase
          text-2xl
          sm:text-3xl
          font-semibold
          break-words
          py-4
        "
      >
        {query}
      </h1>


      
      <div className="w-full">

        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-5
            md:gap-10
            flex-wrap
            justify-around
            bg-black
            rounded-xl
            border-2
            border-gray-400
            p-4
            md:p-6
          "
        >

          {products.length === 0
            ? ""
            : products.slice(0, 1).map((product) => {

                return (
                  <div
                    key={product.id}
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      gap-5
                      text-white
                      w-full
                      items-center
                      sm:items-start
                    "
                  >
                  
                    <div
                      className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
                        sm:gap-5
                        w-full
                        md:w-auto
                      "
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          h-28
                          w-28
                          sm:h-32
                          sm:w-32
                          rounded-full
                          object-cover
                          mx-auto
                          sm:mx-0
                          shrink-0
                        "
                      />

                      <div className="text-center sm:text-left">

                        <h2 className="text-lg sm:text-xl font-semibold">
                          LunchBox - Meals and Thalis
                        </h2>

                        <p className="mt-1 text-gray-300">
                          {product.cuisine}
                        </p>
                      
                        <div
                          className="
                            flex
                            flex-wrap
                            justify-center
                            sm:justify-start
                            gap-5
                            sm:gap-10
                            md:gap-20
                            mt-4
                          "
                        >

                          <div>
                            <p>{product.rating}</p>
                            <p className="text-xs text-gray-400">
                              100+ rating
                            </p>
                          </div>

                          <div>
                            <p>
                              {product.cookTimeMinutes} mins
                            </p>

                            <p className="text-xs text-gray-400">
                              Delivery Time
                            </p>
                          </div>

                          <div>
                            <p>
                              {product.caloriesPerServing}
                            </p>

                            <p className="text-xs text-gray-400">
                              Cost for two
                            </p>
                          </div>

                        </div>

                      </div>

                    </div>


                  
                    <div
                      className="
                        rounded-xl
                        border-2
                        border-dotted
                        w-full
                        sm:w-80
                        md:w-90
                        min-h-35
                        text-white
                        border-orange-400
                        p-3
                        mx-0
                        md:mx-2
                      "
                    >

                      <h2 className="text-orange-400">
                        Offers
                      </h2>

                      <div className="flex mt-3 gap-3 items-start">

                        <img
                          src="public/Vector.png"
                          alt="image logo"
                          width={15}
                          className="shrink-0 mt-1"
                        />

                        <p className="text-sm">
                          50% off up to ₹100 | Use code TRYNEW
                        </p>

                      </div>

                      <div className="flex mt-4 gap-3 items-start">

                        <img
                          src="public/Vector.png"
                          alt="image logo"
                          width={15}
                          className="shrink-0 mt-1"
                        />

                        <p className="text-sm">
                          20% off | Use code PARTY
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

        </div>

       
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
            mt-4
            w-full
          "
        >

          <input
            type="text"
            placeholder="Enter your recipe name here "
            value={query}
            onChange={(e) => setquery(e.target.value)}
            className="
              w-full
              sm:w-80
              h-12
              px-4
              rounded-xl
             border-2
              border-gray-300
              outline-none
              border-orange-400
              text-gray-700
              placeholder-gray-400
            "
          />

          <button
            onClick={handleSearch}
            className="
              w-full
              sm:w-auto
              h-12
              px-8
              rounded-xl
              bg-orange-400
              text-white
              font-semibold
              hover:bg-orange-500
              active:scale-95
              transition
              duration-200
            "
          >
            Search
          </button>

        </div>

      </div>
    
      <div className="mt-6">

        <Cart
          cart={cart}
          setCart={setCart}
          products={products}
          handleCheckout={handleCheckout}
        />

      </div>

    </div>
  );
};

export default Restaurant;