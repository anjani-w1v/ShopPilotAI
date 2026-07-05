function CEOSummary({ data }) {

  if (!data || !data.ceo_summary) return null;

  const c = data.ceo_summary;

  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl p-8 shadow-2xl mt-10">

      <p className="uppercase tracking-[0.25em] text-emerald-100 text-sm">
        EXECUTIVE DASHBOARD
      </p>

      <h2 className="text-3xl font-bold text-white mt-2">
        👑 CEO Summary
      </h2>

      <div className="grid md:grid-cols-5 gap-6 mt-8">

        <div>
          <p className="text-emerald-100">Business Health</p>
          <h3 className="text-4xl font-bold text-white">
            {c.health}/100
          </h3>
        </div>

        <div>
          <p className="text-emerald-100">Forecast</p>
          <h3 className="text-3xl font-bold text-white">
            {c.forecast}
          </h3>
        </div>

        <div>
          <p className="text-emerald-100">Highest Risk</p>
          <h3 className="text-2xl font-bold text-red-300">
            {c.risk}
          </h3>
        </div>

        <div>
          <p className="text-emerald-100">Opportunity</p>
          <h3 className="text-2xl font-bold text-cyan-300">
            {c.opportunity}
          </h3>
        </div>

        <div>
          <p className="text-emerald-100">Estimated Impact</p>
          <h3 className="text-3xl font-bold text-yellow-300">
            +{c.impact}
          </h3>
        </div>

      </div>

    </div>
  );
}

export default CEOSummary;