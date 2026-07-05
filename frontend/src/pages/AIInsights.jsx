import Layout from "../components/Layout";

function AIInsights() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Hero */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 shadow-2xl">

          <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative p-12">

            <p className="uppercase tracking-[0.35em] text-cyan-100 text-sm">
              AI BUSINESS INSIGHTS
            </p>

            <h1 className="text-5xl font-black text-white mt-4">
              🤖 AI Insights
            </h1>

            <p className="text-lg text-blue-100 mt-6 max-w-3xl leading-8">
              Gemini-powered intelligence transforms raw sales data into
              actionable recommendations, hidden trends, inventory alerts,
              growth opportunities and executive summaries.
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white">
              📈 Sales Trends
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Discover which products, categories and regions are driving
              revenue growth.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white">
              📦 Inventory Alerts
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              AI automatically detects products at risk of stock-outs before
              they affect revenue.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white">
              🚀 Growth Opportunities
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Prioritize promotions, pricing and inventory investments using
              AI-generated recommendations.
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default AIInsights;