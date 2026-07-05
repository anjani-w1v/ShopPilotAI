function AIInsights({ data }) {

  if (!data || !data.insights) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        🤖 AI Business Insights
      </h2>

      <div className="space-y-4">

        {data.insights.map((insight, index) => (

          <div
            key={index}
            className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:bg-blue-50 transition"
          >

            <p className="text-lg">
              {insight}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AIInsights;