import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SITE, getAddressText } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const addressText = getAddressText();
  const quickContactLinks = [
    { href: SITE.mapUrl, label: "Get Directions", icon: MapPin, external: true },
    { href: SITE.phoneHref, label: "Call Us", icon: Phone },
    { href: SITE.reservationUrl, label: "Email Reservations", icon: Mail },
  ];

  return (
    <footer className="relative bg-[var(--espresso)] text-[var(--cream)] pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--mocha)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--caramel)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Maati Art Cafe logo" className="w-12 h-12 object-contain" />
              <span className="font-serif text-2xl tracking-wide font-bold">{SITE.name}</span>
            </div>
            <p className="text-[var(--latte)] leading-relaxed max-w-xs">
              A Brooklyn coffee shop where handcrafted ceramics, signature drinks, and gallery-inspired interiors turn every visit into a slow, memorable ritual.
            </p>
            <div className="flex gap-4">
              {quickContactLinks.map(({ href, label, icon: Icon, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5, color: "var(--caramel)" }}
                  className="w-10 h-10 rounded-full bg-[var(--mocha)]/20 flex items-center justify-center border border-[var(--latte)]/20 transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold border-b border-[var(--caramel)]/30 pb-2 inline-block">Explore</h4>
            <ul className="space-y-4 text-[var(--latte)]">
              <li><a href="/" className="hover:text-[var(--cream)] transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-[var(--cream)] transition-colors">Menu</a></li>
              <li><a href="/gallery" className="hover:text-[var(--cream)] transition-colors">Gallery</a></li>
              <li><a href="/about" className="hover:text-[var(--cream)] transition-colors">About Us</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold border-b border-[var(--caramel)]/30 pb-2 inline-block">Visit Us</h4>
            <address className="not-italic">
              <ul className="space-y-4 text-[var(--latte)]">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[var(--caramel)] shrink-0" />
                  <a
                    href={SITE.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--cream)] transition-colors"
                  >
                    {addressText}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[var(--caramel)] shrink-0" />
                  <a href={SITE.phoneHref} className="hover:text-[var(--cream)] transition-colors">
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-[var(--caramel)] shrink-0" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-[var(--cream)] transition-colors">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold border-b border-[var(--caramel)]/30 pb-2 inline-block">Plan Your Visit</h4>
            <p className="text-[var(--latte)] text-sm">
              Reserve a table, ask about private events, or get directions before you stop by for coffee and ceramics.
            </p>
            <div className="space-y-3">
              <a
                href={SITE.reservationUrl}
                className="group flex items-center justify-between rounded-2xl border border-[var(--latte)]/20 bg-[var(--mocha)]/20 px-5 py-4 text-sm text-[var(--cream)] transition-colors hover:border-[var(--caramel)]/50"
              >
                <span>Email Reservations</span>
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[var(--latte)]/20 bg-[var(--mocha)]/20 px-5 py-4 text-sm text-[var(--cream)] transition-colors hover:border-[var(--caramel)]/50"
              >
                <span>Get Directions</span>
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--mocha)]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--latte)]/60 font-medium tracking-widest uppercase">
          <p>© {currentYear} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/about" className="hover:text-[var(--cream)] transition-colors">Our Story</a>
            <a href="/#visit" className="hover:text-[var(--cream)] transition-colors">Visit Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
