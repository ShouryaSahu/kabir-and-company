
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function goToSection(id) {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">
            KABIR AND COMPANY
          </h1>
          <p className="mt-1 text-[10px] tracking-widest text-gray-500 sm:text-xs">
            FMCG PRODUCTS WHOLESALE SUPPLIER
          </p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#163a63]"
          >
            Home
          </Link>

          <button
            onClick={() => goToSection("products")}
            className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#163a63]"
          >
            Our Products
          </button>

          <button
            onClick={() => goToSection("contact")}
            className="text-sm text-gray-700 transition-colors duration-200 hover:text-[#163a63]"
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-2xl text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="animate-fade-up border-t border-gray-200 bg-white px-5 py-3 md:hidden">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm text-gray-700 hover:text-[#163a63]"
          >
            Home
          </Link>

          <button
            onClick={() => goToSection("products")}
            className="block w-full py-3 text-left text-sm text-gray-700 hover:text-[#163a63]"
          >
            Our Products
          </button>

          <button
            onClick={() => goToSection("contact")}
            className="block w-full py-3 text-left text-sm text-gray-700 hover:text-[#163a63]"
          >
            Contact
          </button>
        </nav>
      )}
    </header>
  );
}
