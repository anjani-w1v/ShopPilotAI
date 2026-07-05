import { useState } from "react";
import axios from "axios";

function CSVUpload({ onUpload }) {
  const [result, setResult] = useState(null);

  const uploadFile = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData
      );

      setResult(response.data);

      if (onUpload) {
        onUpload(response.data);
      }
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">

      <h2 className="text-2xl font-bold">
        Upload Sales CSV
      </h2>

      <p className="text-gray-500 mt-2">
        Upload your CSV dataset for analysis.
      </p>

      <input
        type="file"
        accept=".csv"
        onChange={uploadFile}
        className="mt-6"
      />

      {result && (
        <div className="mt-8">

          <h3 className="text-xl font-bold mb-4">
            Dataset Summary
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">Rows</p>
              <h2 className="text-2xl font-bold text-blue-600">
                {result.rows}
              </h2>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">Columns</p>
              <h2 className="text-2xl font-bold text-green-600">
                {result.total_columns}
              </h2>
            </div>

            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">Numeric Columns</p>
              <h2 className="text-2xl font-bold text-orange-600">
                {result.numeric_columns}
              </h2>
            </div>

            <div className="bg-purple-50 rounded-xl p-4">
              <p className="text-gray-500 text-sm">Text Columns</p>
              <h2 className="text-2xl font-bold text-purple-600">
                {result.text_columns}
              </h2>
            </div>

          </div>

          <div className="mt-6 bg-slate-100 rounded-xl p-4">

            <h3 className="font-semibold mb-3">
              Available Columns
            </h3>

            <div className="flex flex-wrap gap-2">

              {result.columns.map((col) => (
                <span
                  key={col}
                  className="bg-white border rounded-full px-3 py-1 text-sm"
                >
                  {col}
                </span>
              ))}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default CSVUpload;