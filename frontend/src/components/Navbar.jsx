import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-600">
          ShopPilot AI
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
            <li><Link to="/ai-insights" className="hover:text-blue-600">AI Insights</Link></li>
            <li><Link to="/forecast" className="hover:text-blue-600">Forecast</Link></li>
            <li><Link to="/reports" className="hover:text-blue-600">Reports</Link></li>
        </ul>

        <Link
            to="/dashboard"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
            Analyze My Store
        </Link>

        <button className="md:hidden">
          <Bars3Icon className="h-7 w-7 text-blue-600" />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;