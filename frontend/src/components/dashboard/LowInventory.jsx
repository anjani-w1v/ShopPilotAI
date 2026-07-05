function LowInventory({ data }) {
  if (!data || !data.low_inventory || data.low_inventory.length === 0) {
    return null;
  }

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              🚨 Low Inventory Alerts
            </h2>

            <p className="text-red-100 mt-2">
              Products that should be restocked soon.
            </p>

          </div>

          <div className="text-5xl">
            ⚠️
          </div>

        </div>

      </div>

      {/* Products */}

      <div className="p-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.low_inventory.map((item, index) => (

            <div
              key={index}
              className="
                bg-slate-800
                border
                border-red-500/40
                rounded-2xl
                p-6
                hover:border-red-400
                hover:shadow-red-500/20
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <div className="flex items-center justify-between">

                <div className="text-4xl">
                  📦
                </div>

                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  LOW STOCK
                </span>

              </div>

              <h3 className="text-white text-xl font-bold mt-6">
                {item.product}
              </h3>

              <div className="mt-5 bg-slate-900 rounded-xl p-4 border border-slate-700">

                <p className="text-slate-400 text-sm">
                  Remaining Inventory
                </p>

                <p className="text-red-400 text-3xl font-black mt-2">
                  {item.inventory}
                </p>

                <p className="text-red-300 mt-2">
                  Restock immediately
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default LowInventory;