import { brand } from "@/lib/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-200 py-12" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-2xl font-extrabold text-white tracking-tight">{brand.name}</p>
            <p className="mt-2 text-sm text-blue-300 max-w-xs">{brand.tagline}</p>
            <p className="mt-4 text-sm">{brand.description}</p>
          </div>

          {/* Product links */}
          <nav aria-label="Product links">
            <p className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Product
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>

          {/* Company links */}
          <nav aria-label="Company links">
            <p className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={brand.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={brand.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-blue-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-400">
          <p>
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
