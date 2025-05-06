import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center rounded-xl h-16 mt-[1%] p-4 bg-white shadow text-black relative">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img className="w-10 h-10" src="fav.png" alt="Zing Logo" />
        <h1 className="text-2xl font-bold">Zing</h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-4">
        <Link to="/register">
          <button className="border border-amber-200 px-4 py-1 rounded-xl text-lg font-semibold hover:text-red-600">
            Signup
          </button>
        </Link>
        <Link to="/login">
          <button className="border border-amber-200 px-4 py-1 rounded-xl text-lg font-semibold hover:text-red-600">
            Login
          </button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
        <FiAlignJustify />
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg z-50 md:hidden flex flex-col gap-2">
          <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
            Signup
          </Link>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
