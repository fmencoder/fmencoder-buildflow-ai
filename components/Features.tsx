const features = [
  {
    icon: "🤖",
    title: "AI-Powered Bid Generation",
    description:
      "Generate accurate, professional bids in minutes using AI trained on millions of construction projects. Stop losing jobs to slow turnarounds.",
  },
  {
    icon: "📊",
    title: "Real-Time Project Tracking",
    description:
      "Monitor every job from first estimate to final invoice. Live dashboards keep your entire team aligned and on schedule.",
  },
  {
    icon: "📁",
    title: "Document Management",
    description:
      "Store, share, and version all project documents in one secure hub. Plans, permits, change orders—always at your fingertips.",
  },
  {
    icon: "💬",
    title: "Client Communication Hub",
    description:
      "Centralize client messages, approvals, and updates. Never let an important email slip through the cracks again.",
  },
  {
    icon: "⚡",
    title: "Automated Workflows",
    description:
      "Set up triggers and automations that handle routine tasks for you—follow-ups, reminders, and status updates run on autopilot.",
  },
  {
    icon: "📈",
    title: "Revenue Analytics",
    description:
      "See exactly where your money comes from and where it goes. Identify your most profitable project types and optimize your pipeline.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="features-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Everything your construction business needs
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600">
            BuildFlow AI brings together every tool you need to win more bids, deliver on time, and
            grow your revenue—without the chaos.
          </p>
        </div>

        <ul
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Product features"
        >
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl" role="img" aria-label={feature.title}>
                {feature.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
