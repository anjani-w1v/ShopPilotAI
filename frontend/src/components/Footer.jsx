function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              ShopPilot AI
            </h2>

            <p className="mt-2 text-slate-300">
              AI Decision Copilot for Small Retail Businesses
            </p>
          </div>

          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-blue-400">Home</a>
            <a href="#" className="hover:text-blue-400">Dashboard</a>
            <a href="#" className="hover:text-blue-400">AI Insights</a>
            <a href="#" className="hover:text-blue-400">Reports</a>
          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2026 ShopPilot AI. All rights reserved.</p>

          <p>
            Built by Anjani for Google Gen AI Academy APAC Hackathon 2026
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;