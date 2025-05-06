import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";

const Navbar = ({ showIntro }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className={`flex justify-between items-center rounded-xl h-16 mt-[1%] p-4 bg-white shadow text-black relative ${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
      <div className="flex items-center gap-2">
      <img className="w-10 h-10" src="fav.png" alt="Zing Logo" />
      <h1 className="text-2xl font-bold">
        {/* Wrap the text with Link as well */}
        <Link to={"/"}>Zing</Link>
      </h1>
    </div>
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
        <div className="cursor-pointer text-xl" onClick={toggleDarkMode}>
          {darkMode ? (
            <MdLightMode className="text-yellow-400" />
          ) : (
            <MdDarkMode className="text-gray-800" />
          )}
        </div>
      </div>

      <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
        <FiAlignJustify />
      </button>

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
