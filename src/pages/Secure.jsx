import { useState, useEffect } from "react";

const addresses = [
  { id: "home", label: "Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana" },
  { id: "work", label: "Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad, Telangana" },
];

// dummyjson recipes have no price field — derive a stand-in price from
// caloriesPerServing so the checkout math has something real to work with.
// Swap this for a real price field once your backend/API provides one.
const priceFor = (product) => Math.round((product.caloriesPerServing || 200) * 1.5);

const SecureCheckout = ({ cart, onBack, onPlaceOrder, initialOrderType = "schedule" }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedAddress, setSelectedAddress] = useState("home");
  const [orderType, setOrderType] = useState(initialOrderType);
  const [subType, setSubType] = useState("monthly");
  const [plan, setPlan] = useState("3days");
  const [note, setNote] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("16:30");

  // cart is expected as an array of { id, qty } — fetch full recipe details
  // for each id from the API so the summary shows real product data.
  useEffect(() => {
    let cancelled = false;

    const fetchCartProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const results = await Promise.all(
          cart.map(async (entry) => {
            const res = await fetch(`https://dummyjson.com/recipes/${entry.id}`);
            if (!res.ok) throw new Error(`Failed to load recipe ${entry.id}`);
            const product = await res.json();
            return { ...product, qty: entry.qty };
          })
        );
        if (!cancelled) setItems(results);
      } catch (err) {
        if (!cancelled) setError("Couldn't load your cart items. Try going back and checking out again.");
        console.log(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    if (cart.length > 0) {
      fetchCartProducts();
    } else {
      setLoading(false);
    }

    return () => {
      cancelled = true;
    };
  }, [cart]);

  const itemTotal = items.reduce(
  (sum, i) => sum + priceFor(i) * Number(i.qty || 1),
  0
);

const deliveryFee = 131;
const taxes = Math.round(itemTotal * 0.02);
const total = itemTotal + deliveryFee + taxes;

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-gray-500 text-sm">
        Loading your order...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-3 text-sm">
        <p className="text-red-500">{error}</p>
        <button onClick={onBack} className="text-orange-500 underline">
          Back to cart
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
       

      <div className="max-w-5xl mx-auto px-6 py-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Secure Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
           
            <section>
              <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                <PinIcon className="text-orange-500" />
                Delivery address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addresses.map((addr) => {
                  const selected = selectedAddress === addr.id;
                  return (
                    <button
                      key={addr.id}
                      onClick={() => setSelectedAddress(addr.id)}
                      className={`text-left p-3 rounded-xl border flex gap-2 items-start transition ${
                        selected ? "border-orange-400 bg-orange-50" : "border-gray-200 bg-white"
                      }`}
                    >
                      <PinIcon className={selected ? "text-orange-500 mt-0.5" : "text-gray-400 mt-0.5"} />
                      <span className="text-xs text-gray-700 leading-snug">{addr.label}</span>
                    </button>
                  );
                })}
              </div>
            </section>
           
            <section>
              <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                <CalendarIcon className="text-orange-500" />
                Type of order
              </h2>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { id: "schedule", label: "Schedule Order" },
                  { id: "now", label: "Order Now" },
                  { id: "subscription", label: "Subscription" },
                ].map((opt) => {
                  const selected = orderType === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setOrderType(opt.id)}
                      className={`px-4 py-2 rounded-xl border text-xs font-medium transition ${
                        selected
                          ? "border-orange-400 bg-orange-400 text-white"
                          : "border-gray-200 bg-white text-gray-700"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {orderType === "schedule" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">Date of delivery</p>
                    <div className="flex items-center gap-2 border-b border-gray-200 pb-1">
                      <CalendarIcon className="text-gray-500" />
                      <input
                        type="date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className="text-xs text-gray-700 outline-none flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">Time of delivery</p>
                    <div className="flex items-center gap-2 border-b border-gray-200 pb-1">
                      <CalendarIcon className="text-gray-500" />
                      <input
                        type="time"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        className="text-xs text-gray-700 outline-none flex-1"
                      />
                      <span className="text-orange-500 text-xs">24 hrs</span>
                    </div>
                  </div>
                </div>
              )}

              {orderType === "subscription" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">Type of subscription ?</p>
                    <div className="flex gap-4">
                      {["Monthly", "Weekly", "Custom"].map((item) => {
                        const val = cus.toLowerCase();
                        const selected = subType === val;
                        return (
                          <button
                            key={item}
                            onClick={() => setSubType(val)}
                            className={`text-xs pb-1 border-b-2 ${
                              selected ? "text-orange-500 border-orange-400" : "text-gray-500 border-transparent"
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>

                    <p className="text-xs font-medium text-gray-500 mt-6 mb-2">
                      What time do you want us to deliver?
                    </p>
                    <button className="flex items-center gap-2 text-xs text-gray-700 border-b border-gray-200 pb-1">
                      <CalendarIcon className="text-gray-500" />
                      16:30
                      <span className="text-orange-500">24 hrs</span>
                    </button>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">What's the plan?</p>
                    <div className="flex gap-3">
                      {[
                        { id: "3days", label: "3-Days/Week" },
                        { id: "5days", label: "5-Days/Week" },
                      ].map((p) => {
                        const selected = plan === p.id;
                        return (
                          <button
                            key={p.id}
                            onClick={() => setPlan(p.id)}
                            className={`px-3 py-2 rounded-xl border text-xs font-medium ${
                              selected ? "border-orange-400 text-orange-500" : "border-gray-200 text-gray-700"
                            }`}
                          >
                            {p.label}
                          </button>
                        );
                      })}
                    </div>

                    <p className="text-xs font-medium text-gray-500 mt-6 mb-2">Any Note for us?</p>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Type you note here"
                      rows={3}
                      className="w-full text-xs border border-gray-200 rounded-xl p-2 resize-none outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
              )}
            </section>
          </div>
          
          <aside className="border border-gray-200 rounded-xl p-5 h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">Cart</h2>
              <span className="text-xs text-gray-400">{items.length} items</span>
            </div>

            {items.map((item) => (
              <div key={item.id} className="flex gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="flex-1">
                  <p className="text-xs text-orange-500">
                    from <span className="font-medium">{item.mealType?.[0] || "Kitchen"}</span>
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-800 pr-2">{item.name}</p>
                    <span className="text-xs text-gray-500 shrink-0">x{item.qty}</span>
                  </div>
                  <p className="text-xs text-gray-500">₹{priceFor(item)}</p>
                </div>
              </div>
            ))}

            <div className="border-t border-gray-100 pt-3 mt-2 space-y-2">
              <p className="text-xs font-medium text-gray-500">Bill details</p>
              <Row label="Item Total" value={`₹${itemTotal}`} />
              <Row label="Delivery Fee | 12.9 kms Custom Delivery time" value={`₹${deliveryFee}.00`} />
              <Row label="Taxes and Charges" value={`₹${taxes}`} />
            </div>

            <div className="flex justify-between items-center mt-3 mb-4">
              <span className="text-sm font-semibold text-gray-900">Total</span>
              <span className="text-sm font-semibold text-gray-900">₹{total.toFixed(2)}</span>
            </div>

            <button
              onClick={onPlaceOrder}
              className="w-full py-3 rounded-xl text-white text-sm font-semibold bg-orange-400 hover:bg-orange-500 active:scale-95 transition"
            >
              Proceed To Payment
            </button>
          </aside>
        </div>

        <button onClick={onBack} className="mt-8 text-xs text-gray-400 hover:text-gray-600">
          Back to cart
        </button>
      </div>
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex justify-between text-xs text-gray-600">
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

const PinIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const CalendarIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
);

export default SecureCheckout;