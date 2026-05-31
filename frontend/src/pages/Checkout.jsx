import { useState, useEffect } from "react";

function Checkout({ cart = [], setCart }) {

  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 GET USER (LOGIN CHECK)
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (!user) {
      alert("Please login first");
      window.location.href = "/login";
    }
  }, []);

  // 💰 TOTAL PRICE
  const getTotal = () => {
    return (cart || []).reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
      0
    );
  };

  // 🚀 PLACE ORDER
  const placeOrder = async () => {

    // empty cart check
    if (!cart || cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    // address check
    if (!address.trim()) {
      alert("Enter address");
      return;
    }

    // login check
    if (!user) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user: JSON.stringify(user), // 🔐 important
        },
        body: JSON.stringify({
          items: cart,
          total: getTotal(),
          address,
        }),
      });

      const data = await response.json();
      console.log("ORDER RESPONSE:", data);

      alert("Order placed successfully 🚀");

      // clear cart
      setCart([]);
      setAddress("");

      // redirect success page
      window.location.href = "/success";

    } catch (error) {
      console.log(error);
      alert("Order failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-orange-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-5">Checkout</h1>

      {/* CART ITEMS */}
      <div className="bg-white p-5 rounded shadow mb-5">

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="flex justify-between border-b py-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>
                ₹{(item.price || 0) * (item.quantity || 0)}
              </span>
            </div>
          ))
        )}

        <h2 className="font-bold mt-3">
          Total: ₹{getTotal()}
        </h2>

      </div>

      {/* ADDRESS */}
      <textarea
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-3 border rounded mb-4"
      />

      {/* BUTTON */}
      <button
        onClick={placeOrder}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>

    </div>
  );
}

export default Checkout;