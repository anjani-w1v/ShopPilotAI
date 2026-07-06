import { useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import ForecastChart from "../components/dashboard/ForecastChart";

function Forecast() {
  const [data, setData] = useState(null);

  async function handleUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload`,
        formData
      );

      setData(res.data);

    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  }

  return (
    <Layout>

      <div className="mb-10">

        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
          AI SALES FORECAST
        </p>

        <h1 className="text-5xl font-black text-white mt-3">
          📈 Sales Forecast
        </h1>

        <p className="text-slate-400 mt-4 text-lg max-w-3xl">
          Upload your sales CSV to generate a 7-day AI forecast.
        </p>

      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

        <h2 className="text-2xl font-bold text-white mb-6">
          Upload Sales CSV
        </h2>

        <input
          type="file"
          accept=".csv"
          onChange={handleUpload}
          className="block w-full text-white"
        />

      </div>

      <div className="mt-10">

        <ForecastChart data={data} />

      </div>

    </Layout>
  );
}

export default Forecast;