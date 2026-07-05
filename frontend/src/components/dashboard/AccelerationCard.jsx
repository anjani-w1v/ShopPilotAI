function AccelerationCard({ data }) {

  if (!data || !data.acceleration) return null;

  const a = data.acceleration;

  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 rounded-3xl p-8 mt-10 shadow-2xl">

      <p className="uppercase tracking-[0.25em] text-cyan-100 text-sm">
        NVIDIA ACCELERATION
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        ⚡ Analytics Performance
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mt-8">

        <div>
          <p className="text-cyan-100">Rows Processed</p>
          <h3 className="text-4xl font-bold text-white">
            {a.rows_processed.toLocaleString()}
          </h3>
        </div>

        <div>
          <p className="text-cyan-100">Standard</p>
          <h3 className="text-4xl font-bold text-white">
            {a.standard_time}s
          </h3>
        </div>

        <div>
          <p className="text-cyan-100">Accelerated</p>
          <h3 className="text-4xl font-bold text-green-300">
            {a.accelerated_time}s
          </h3>
        </div>

        <div>
          <p className="text-cyan-100">Speedup</p>
          <h3 className="text-4xl font-black text-yellow-300">
            {a.speedup}
          </h3>
        </div>

      </div>

    </div>
  );
}

export default AccelerationCard;