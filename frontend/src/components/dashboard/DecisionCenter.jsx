function DecisionCenter({ data }) {
  if (!data || !data.decision_center) return null;

  const critical = data.decision_center.critical || [];
  const opportunities = data.decision_center.opportunities || [];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mt-10">

      <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm">
        DECISION SUPPORT
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        🧠 Executive Decision Center
      </h2>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">

          <h3 className="text-red-400 text-xl font-bold mb-4">
            🔥 Critical Actions
          </h3>

          {critical.length === 0 ? (
            <p className="text-slate-400">No critical actions.</p>
          ) : (
            critical.map((item, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-slate-300">{item.message}</p>
              </div>
            ))
          )}

        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">

          <h3 className="text-green-400 text-xl font-bold mb-4">
            📈 Growth Opportunities
          </h3>

          {opportunities.length === 0 ? (
            <p className="text-slate-400">No opportunities available.</p>
          ) : (
            opportunities.map((item, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-slate-300">{item.message}</p>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default DecisionCenter;