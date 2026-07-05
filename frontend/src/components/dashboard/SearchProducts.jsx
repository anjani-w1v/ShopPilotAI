import { useState } from "react";

function SearchProducts({ data }) {
  const [search, setSearch] = useState("");

  if (!data || !data.product_data) {
    return null;
  }

  const filtered = data.product_data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 p-6">

        <h2 className="text-3xl font-bold text-white">
          🔍 Product Search
        </h2>

        <p className="text-emerald-100 mt-2">
          Instantly search your best-selling products.
        </p>

      </div>

      {/* Body */}

      <div className="p-8">

        <div className="relative">

          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl">
            🔎
          </span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-slate-800
              border
              border-slate-600
              rounded-2xl
              py-4
              pl-14
              pr-5
              text-white
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              transition-all
            "
          />

        </div>

        <div className="mt-8 space-y-4 max-h-[420px] overflow-y-auto pr-2">

          {filtered.length === 0 ? (

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">

              <div className="text-5xl">
                📦
              </div>

              <p className="text-slate-400 mt-4">
                No matching products found.
              </p>

            </div>

          ) : (

            filtered.map((item, index) => (

              <div
                key={index}
                className="
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-2xl
                  p-5
                  flex
                  justify-between
                  items-center
                  hover:border-cyan-400
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >

                <div>

                  <p className="text-white text-lg font-bold">
                    {item.name}
                  </p>

                  <p className="text-slate-400 text-sm mt-1">
                    Product Performance
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-cyan-400 text-2xl font-bold">
                    {item.sales}
                  </p>

                  <p className="text-slate-400 text-sm">
                    Units Sold
                  </p>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default SearchProducts;