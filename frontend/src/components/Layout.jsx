import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-10">
        {children}
      </main>

      <footer className="border-t border-slate-800 mt-16">

        <div className="max-w-7xl mx-auto px-8 py-8 text-center">

          <h3 className="text-xl font-bold text-white">
            🚀 ShopPilot AI
          </h3>

          <p className="text-slate-400 mt-2">
            AI Powered Retail Intelligence Dashboard
          </p>

          <p className="text-slate-600 text-sm mt-2">
            Built with React • FastAPI • Pandas • Tailwind CSS
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Layout;