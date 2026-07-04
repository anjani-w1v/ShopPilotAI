import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AIInsights from "./pages/AIInsights";
import Forecast from "./pages/Forecast";
import Reports from "./pages/Reports";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-insights" element={<AIInsights />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;