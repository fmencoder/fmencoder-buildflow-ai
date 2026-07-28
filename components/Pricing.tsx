const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for sole traders and small crews getting started.",
    features: [
      "Up to 5 active projects",
      "50 AI bid generations / month",
      "Document storage (5 GB)",
      "Client communication hub",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$129",
    period: "/month",
    description: "For growing teams that need more power and collaboration.",
    features: [
      "Unlimited active projects",
      "Unlimited AI bid generations",
      "Document storage (50 GB)",
      "Automated workflows",
      "Revenue analytics",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large contractors with complex needs and multiple offices.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & advanced security",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const paymentMethods = [
  { label: "Visa", icon: "💳" },
  { label: "Mastercard", icon: "💳" },
  { label: "American Express", icon: "💳" },
  { label: "PayPal", icon: "🅿️" },
  { label: "Apple Pay", icon: "" },
  { label: "Google Pay", icon: "G" },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-gray-50 py-20 sm:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="pricing-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Simple, transparent pricing
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600">
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-md ${
                plan.highlighted
                  ? "bg-blue-900 text-white ring-2 ring-blue-700"
                  : "bg-white text-gray-900 border border-gray-100"
              }`}
              aria-label={`${plan.name} plan`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-blue-950 uppercase tracking-wide shadow">
                  Most Popular
                </span>
              )}

              <h3
                className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}
              >
                {plan.name}
              </h3>

              <p
                className={`mt-2 text-sm ${plan.highlighted ? "text-blue-200" : "text-gray-500"}`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm font-medium ${plan.highlighted ? "text-blue-300" : "text-gray-500"}`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul
                className={`mt-8 flex flex-col gap-3 text-sm flex-1 ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}
                aria-label={`${plan.name} plan features`}
              >
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlighted ? "text-amber-400" : "text-blue-700"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.highlighted
                    ? "bg-amber-400 text-blue-950 hover:bg-amber-300 focus:ring-amber-400 focus:ring-offset-blue-900"
                    : "bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-700"
                }`}
                aria-label={`${plan.cta} — ${plan.name} plan`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium text-gray-500 mb-6">
            Accepted payment methods
          </p>
          <ul
            className="flex flex-wrap items-center justify-center gap-4"
            aria-label="Accepted payment methods"
          >
            {paymentMethods.map((method) => (
              <li
                key={method.label}
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm"
                aria-label={method.label}
              >
                <span aria-hidden="true">{method.icon}</span>
                {method.label}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-gray-400">
            PayPal integration is available on Pro and Enterprise plans. Stripe powers all card transactions. All payments are processed securely with 256-bit SSL encryption.
          </p>
        </div>
      </div>
    </section>
  );
}
