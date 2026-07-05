function ExecutiveSummary({ data }) {
  if (!data) return null;

  const bestProduct =
    data.insights?.find((i) => i.includes("Best Selling Product")) || "N/A";

  const recommendation =
    data.insights?.find((i) => i.includes("Recommendation")) || "";

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            EXECUTIVE SUMMARY
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">
            📊 Business Overview
          </h2>

        </div>

        <div className="text-5xl">
          🚀
        </div>

      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 mt-10">

        {/* KPI Cards */}

        <div className="grid grid-cols-2 gap-5">

          {/* Revenue */}

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 min-h-[170px]">

            <p className="text-slate-400 text-sm">
              💰 Revenue
            </p>

            <h3 className="text-cyan-400 text-2xl lg:text-3xl font-bold mt-5 break-all leading-tight">
              ₹{Math.round(data.revenue).toLocaleString()}
            </h3>

          </div>

          {/* Profit */}

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 min-h-[170px]">

            <p className="text-slate-400 text-sm">
              📈 Profit
            </p>

            <h3 className="text-green-400 text-2xl lg:text-3xl font-bold mt-5 break-all leading-tight">
              ₹{Math.round(data.profit).toLocaleString()}
            </h3>

          </div>

          {/* Orders */}

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 min-h-[170px]">

            <p className="text-slate-400 text-sm">
              🛒 Orders
            </p>

            <h3 className="text-orange-400 text-3xl lg:text-4xl font-bold mt-5">
              {data.orders}
            </h3>

          </div>

          {/* Health */}

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 min-h-[170px]">

            <p className="text-slate-400 text-sm">
              ❤️ Health Score
            </p>

            <h3 className="text-purple-400 text-3xl lg:text-4xl font-bold mt-5">
              {data.business_score.score}/100
            </h3>

          </div>

        </div>

        {/* AI Card */}

        <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-3xl p-8 shadow-xl">

          <h3 className="text-white text-3xl font-bold">
            🤖 AI Recommendation
          </h3>

          <div className="mt-6 bg-white/10 backdrop-blur rounded-2xl p-6">

            <p className="text-white text-xl font-bold">
              🏆 {bestProduct}
            </p>

            <p className="text-blue-100 mt-5 leading-8 text-lg">
              {recommendation}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ExecutiveSummary;