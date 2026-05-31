import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen bg-orange-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-lg shadow-lg text-center">

        <h1 className="text-5xl text-green-600 font-bold mb-5">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Thank you for ordering from Pizza Palace.
        </p>

        <Link to="/menu">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
            Order More Pizza
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;