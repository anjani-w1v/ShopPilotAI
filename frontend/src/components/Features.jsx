import {
  CubeIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ClipboardDocumentListIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Inventory Intelligence",
    description: "Detect low stock, overstock, and dead inventory instantly.",
    icon: CubeIcon,
  },
  {
    title: "Sales Analytics",
    description: "Track revenue, sales trends, and best-selling products.",
    icon: ChartBarIcon,
  },
  {
    title: "Profit Insights",
    description: "Understand which products generate maximum profit.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Demand Forecast",
    description: "Predict future demand using historical sales data.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "AI Recommendations",
    description: "Receive smart business suggestions powered by AI.",
    icon: SparklesIcon,
  },
  {
    title: "Purchase Planning",
    description: "Know exactly what products should be reordered.",
    icon: ClipboardDocumentListIcon,
  },
];

function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Everything You Need to Make Better Business Decisions
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          ShopPilot AI transforms your retail sales data into actionable
          insights that save time and improve business decisions.
        </p>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;