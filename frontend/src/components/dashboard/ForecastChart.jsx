import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function ForecastChart({ data }) {
  if (!data || !data.forecast) return null;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

      <div className="flex justify-between items-center mb-8">

        <div>

          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm">
            PREDICTIVE ANALYTICS
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            📈 7-Day Sales Forecast
          </h2>

        </div>

      </div>

      <ResponsiveContainer width="100%" height={400}>

        <LineChart data={data.forecast}>

          <CartesianGrid
            stroke="#334155"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="date"
            stroke="#94A3B8"
          />

          <YAxis
            stroke="#94A3B8"
          />

          <Tooltip
            contentStyle={{
              background: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "14px",
              color: "white",
            }}
          />

          <Line
            type="monotone"
            dataKey="forecast"
            stroke="#06B6D4"
            strokeWidth={4}
            dot={{ r: 5 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ForecastChart;