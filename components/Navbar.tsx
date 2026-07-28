import Link from "next/link";
import { brand } from "@/lib/brand";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2" aria-label={brand.name}>
          <span className="text-2xl font-extrabold text-blue-900 tracking-tight">
            {brand.name}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <a href="#features" className="hover:text-blue-700 transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-blue-700 transition-colors">
              How It Works
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-700 transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#pricing"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 transition-colors"
          aria-label="Get started with BuildFlow AI"
        >
          Get Started Free
        </a>

        {/* Mobile menu button placeholder – purely decorative for static landing page */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700"
          aria-label="Open mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
