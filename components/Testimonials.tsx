const testimonials = [
  {
    quote:
      "BuildFlow AI cut our bid turnaround from three days to three hours. We've doubled our win rate in two months.",
    author: "Marcus T.",
    role: "Owner, Thornton General Contracting",
  },
  {
    quote:
      "The real-time project dashboard means my site managers and office staff finally see the same data. No more firefighting.",
    author: "Sarah L.",
    role: "Operations Director, Lakeside Build Group",
  },
  {
    quote:
      "I was skeptical of AI for construction, but the bid quality is genuinely impressive. It even catches scope items I'd normally miss.",
    author: "James R.",
    role: "Principal, Riverside Renovations",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Trusted by construction teams across the country
          </h2>
        </div>

        <ul
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Customer testimonials"
        >
          {testimonials.map((t) => (
            <li
              key={t.author}
              className="flex flex-col gap-6 rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm"
            >
              <svg
                className="h-8 w-8 text-amber-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base text-gray-700 italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer>
                <p className="text-sm font-bold text-gray-900">{t.author}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
