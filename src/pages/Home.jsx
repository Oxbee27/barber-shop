import
import { useEffect, useState } from "react";
const URL = "https://dummyjson.com/recipes";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  const [selectedproduct, setSelectedProduct] = useState(null);

  async function getItem() {
    try {
      const res = await fetch();
      const data = await res.json();

      setProducts(data.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  const handleImage = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="flex gap-115 mt-70 text-2xl mx-20 capitalize">
        <h2>Nearby restaurants</h2>
        <h2>recommended food items</h2>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-10 ">
          {products.slice(0, 8).map((product) => {
            return (
              <div
                key={product.id}
                className="bg-pink-200 rounded-xl border-2 border-pink-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => handleImage(product)}
                  className=" h-64 w-64 object-cover"
                />
                <p>{product.name}</p>
                <div className="flex gap-30">
                  <p>{product.cuisine}</p>
                  <p>{product.rating}</p>
                </div>
                <div className="flex gap-20">
                  <p>{product.cookTimeMinutes}mins</p>
                  <p>{product.caloriesPerServing} for two</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {selectedproduct && (
            <div className="rounded-xl bg-pink-100 border-2 ">
              <img
                src={selectedproduct.image}
                alt={selectedproduct.name}
                className=" flex  h-50"
              />
              <h2>{selectedproduct.name}</h2>
              <h2>{selectedproduct.ingredients}</h2>
              <h2>{selectedproduct.instructions}</h2>
            </div>
          )}
        </div>
      </div>
      <div className=" flex items-center justify-center bg-orange-400 w-full h-50 gap-5 mt-40">
        <h2 className=" py-2 px-2 text-white">
          by <span className="capitalize">restaurant</span>
        </h2>
        <input
          type="text"
          placeholder="Enter item or restaurant you are looking for"
          className="w-120 h-10 rounded-xl border-2 border-white text-white py-2 px-2"
        />

        <button className="bg-black text-white rounded-xl border-none w-40 h-10 py-2 px-2 capitalize ">
          search here
        </button>
      </div>
      <div>
        <h2 className="mt-20 mx-10">What's on your mind</h2>
        <div className="flex gap-30">
          <img
            src="/Frame 30.png"
            alt="image logo"
            className=" w-50 h-50"
          />
          <img
            src="/Frame 31 (1).png"
            alt="image logo"
            className=" w-50 h-50"
          />
          <img
            src="/Frame 32.png"
            alt="image logo"
            className=" w-50 h-50"
          />
          <img
            src="/Frame 33.png"
            alt="image logo"
            className=" w-50 h-50"
          />
          <img
            src="/Frame 34.png"
            alt="image logo"
            className=" w-50 h-50"
          />
          <img
            src="/Frame 35.png"
            alt="image logo"
            className=" w-50 h-50"
          />
        </div>
      </div>
      <div className="mt-20">
        <h2 className="mx-10 ">Personalised Recommendations</h2>
        <div className="flex gap-40 mx-5">
          <img
            src="/Frame 19 (2).png"
            alt="image logo"
            className="w-50 h-70"
          />
          <img
            src="/Frame 20 (1).png"
            alt="image logo"
            className="w-50 h-70"
          />
          <img
            src="/Frame 21.png"
            alt="image logo"
            className="w-50 h-70"
          />
          <img
            src="/Frame 22.png"
            alt="image logo"
            className="w-50 h-70"
          />
        </div>
      </div>
    </div>
  );
};

export default FetchData;
