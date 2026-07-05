import { useState } from "react";

import CSVUpload from "../components/dashboard/CSVUpload";
import KPICard from "../components/dashboard/KPICard";
import Charts from "../components/dashboard/Charts";
import AIInsights from "../components/dashboard/AIInsights";

function Dashboard() {

  const [data, setData] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to ShopPilot AI
        </p>

        <div className="mt-8">
          <CSVUpload onUpload={setData} />
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <KPICard
            title="Revenue"
            value={data ? `₹${data.revenue.toLocaleString()}` : "₹0"}
            color="text-blue-600"
          />

          <KPICard
            title="Profit"
            value={data ? `₹${data.profit.toLocaleString()}` : "₹0"}
            color="text-green-600"
          />

          <KPICard
            title="Orders"
            value={data ? data.orders : 0}
            color="text-orange-600"
          />

          <KPICard
            title="Inventory"
            value={data ? `${data.inventory}%` : "0%"}
            color="text-purple-600"
          />

        </div>

        <Charts data={data} />

        <AIInsights data={data} />

      </div>

    </div>
  );
}

export default Dashboard;