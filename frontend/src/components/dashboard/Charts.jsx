import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#16A34A",
  "#EA580C",
  "#9333EA",
  "#DC2626",
  "#0891B2",
];

function Charts({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-8">

      {/* Revenue Trend */}

      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          Revenue Trend
        </h2>

        <ResponsiveContainer width="100%" height={320}>

          <LineChart data={data.sales_trend}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Top Products */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-bold mb-6">
            Top Products
          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={data.product_data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="sales"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Category Distribution */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-bold mb-6">
            Category Distribution
          </h2>

          <ResponsiveContainer width="100%" height={320}>

            <PieChart>

              <Pie
                data={data.category_data}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >

                {data.category_data.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Charts;