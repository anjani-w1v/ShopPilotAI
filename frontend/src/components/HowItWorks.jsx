import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Upload Sales Data",
    description: "Upload your sales CSV file in seconds.",
    icon: ArrowUpTrayIcon,
  },
  {
    title: "Analyze Business Data",
    description: "We calculate revenue, profit, inventory and trends.",
    icon: ChartBarIcon,
  },
  {
    title: "AI Generates Insights",
    description: "Gemini analyzes the data and creates smart recommendations.",
    icon: SparklesIcon,
  },
  {
    title: "Take Better Decisions",
    description: "Restock smarter, reduce losses and grow your business.",
    icon: CheckBadgeIcon,
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          How ShopPilot AI Works
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Four simple steps from raw data to smart business decisions.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-xl transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                <div className="mt-5 text-sm font-semibold text-blue-600">
                  Step {index + 1}
                </div>

                <h3 className="mt-2 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;