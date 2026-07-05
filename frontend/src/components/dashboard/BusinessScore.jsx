function BusinessScore({ data }) {

  if (!data || !data.business_score) {
    return null;
  }

  const { score, status } = data.business_score;

  let ringColor = "border-red-500";
  let textColor = "text-red-400";

  if (score >= 90) {
    ringColor = "border-green-400";
    textColor = "text-green-400";
  } else if (score >= 75) {
    ringColor = "border-yellow-400";
    textColor = "text-yellow-400";
  } else if (score >= 60) {
    ringColor = "border-orange-400";
    textColor = "text-orange-400";
  }

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-10">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        <div>

          <p className="uppercase tracking-[0.25em] text-cyan-400 text-sm">
            BUSINESS HEALTH
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            🏆 Business Score
          </h2>

          <p className="text-slate-400 mt-4 max-w-lg leading-7">
            Our AI evaluates revenue, profit, inventory levels and overall
            sales performance to estimate your business health.
          </p>

        </div>

        <div className="flex flex-col items-center">

          <div
            className={`
              w-52
              h-52
              rounded-full
              border-[12px]
              ${ringColor}
              bg-slate-950
              flex
              items-center
              justify-center
              shadow-[0_0_40px_rgba(34,211,238,0.20)]
            `}
          >
            <span className={`text-6xl font-black ${textColor}`}>
              {score}
            </span>
          </div>

          <p className={`text-3xl font-bold mt-6 ${textColor}`}>
            {status}
          </p>

        </div>

      </div>

    </div>
  );
}

export default BusinessScore;