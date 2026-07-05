import { useState } from "react";

import Layout from "../components/Layout";
import CSVUpload from "../components/dashboard/CSVUpload";
import ExecutiveSummary from "../components/dashboard/ExecutiveSummary";
import BusinessScore from "../components/dashboard/BusinessScore";
import DownloadReport from "../components/dashboard/DownloadReport";

function Reports() {

  const [data, setData] = useState(null);

  return (
    <Layout>

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* ================= HERO ================= */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 shadow-2xl">

          <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative p-12">

            <p className="uppercase tracking-[0.35em] text-cyan-100 text-sm">
              BUSINESS REPORTING
            </p>

            <h1 className="text-5xl font-black text-white mt-4">
              📄 Reports Center
            </h1>

            <p className="text-lg text-blue-100 mt-6 max-w-3xl leading-8">
              Generate executive business reports with KPIs, AI summaries,
              business health scores and downloadable PDF reports.
            </p>

          </div>

        </div>

        {/* ================= FEATURES ================= */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">

            <h2 className="text-2xl font-bold text-white">
              📊 Executive Reports
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Generate business summaries with revenue,
              profit, orders and performance metrics.
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">

            <h2 className="text-2xl font-bold text-white">
              🤖 AI Summary
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              AI automatically highlights trends,
              opportunities and business risks.
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-700 p-8">

            <h2 className="text-2xl font-bold text-white">
              📥 Export PDF
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Download professional reports ready
              for meetings and stakeholders.
            </p>

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

        {/* ================= Business Score ================= */}

        <div className="mt-10">

          <BusinessScore data={data} />

        </div>

        {/* ================= PDF ================= */}

        <div className="mt-10 bg-slate-900 border border-slate-700 rounded-3xl p-10">

          {data ? (

            <DownloadReport data={data} />

          ) : (

            <div className="text-center">

              <h2 className="text-3xl font-bold text-white">
                📄 Generate Business Report
              </h2>

              <p className="text-slate-400 mt-4">
                Upload your sales CSV to generate a professional PDF report.
              </p>

            </div>

          )}

        </div>

      </div>

    </Layout>
  );
}

export default Reports;