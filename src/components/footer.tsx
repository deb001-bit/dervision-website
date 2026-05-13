import Link from "next/link";
import { Activity, Code, Mail, ExternalLink } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo.png" alt="Dervision Logo" className="w-full h-full object-contain drop-shadow-sm rounded-lg" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-md mb-6">
              {siteConfig.description}
            </p>
            <p className="text-xs text-white/40 leading-relaxed max-w-md">
              {siteConfig.disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. A Project by Team
            Innoventures. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@dervision.com"
              className="text-white/40 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
