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
  "#22D3EE",
  "#3B82F6",
  "#8B5CF6",
  "#F97316",
  "#10B981",
  "#EC4899",
];

const axisStyle = {
  stroke: "#94A3B8",
  fontSize: 12,
};

const tooltipStyle = {
  backgroundColor: "#0F172A",
  border: "1px solid #334155",
  borderRadius: "12px",
  color: "#FFFFFF",
};

function Charts({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-8">

      {/* Revenue Trend */}

      <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white mb-8">
          📈 Revenue Trend
        </h2>

        <ResponsiveContainer width="100%" height={340}>

          <LineChart data={data.sales_trend}>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="date"
              tick={axisStyle}
            />

            <YAxis tick={axisStyle} />

            <Tooltip
              contentStyle={tooltipStyle}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#22D3EE"
              strokeWidth={4}
              dot={{
                fill: "#22D3EE",
                r: 4,
              }}
              activeDot={{
                r: 7,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Products */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-white mb-8">
            🏆 Top Products
          </h2>

          <ResponsiveContainer width="100%" height={340}>

            <BarChart data={data.product_data}>

              <CartesianGrid
                stroke="#334155"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="name"
                tick={axisStyle}
              />

              <YAxis tick={axisStyle} />

              <Tooltip
                contentStyle={tooltipStyle}
              />

              <Legend />

              <Bar
                dataKey="sales"
                radius={[12, 12, 0, 0]}
                fill="#3B82F6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Categories */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-white mb-8">
            🥧 Category Distribution
          </h2>

          <ResponsiveContainer width="100%" height={340}>

            <PieChart>

              <Pie
                data={data.category_data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >

                {data.category_data.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip
                contentStyle={tooltipStyle}
              />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Charts;