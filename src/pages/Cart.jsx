const Cart = ({ cart, setCart, products, handleCheckout }) => {
 
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: 599,
          quantity: 1,
        },
      ]);
    }
  };

  // const handleCheckout = () => {
  //   if (cart.length === 0) {
  //     alert("Your cart is empty");
  //     return;
  //   }

  //   alert(`Checkout successful! Total: ₹${Subtotal}`);
  // };

 
  const IncreaseQTY = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const DecreaseQTY = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  };
  
  const Subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
 
  const TotalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
  <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
       
        <div className="md:col-span-3 lg:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 pb-5 md:pb-0 md:pr-4 lg:pr-6">
          <h3 className="text-orange-500 text-sm font-medium mb-4 sm:mb-5">
            Recommended
          </h3>

          <div className="flex flex-wrap md:flex-col gap-x-5 gap-y-3 md:space-y-4 md:gap-0">
            <p className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">
              Breakfast Box
            </p>

            <p className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">
              Lunch Box
            </p>

            <p className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">
              Combo Box
            </p>

            <p className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer">
              Biriyani Box
            </p>
          </div>
        </div>
        
        <div className="md:col-span-9 lg:col-span-6">
          {products.length > 0 ? (
            products.slice(0, 1).map((product) => (
              <div
                key={product.id}
                className="flex flex-col-reverse sm:flex-row gap-5 sm:gap-6 lg:gap-8"
              >

                <div className="flex-1">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>

                  <p className="text-gray-500 mt-2 sm:mt-3">
                    ₹599
                  </p>

                  <p className="text-sm text-gray-400 mt-4 sm:mt-5 leading-6">
                    Brunch: One meal to rule them all! Grab this mega saver
                    combo with your choice of 2 veg wraps, Aloo Paratha (2
                    pcs), chole and Curd lunchbox and 2 choco lava cakes. This
                    is just bliss on a plate!
                  </p>
                </div>


                <div className="relative w-fit mx-auto sm:mx-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-32
                      h-32
                      sm:w-36
                      sm:h-36
                      object-cover
                      rounded-xl
                    "
                  />

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="
                      absolute
                      -bottom-4
                      left-1/2
                      -translate-x-1/2
                      bg-white
                      text-green-600
                      font-medium
                      px-5
                      py-2
                      rounded-lg
                      shadow-md
                      border
                      border-gray-100
                      hover:bg-gray-50
                      whitespace-nowrap
                    "
                  >
                    Add +
                  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center py-12 sm:py-20">
              Search for a meal
            </div>
          )}
        </div>


        
        <div className="md:col-span-12 lg:col-span-4  border-gray-200 pt-6 lg:pt-0 lg:pl-6 xl:pl-8">

          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Cart
            </h2>

            <p className="text-sm text-gray-500">
              {TotalItems} Items
            </p>
          </div>


          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm">
              Your cart is empty
            </p>
          ) : (
            <div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex
                    flex-wrap
                    sm:flex-nowrap
                    gap-3
                    sm:gap-4
                    mb-6
                    sm:mb-7
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-16
                      h-16
                      sm:w-20
                      sm:h-20
                      rounded-xl
                      object-cover
                      shrink-0
                    "
                  />


                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400">
                      from{" "}
                      <span className="text-orange-500">
                        Lunch box
                      </span>
                    </p>

                    <h3 className="text-sm font-medium text-gray-800 mt-2">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      ₹{item.price}
                    </p>
                  </div>


                  <div className="flex items-center gap-3 self-center">
                    <button
                      onClick={() => DecreaseQTY(item.id)}
                      className="text-gray-500 px-1"
                    >
                      −
                    </button>

                    <span className="text-sm">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => IncreaseQTY(item.id)}
                      className="text-gray-500 px-1"
                    >
                      +
                    </button>
                  </div>

                </div>
              ))}


              <div className=" border-gray-200 ">

                <div className="flex justify-between gap-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold">
                      Subtotal
                    </h2>

                    <p className="text-xs text-gray-400 mt-2">
                      Extra charges may apply
                    </p>
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold ">
                    ₹{Subtotal}
                  </h2>
                </div>


                <button
                  onClick={handleCheckout}
                  className="
                    w-full
                    mt-6
                    sm:mt-7
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-semibold
                    py-3
                    sm:py-4
                    rounded-xl
                    transition
                  "
                >
                  Checkout
                </button>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  </div>
);
};

export default Cart;
