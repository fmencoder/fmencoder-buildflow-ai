import { brand } from "@/lib/brand";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background circles */}
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 ring-1 ring-amber-400/30">
          🚀 Now in early access
        </span>

        <h1
          id="hero-heading"
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {brand.tagline}
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-blue-100">
          {brand.description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="rounded-full bg-amber-400 px-8 py-3.5 text-base font-semibold text-blue-950 shadow-lg hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-blue-900 transition-colors"
            aria-label="Start your free trial of BuildFlow AI"
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 transition-colors"
            aria-label="Watch how BuildFlow AI works"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-6 text-sm text-blue-300">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
