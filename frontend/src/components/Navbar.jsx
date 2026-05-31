import { Link } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <nav className="bg-red-500 text-white px-6 py-4">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-center md:text-left">
          Pizza Palace
        </h1>

        {/* Menu */}

        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-lg items-center mt-4 md:mt-0">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/cart">
              Cart ({cart.length})
            </Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;