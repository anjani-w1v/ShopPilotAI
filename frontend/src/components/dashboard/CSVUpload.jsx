function CSVUpload() {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">

      <h2 className="text-2xl font-bold">
        Upload Sales CSV
      </h2>

      <p className="text-gray-500 mt-2">
        Upload your store sales data to generate AI-powered insights.
      </p>

      <div className="mt-8 border-2 border-dashed border-blue-300 rounded-xl p-12 text-center">

        <input
          type="file"
          accept=".csv"
          className="block mx-auto"
        />

        <p className="mt-4 text-gray-500">
          Supported format: CSV
        </p>

      </div>

    </div>
  );
}

export default CSVUpload;