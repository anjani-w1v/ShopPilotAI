import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* ================= HERO ================= */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 shadow-2xl">

          <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative p-14 text-center">

            <p className="uppercase tracking-[0.35em] text-cyan-100 text-sm">
              AI BUSINESS INTELLIGENCE PLATFORM
            </p>

            <h1 className="text-6xl font-black text-white mt-6">
              🚀 ShopPilot AI
            </h1>

            <p className="text-xl text-blue-100 mt-8 max-w-3xl mx-auto leading-8">
              AI-powered retail intelligence platform that transforms
              sales data into interactive dashboards, business insights,
              sales forecasts, inventory alerts and executive reports.
            </p>

            <Link
              to="/dashboard#upload-section"
              className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              🚀 Analyze Store
            </Link>

          </div>

        </div>

        {/* ================= FEATURES ================= */}

        <section className="mt-24">

          <h2 className="text-4xl font-bold text-center text-white">
            Everything You Need
          </h2>

          <p className="text-slate-400 text-center mt-4 mb-12">
            One intelligent platform for modern retail analytics.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">
              <div className="text-5xl">📊</div>
              <h3 className="text-2xl font-bold text-white mt-5">
                Smart Analytics
              </h3>
              <p className="text-slate-400 mt-4">
                Revenue, profit, KPIs and interactive business dashboards.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">
              <div className="text-5xl">🤖</div>
              <h3 className="text-2xl font-bold text-white mt-5">
                AI Insights
              </h3>
              <p className="text-slate-400 mt-4">
                AI recommendations for smarter business decisions.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">
              <div className="text-5xl">📈</div>
              <h3 className="text-2xl font-bold text-white mt-5">
                Forecasting
              </h3>
              <p className="text-slate-400 mt-4">
                Predict future sales using historical business data.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">
              <div className="text-5xl">⚡</div>
              <h3 className="text-2xl font-bold text-white mt-5">
                Fast Decisions
              </h3>
              <p className="text-slate-400 mt-4">
                Accelerated analytics for faster business insights.
              </p>
            </div>

          </div>

        </section>

        {/* ================= HOW IT WORKS ================= */}

        <section className="mt-24">

          <h2 className="text-4xl font-bold text-center text-white">
            How It Works
          </h2>

          <div className="grid lg:grid-cols-5 gap-8 mt-14 text-center">

            <div>
              <div className="text-6xl">📂</div>
              <h3 className="text-white font-bold mt-4">Upload CSV</h3>
            </div>

            <div>
              <div className="text-6xl">🧹</div>
              <h3 className="text-white font-bold mt-4">Clean Data</h3>
            </div>

            <div>
              <div className="text-6xl">📊</div>
              <h3 className="text-white font-bold mt-4">Analyze</h3>
            </div>

            <div>
              <div className="text-6xl">🤖</div>
              <h3 className="text-white font-bold mt-4">AI Decisions</h3>
            </div>

            <div>
              <div className="text-6xl">📄</div>
              <h3 className="text-white font-bold mt-4">Download Report</h3>
            </div>

          </div>

        </section>

        {/* ================= TECH STACK ================= */}

        <section className="mt-24">

          <h2 className="text-4xl font-bold text-center text-white">
            Built With
          </h2>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <span className="bg-slate-900 border border-slate-700 rounded-full px-6 py-3 text-cyan-400 font-semibold">
              ⚛ React
            </span>

            <span className="bg-slate-900 border border-slate-700 rounded-full px-6 py-3 text-cyan-400 font-semibold">
              ⚡ FastAPI
            </span>

            <span className="bg-slate-900 border border-slate-700 rounded-full px-6 py-3 text-cyan-400 font-semibold">
              🐼 Pandas
            </span>

            <span className="bg-slate-900 border border-slate-700 rounded-full px-6 py-3 text-cyan-400 font-semibold">
              📊 Recharts
            </span>

            <span className="bg-slate-900 border border-slate-700 rounded-full px-6 py-3 text-cyan-400 font-semibold">
              🎨 Tailwind CSS
            </span>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="mt-24 mb-10">

          <div className="rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 p-14 text-center shadow-2xl">

            <h2 className="text-5xl font-black text-white">
              Ready to Analyze Your Business?
            </h2>

            <p className="text-blue-100 text-xl mt-6 max-w-3xl mx-auto">
              Upload your sales CSV and generate AI-powered insights,
              forecasting, business reports and executive recommendations
              in seconds.
            </p>

            <Link
              to="/dashboard#upload-section"
              className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              🚀 Analyze Store
            </Link>

          </div>

        </section>

      </div>
    </Layout>
  );
}

export default Home;