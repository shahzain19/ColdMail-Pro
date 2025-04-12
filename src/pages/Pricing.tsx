// File: Pricing.tsx
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Starter",
    price: "Free",
    description: "Perfect for trying things out.",
    features: ["Unlimited cold emails", "Basic analytics", "Email tracking"],
    isPopular: false,
  },
  {
    title: "Pro",
    price: "$29/mo",
    description: "Best for growing outreach.",
    features: ["All Starter features", "Advanced analytics", "Automated follow-ups", "Custom sender domain"],
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For teams & power users.",
    features: ["All Pro features", "Team access", "Priority support", "Dedicated account manager"],
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <main className="font-[Outfit] bg-white text-gray-900">
      {/* Header */}
      <section className="relative py-32 px-6 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-28 -left-40 w-[500px] h-[500px] bg-indigo-100/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-100/20 blur-2xl rounded-full animate-spin-slow" />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Simple <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">Pricing</span> Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600"
          >
            Choose the plan that fits your cold outreach workflow.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`rounded-xl border p-8 shadow-md bg-white ${
              plan.isPopular ? "border-blue-600 shadow-blue-100" : "border-gray-200"
            }`}
          >
            {plan.isPopular && (
              <div className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-4 font-medium">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <p className="text-gray-500 mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600 text-lg">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-md font-semibold transition ${
                plan.isPopular
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {plan.price === "Free" ? "Get Started" : "Choose Plan"}
            </button>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Pricing;
