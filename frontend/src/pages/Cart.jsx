import { Link, useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      localStorage.setItem("redirectAfterLogin", "/checkout");
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-orange-100 p-8">

      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
        🛒 Your Cart
      </h1>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">

        {cart.length === 0 ? (
          <div className="text-center">

            <h2 className="text-2xl font-semibold mb-4">
              Cart is Empty
            </h2>

            <Link
              to="/menu"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-600">
                    Price: ₹{item.price}
                  </p>

                  <p className="text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="text-red-500 font-bold text-lg">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6">

              <h2 className="text-2xl font-bold">
                Total Amount
              </h2>

              <h2 className="text-3xl font-bold text-red-500">
                ₹{totalPrice}
              </h2>

            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-xl hover:bg-green-700"
            >
              Proceed to Checkout
            </button>

            <div className="text-center mt-4">
              <Link
                to="/menu"
                className="text-red-500 font-semibold hover:underline"
              >
                Continue Shopping
              </Link>
            </div>

          </>
        )}

      </div>

    </div>
  );
}

export default Cart;