import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800 shadow-xl">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition">
            🚀
          </div>

          <div>

            <h1 className="text-2xl font-extrabold text-white">
              ShopPilot
              <span className="text-cyan-400"> AI</span>
            </h1>

            <p className="text-xs tracking-[0.25em] text-slate-400 uppercase">
              Retail Intelligence
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10 text-slate-300 font-medium">

          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="hover:text-cyan-400 transition"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/ai-insights"
              className="hover:text-cyan-400 transition"
            >
              AI Insights
            </Link>
          </li>

          <li>
            <Link
              to="/forecast"
              className="hover:text-cyan-400 transition"
            >
              Forecast
            </Link>
          </li>

          <li>
            <Link
              to="/reports"
              className="hover:text-cyan-400 transition"
            >
              Reports
            </Link>
          </li>

        </ul>

        {/* CTA */}

        <Link
          to="/dashboard#upload-section"
          className="
          hidden
          md:flex
          items-center
          gap-2
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          shadow-lg
          hover:scale-105
          hover:shadow-cyan-500/40
          transition-all
          duration-300
          "
        >
        🚀 Analyze Store
        </Link>

        {/* Mobile */}

        <button className="md:hidden">

          <Bars3Icon className="h-8 w-8 text-cyan-400" />

        </button>

      </div>

    </nav>
  );
}

export default Navbar;