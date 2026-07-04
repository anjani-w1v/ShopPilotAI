function KPICard({ title, value, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">

      <h3 className="text-gray-500 text-sm font-medium">
        {title}
      </h3>

      <p className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </p>

    </div>
  );
}

export default KPICard;