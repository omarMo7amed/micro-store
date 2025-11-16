import { ShoppingCart, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth, logout } from "x/auth";
import MiniCart from "cart/MiniCart";

export default function Header() {
  const [openCart, setOpenCart] = useState(false);
  const loggedIn = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = "http://localhost:3005/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="w-full sticky top-0 bg-amber-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-xl font-semibold text-gray-900">
          Micro<span className="text-amber-800">Front</span>
        </h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="text-gray-900 hover:text-amber-800 transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/cart"
                className="text-gray-900 hover:text-amber-800 transition-colors duration-200"
              >
                Cart
              </a>
            </li>
          </ul>

          {/* Cart Button */}
          <div className="relative">
            <button
              onClick={() => setOpenCart((open) => !open)}
              className="text-gray-900 hover:text-amber-800 transition-colors duration-200 p-2"
              aria-label="Shopping Cart"
              type="button"
            >
              <ShoppingCart size={24} />
            </button>

            {/* Mini Cart Dropdown */}
            {openCart && <MiniCart />}
          </div>

          {/* Logout Button */}
          {loggedIn && (
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-900 hover:text-amber-800 transition-colors duration-200 p-2"
              aria-label="Logout"
              type="button"
            >
              <LogOut size={20} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
