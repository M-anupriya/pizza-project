function PizzaCard({ pizza, addToCart }) {
  const imageUrl =
    pizza.image && typeof pizza.image === "string"
      ? pizza.image.startsWith("http")
        ? pizza.image
        : `https://pizza-project-1-xosi.onrender.com${pizza.image}`
      : "https://via.placeholder.com/300";

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <img
        src={imageUrl}
        alt={pizza.name}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-2">
        {pizza.name}
      </h2>

      <p className="text-gray-600">
        ₹{pizza.price}
      </p>

      <p className="text-sm text-gray-500">
        {pizza.category}
      </p>

      <button
        onClick={() => addToCart(pizza)}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default PizzaCard;