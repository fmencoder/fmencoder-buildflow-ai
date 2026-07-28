import { brand } from "@/lib/brand";

export default function CTA() {
  return (
    <section
      className="bg-amber-400 py-16 sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl"
        >
          Ready to build smarter?
        </h2>
        <p className="mt-4 text-lg text-blue-900">
          Join thousands of contractors already using {brand.name} to win more bids and deliver
          better projects.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-950 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 focus:ring-offset-amber-400 transition-colors"
          aria-label={`Start your free trial of ${brand.name}`}
        >
          Start Your Free Trial
        </a>
        <p className="mt-4 text-sm text-blue-800">No credit card required · 14-day trial</p>
      </div>
    </section>
  );
}
