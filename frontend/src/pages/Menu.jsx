import { useEffect, useState } from "react";
import PizzaCard from "../components/PizzaCard";

function Menu({ cart = [], setCart }) {
  const [search, setSearch] = useState("");
  const [pizzas, setPizzas] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/pizzas"
      );

      const data = await response.json();

      console.log("DATA:", data);

      setPizzas(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
      setPizzas([]);
    }
  };

  const addToCart = (pizza) => {
    const existingPizza = cart.find(
      (item) => item._id === pizza._id
    );

    if (existingPizza) {
      const updatedCart = cart.map((item) =>
        item._id === pizza._id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...pizza,
          quantity: 1,
        },
      ]);
    }

    alert("Pizza Added To Cart 🍕");
  };

  const filteredPizzas = pizzas.filter((pizza) => {
    return (
      pizza.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) &&
      (category === "All" ||
        pizza.category === category)
    );
  });

  return (
    <div className="min-h-screen bg-orange-100 p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
        Pizza Menu
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Pizza..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-2 rounded w-72"
        />
      </div>

      {/* Category */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setCategory("All")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          All
        </button>

        <button
          onClick={() => setCategory("Veg")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Veg
        </button>

        <button
          onClick={() => setCategory("Non-Veg")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Non-Veg
        </button>
      </div>

      {/* Pizza Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <PizzaCard
              key={pizza._id}
              pizza={pizza}
              addToCart={addToCart}
            />
          ))
        ) : (
          <h2 className="text-2xl font-bold">
            No Pizzas Found
          </h2>
        )}
      </div>
    </div>
  );
}

export default Menu;