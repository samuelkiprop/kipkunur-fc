import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const closeMobileMenu = () => {
      setShowMobileMenu(false);
    };

    document.querySelectorAll(".mobile-menu-link").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    return () => {
      document.querySelectorAll(".mobile-menu-link").forEach((link) => {
        link.removeEventListener("click", closeMobileMenu);
      });
    };
  }, []);

  return (
    <header
      className={`bg-secondary p-4 md:px-16 lg:px-24 xl:px-32 fixed top-0 left-0 right-0 z-10 ${
        showMobileMenu ? "h-max" : "h-[10vh]"
      } flex justify-center`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Kipkunur FC logo" className="h-[12.5vh]" />
          <h2 className="text-[#233654] sm:text-3xl font-bold">KIPKUNUR FC</h2>
        </div>
        <nav className="md:ml-6 lg:ml-12 hidden md:flex space-x-6">
          <ul className="flex gap-6 ">
            <li className="text-black font-semibold hover:text-primary hover:scale-110 transition duration-300">
              <a href="#">Home</a>
            </li>
            <li className="text-black font-semibold hover:text-primary hover:scale-110 transition duration-300">
              <a href="#">About</a>
            </li>
            <li className="text-black font-semibold hover:text-primary hover:scale-110 transition duration-300">
              <a href="#">Stats</a>
            </li>
            <li className="text-black font-semibold hover:text-primary hover:scale-110 transition duration-300">
              <a href="#">Players</a>
            </li>
            <li className="text-black font-semibold hover:text-primary hover:scale-110 transition duration-300">
              <a href="#">Gallery</a>
            </li>
            <li className="text-black font-semibold hover:text-primary hover:scale-110 transition duration-300">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex gap-4">
          {showMobileMenu && (
            <ul className="mobile-menu">
              <li className="mobile-menu-link">
                <a href="#">Home</a>
              </li>
              <li className="mobile-menu-link">
                <a href="#">About</a>
              </li>
              <li className="mobile-menu-link">
                <a href="#">Stats</a>
              </li>
              <li className="mobile-menu-link">
                <a href="#">Players</a>
              </li>
              <li className="mobile-menu-link">
                <a href="#">Gallery</a>
              </li>
              <li className="mobile-menu-link">
                <a href="#">Contact</a>
              </li>
            </ul>
          )}
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-primary hover:scale-110 transition duration-300"
          >
            {showMobileMenu ? `X` : `☰`}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
