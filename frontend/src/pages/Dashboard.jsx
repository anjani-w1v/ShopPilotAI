import CSVUpload from "../components/dashboard/CSVUpload";
import KPICard from "../components/dashboard/KPICard";

function Dashboard() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to ShopPilot AI
        </p>

        {/* CSV Upload */}
        <div className="mt-8">
          <CSVUpload />
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <KPICard
            title="Revenue"
            value="₹1,24,500"
            color="text-blue-600"
          />

          <KPICard
            title="Profit"
            value="₹38,420"
            color="text-green-600"
          />

          <KPICard
            title="Orders"
            value="834"
            color="text-orange-600"
          />

          <KPICard
            title="Inventory"
            value="92%"
            color="text-purple-600"
          />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;