function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          🚀 AI Decision Intelligence for Retail
        </span>

        <h1 className="mt-8 text-6xl font-extrabold text-gray-900 leading-tight">
          AI Decision Copilot
          <br />
          <span className="text-blue-600">
            for Small Retail Businesses
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
          Upload your sales data and instantly discover inventory insights,
          profit analysis, demand forecasting, and AI-powered business
          recommendations.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
            Analyze My Store
          </button>

          <button className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;