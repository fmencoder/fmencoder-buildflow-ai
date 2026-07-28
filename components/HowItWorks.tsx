const steps = [
  {
    step: "01",
    title: "Connect your existing tools",
    description:
      "Import your job history, client list, and favorite templates in minutes. BuildFlow AI learns from your past projects to make smarter recommendations from day one.",
  },
  {
    step: "02",
    title: "Generate your first AI bid",
    description:
      "Enter the project details and let BuildFlow AI draft a complete, itemized bid. Review, tweak, and send—all without ever opening a spreadsheet.",
  },
  {
    step: "03",
    title: "Track progress in real time",
    description:
      "Once a bid is won, automatically convert it into a live project with milestones, tasks, and a budget tracker. Your whole team sees the same picture.",
  },
  {
    step: "04",
    title: "Get paid and grow",
    description:
      "Send invoices with one click, accept payments online, and review analytics to understand what's driving your most profitable work.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-blue-950 py-20 sm:py-28 text-white"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="how-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            How BuildFlow AI works
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-blue-200">
            From your first bid to your hundredth invoice—BuildFlow AI guides you through every step.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" aria-label="Steps">
          {steps.map((item) => (
            <li key={item.step} className="relative flex flex-col gap-4">
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-xl font-extrabold text-blue-950"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-base text-blue-200">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
