function AIInsights({ data }) {
  if (!data || !data.insights) return null;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 p-6">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-3xl shadow-lg">
            🤖
          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              AI Business Assistant
            </h2>

            <p className="text-blue-100 mt-1">
              Smart insights generated from your uploaded sales data
            </p>

          </div>

        </div>

      </div>

      {/* Insights */}

      <div className="p-8 space-y-5">

        {data.insights.map((insight, index) => {

          let icon = "💡";
          let border = "border-slate-700";

          if (insight.includes("Best")) {
            icon = "🏆";
            border = "border-yellow-500";
          }

          if (insight.includes("Revenue")) {
            icon = "💰";
            border = "border-cyan-500";
          }

          if (insight.includes("Profit")) {
            icon = "📈";
            border = "border-green-500";
          }

          if (insight.includes("Inventory")) {
            icon = "⚠️";
            border = "border-red-500";
          }

          if (insight.includes("Recommendation")) {
            icon = "🚀";
            border = "border-purple-500";
          }

          return (

            <div
              key={index}
              className={`
                bg-slate-800
                border
                ${border}
                rounded-2xl
                p-5
                hover:scale-[1.02]
                hover:shadow-lg
                transition-all
                duration-300
              `}
            >

              <div className="flex items-start gap-4">

                <div className="text-3xl">
                  {icon}
                </div>

                <p className="text-slate-200 text-lg leading-8">
                  {insight}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default AIInsights;