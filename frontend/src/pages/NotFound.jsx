import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-orange-100 flex justify-center items-center">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-red-500">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4">
          The page you are looking for does not exist.
        </p>

        <Link to="/">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-600">
            Go Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default NotFound;