import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1733.5638962610908!2d88.4445318373069!3d22.97621246162201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89500540513a7%3A0x81bbbbeca398a97!2sMaati%20Art%20Cafe!5e0!3m2!1sen!2sin!4v1775545557321!5m2!1sen!2sin";
const MAP_DIRECTIONS_URL = "https://www.google.com/maps?q=22.97621246162201,88.4445318373069";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickContactLinks = [
    { href: MAP_DIRECTIONS_URL, label: "Get Directions", icon: MapPin, external: true },
    { href: SITE.phoneHref, label: "Call Us", icon: Phone },
    { href: SITE.reservationUrl, label: "Email Reservations", icon: Mail },
  ];

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,var(--espresso)_0%,var(--mocha)_34%,var(--coffee-dark)_100%)] text-[var(--cream)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--espresso)] via-[var(--espresso)]/80 to-transparent md:h-32" />

      <div className="relative overflow-hidden pb-12 pt-16 md:pt-20">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[var(--mocha)]/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[var(--caramel)]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Maati Art Cafe logo"
                  className="h-12 w-12 object-contain"
                />
                <span className="font-serif text-2xl font-bold tracking-wide">
                  {SITE.name}
                </span>
              </div>
              <p className="max-w-xs leading-relaxed text-[var(--latte)]">
                A warm art cafe where handcrafted ceramics, signature drinks,
                and gallery-inspired interiors turn every visit into a slow,
                memorable ritual.
              </p>
              <div className="flex gap-4">
                {quickContactLinks.map(
                  ({ href, label, icon: Icon, external }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -5, color: "var(--caramel)" }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--latte)]/20 bg-[var(--mocha)]/20 transition-colors"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="inline-block border-b border-[var(--caramel)]/30 pb-2 font-serif text-lg font-semibold">
                Explore
              </h4>
              <ul className="space-y-4 text-[var(--latte)]">
                <li>
                  <a
                    href="/"
                    className="transition-colors hover:text-[var(--cream)]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="transition-colors hover:text-[var(--cream)]"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="transition-colors hover:text-[var(--cream)]"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="transition-colors hover:text-[var(--cream)]"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="inline-block border-b border-[var(--caramel)]/30 pb-2 font-serif text-lg font-semibold">
                Visit Us
              </h4>
              <address className="not-italic">
                <ul className="space-y-4 text-[var(--latte)]">
                  <li className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="shrink-0 text-[var(--caramel)]"
                    />
                    <a
                      href={MAP_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[var(--cream)]"
                    >
                      View Maati Art Cafe on Google Maps
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone
                      size={20}
                      className="shrink-0 text-[var(--caramel)]"
                    />
                    <a
                      href={SITE.phoneHref}
                      className="transition-colors hover:text-[var(--cream)]"
                    >
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail
                      size={20}
                      className="shrink-0 text-[var(--caramel)]"
                    />
                    <a
                      href={`mailto:${SITE.email}`}
                      className="transition-colors hover:text-[var(--cream)]"
                    >
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </address>
            </div>

            <div className="space-y-6">
              <h4 className="inline-block border-b border-[var(--caramel)]/30 pb-2 font-serif text-lg font-semibold">
                Plan Your Visit
              </h4>
              <p className="text-sm text-[var(--latte)]">
                Reserve a table, ask about private events, or get directions
                before you stop by for coffee and ceramics.
              </p>
              <div className="space-y-3">
                <a
                  href={SITE.reservationUrl}
                  className="group flex items-center justify-between rounded-2xl border border-[var(--latte)]/20 bg-[var(--mocha)]/20 px-5 py-4 text-sm text-[var(--cream)] transition-colors hover:border-[var(--caramel)]/50"
                >
                  <span>Email Reservations</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--latte)]/20 bg-[var(--mocha)]/20 px-5 py-4 text-sm text-[var(--cream)] transition-colors hover:border-[var(--caramel)]/50"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          <section className="mb-20">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--caramel)]/20 bg-gradient-to-r from-[#7d3a2d] via-[var(--mocha)] to-[#c56d47] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:rounded-[2.5rem] md:p-5">
              <div className="mb-4 flex flex-col gap-3 px-2 text-[var(--cream)] md:flex-row md:items-center md:justify-between md:px-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--latte)]/80">
                    Find Us
                  </p>
                  <h3 className="mt-2 font-serif text-3xl md:text-4xl">
                    Maati Art Cafe on the Map
                  </h3>
                </div>
                <div className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-[var(--cream)]/90 backdrop-blur-md">
                  <MapPin size={16} className="shrink-0 text-[var(--latte)]" />
                  <span>Kalyani, West Bengal, Pin - 741235</span>
                </div>
              </div>

              <div
                data-hide-custom-cursor="true"
                className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[var(--cream)]/10 shadow-2xl"
              >
                <motion.a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-xl bg-[var(--cream)] px-4 py-3 text-sm font-semibold text-[var(--espresso)] shadow-lg"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight size={16} />
                </motion.a>

                <iframe
                  src={MAP_EMBED_URL}
                  title="Google Map showing the location of Maati Art Cafe"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block h-[320px] w-full border-0 md:h-[430px]"
                />
              </div>
            </div>
          </section>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--mocha)]/30 pt-8 text-xs font-medium uppercase tracking-widest text-[var(--latte)]/60 md:flex-row">
            <p>
              © {currentYear} {SITE.name}. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="/about"
                className="transition-colors hover:text-[var(--cream)]"
              >
                Our Story
              </a>
              <a
                href="/#visit"
                className="transition-colors hover:text-[var(--cream)]"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
