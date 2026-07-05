function KPICard({ title, value, color }) {
  return (
    <div
      className="
        bg-slate-900/80
        backdrop-blur-lg
        border
        border-slate-700
        rounded-3xl
        p-6
        shadow-2xl
        hover:scale-105
        hover:border-cyan-400
        hover:shadow-cyan-500/20
        transition-all
        duration-300
        overflow-hidden
      "
    >
      <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">
        {title}
      </p>

      <h2
        className={`
          ${color}
          mt-5
          text-lg
          md:text-xl
          xl:text-2xl
          font-black
          break-words
          leading-tight
        `}
      >
        {value}
      </h2>
    </div>
  );
}

export default KPICard;