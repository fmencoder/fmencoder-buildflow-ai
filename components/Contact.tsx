"use client";

import { brand } from "@/lib/brand";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="contact-heading"
          className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Get in touch
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Questions? Our team is here to help you get the most out of {brand.name}.
        </p>
        <a
          href={`mailto:${brand.email}`}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-900 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition-colors"
          aria-label={`Email ${brand.name} support`}
        >
          {brand.email}
        </a>

        <form
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 text-left"
          aria-label="Contact form"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Jane Smith"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Work email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jane@company.com"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your business and what you're looking for…"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700 resize-none"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-blue-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition-colors"
              aria-label="Send message to BuildFlow AI team"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
