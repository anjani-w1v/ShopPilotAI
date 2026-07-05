import { useState } from "react";

import Layout from "../components/Layout";
import CSVUpload from "../components/dashboard/CSVUpload";
import ExecutiveSummary from "../components/dashboard/ExecutiveSummary";
import KPICard from "../components/dashboard/KPICard";
import BusinessScore from "../components/dashboard/BusinessScore";
import Charts from "../components/dashboard/Charts";
import SearchProducts from "../components/dashboard/SearchProducts";
import AIInsights from "../components/dashboard/AIInsights";
import LowInventory from "../components/dashboard/LowInventory";
import DownloadReport from "../components/dashboard/DownloadReport";

function Dashboard() {
  const [data, setData] = useState(null);

  return (
    <Layout>

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* ================= HERO ================= */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 shadow-2xl">

          {/* Glow */}

          <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative p-12">

            <p className="uppercase tracking-[0.35em] text-cyan-100 text-sm">
              AI BUSINESS INTELLIGENCE
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-white mt-4">
              🚀 ShopPilot AI
            </h1>

            <p className="text-lg text-blue-100 mt-6 max-w-3xl leading-8">
              Upload your sales CSV and instantly generate AI-powered
              business insights, interactive analytics, inventory alerts,
              business scores and downloadable reports.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-5 py-3 text-white font-semibold">
                📊 Data Analytics
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-5 py-3 text-white font-semibold">
                🤖 AI Powered
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-5 py-3 text-white font-semibold">
                ⚡ Fast Insights
              </div>

            </div>

          </div>

        </div>

        {/* ================= Upload ================= */}

        <div className="mt-10">

          <CSVUpload onUpload={setData} />

        </div>

        {/* ================= Executive Summary ================= */}

        <div className="mt-10">

          <ExecutiveSummary data={data} />

        </div>

        {/* ================= KPI ================= */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

          <KPICard
            title="Revenue"
            value={data ? `₹${Math.round(data.revenue).toLocaleString()}` : "₹0"}
            color="text-cyan-400"
          />

          <KPICard
            title="Profit"
            value={data ? `₹${Math.round(data.profit).toLocaleString()}` : "₹0"}
            color="text-green-400"
          />

          <KPICard
            title="Orders"
            value={data ? data.orders : 0}
            color="text-orange-400"
          />

          <KPICard
            title="Inventory"
            value={data ? data.inventory : 0}
            color="text-pink-400"
          />

        </div>

        {/* ================= Score ================= */}

        <div className="mt-10">

          <BusinessScore data={data} />

        </div>

        {/* ================= Charts ================= */}

        <div className="mt-10">

          <Charts data={data} />

        </div>

        {/* ================= Search + AI ================= */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <SearchProducts data={data} />

          <AIInsights data={data} />

        </div>

        {/* ================= Inventory + PDF ================= */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <LowInventory data={data} />

          <div className="bg-slate-900 border border-slate-700 rounded-3xl flex items-center justify-center p-10">

            {data ? (

              <DownloadReport data={data} />

            ) : (

              <p className="text-slate-400 text-lg">
                📄 Upload a CSV to enable PDF download.
              </p>

            )}

          </div>

        </div>

        

      </div>

    </Layout>
  );
}

export default Dashboard;