import { useState } from "react";
import axios from "axios";

function CSVUpload({ onUpload }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload`,
        formData
      );

      setResult(response.data);

      if (onUpload) {
        onUpload(response.data);
      }
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

      <h2 className="text-3xl font-bold text-white">
        📂 Upload Sales CSV
      </h2>

      <p className="text-slate-400 mt-2">
        Upload your sales dataset and let AI analyze your business.
      </p>

      <div className="mt-8">

        <label className="cursor-pointer inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">

          Choose CSV

          <input
            type="file"
            accept=".csv"
            onChange={uploadFile}
            className="hidden"
          />

        </label>

      </div>

      {loading && (

        <div className="mt-8">

          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 animate-pulse w-full"></div>

          </div>

          <p className="mt-4 text-cyan-400 font-semibold">
            🤖 AI is analyzing your business...
          </p>

        </div>

      )}

      {result && (

        <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-6">

          <h3 className="text-2xl font-bold text-white">
            📊 Dataset Summary
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mt-6">

            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
              <p className="text-slate-400 text-sm">Rows</p>
              <p className="text-3xl font-bold text-cyan-400">
                {result.rows}
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
              <p className="text-slate-400 text-sm">Columns</p>
              <p className="text-3xl font-bold text-purple-400">
                {result.total_columns}
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
              <p className="text-slate-400 text-sm">Numeric</p>
              <p className="text-3xl font-bold text-green-400">
                {result.numeric_columns}
              </p>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
              <p className="text-slate-400 text-sm">Text</p>
              <p className="text-3xl font-bold text-orange-400">
                {result.text_columns}
              </p>
            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default CSVUpload;