import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-orange-100 min-h-screen flex flex-col justify-center items-center text-center px-5">

      <h1 className="text-6xl font-bold text-red-600 mb-6">
        Welcome to Pizza Palace
      </h1>

      <p className="text-xl text-gray-700 max-w-2xl mb-8">
        Delicious pizzas delivered hot and fresh to your doorstep.
      </p>

      <Link to="/menu">
        <button className="bg-red-500 text-white px-8 py-4 rounded-lg text-xl hover:bg-red-600">
          Explore Menu
        </button>
      </Link>

    </div>
  );
}

export default Home;