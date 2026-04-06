import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => {
    setPathname(window.location.pathname);
    const handleTransition = () => {
      setPathname(window.location.pathname);
      setIsOpen(false);
    };
    document.addEventListener("astro:after-swap", handleTransition);
    return () => document.removeEventListener("astro:after-swap", handleTransition);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // On home page the hero is dark so we can start fully transparent.
  // On all other pages start with a dark background immediately so
  // the navbar is always readable against light cream/white backgrounds.
  const isHome = pathname === "/" || pathname === "";

  const bgFrom    = isHome ? "rgba(10, 6, 4, 0)"   : "rgba(14, 8, 5, 0.92)";
  const blurFrom  = isHome ? "blur(0px)"            : "blur(24px) saturate(180%)";
  const pyFrom    = isHome ? "1.25rem"              : "0.85rem";
  const borderFrom = isHome ? "rgba(212,165,116,0)"  : "rgba(212,165,116,0.18)";
  const shadowFrom = isHome ? "none"                : "0 4px 24px rgba(0,0,0,0.35)";

  const backgroundColor = useTransform(scrollY, [0, 80], [bgFrom,    "rgba(14, 8, 5, 0.92)"]);
  const backdropBlur    = useTransform(scrollY, [0, 80], [blurFrom,  "blur(24px) saturate(180%)"]);
  const navPaddingY     = useTransform(scrollY, [0, 80], [pyFrom,    "0.85rem"]);
  const navBorderColor  = useTransform(scrollY, [0, 80], [borderFrom, "rgba(212,165,116,0.18)"]);
  const navShadow       = useTransform(scrollY, [0, 80], [shadowFrom, "0 4px 24px rgba(0,0,0,0.35)"]);

  const navItems = [
    { name: "Menu",    path: "/menu"    },
    { name: "Gallery", path: "/gallery" },
    { name: "About",   path: "/about"  },
  ];

  return (
    <>
      <motion.nav
        aria-label="Primary"
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
          paddingTop: navPaddingY,
          paddingBottom: navPaddingY,
          borderBottom: "1px solid",
          borderColor: navBorderColor,
          boxShadow: navShadow,
        }}
        className="fixed top-0 left-0 right-0 z-[100] w-full"
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-8">
          <a href="/" className="flex-shrink-0" aria-label="Go to the Maati Art Cafe homepage">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <motion.div
                  animate={{ opacity: [0.35, 0.7, 0.35] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] blur-md group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.img
                  src="/logo.png"
                  alt="Maati Art Cafe"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="leading-none select-none">
                <p className="font-serif text-[var(--cream)] text-xl font-bold tracking-[0.12em] uppercase group-hover:text-[var(--caramel)] group-hover:tracking-[0.18em] transition-all duration-300">
                  Maati
                </p>
                <p className="font-serif text-[var(--caramel)]/70 text-[11px] tracking-[0.35em] uppercase mt-0.5">
                  Art Café
                </p>
              </div>
            </motion.div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.path}
                href={item.path}
                aria-current={pathname === item.path ? "page" : undefined}
              >
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover="hovered"
                  className="relative px-5 py-2 cursor-pointer"
                >
                  <motion.div
                    variants={{ hovered: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 rounded-full bg-white/5"
                  />

                  <motion.span
                    variants={{ hovered: { color: "var(--caramel)" } }}
                    transition={{ duration: 0.2 }}
                    className="relative font-medium text-sm tracking-[0.1em] uppercase text-[var(--cream)]/80"
                  >
                    {item.name}
                  </motion.span>
                </motion.div>
              </a>
            ))}
          </div>

          <motion.a
            href={SITE.reservationUrl}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:flex items-center gap-2 flex-shrink-0 px-6 py-2.5 rounded-full font-semibold text-sm tracking-widest uppercase text-[var(--espresso)]"
            aria-label="Email Maati Art Cafe to reserve a table"
            style={{
              background: "linear-gradient(135deg, var(--caramel) 0%, #e8c08a 50%, var(--caramel) 100%)",
              boxShadow: "0 4px 24px rgba(212,165,116,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <Coffee size={14} strokeWidth={2.5} />
            <span>Reserve</span>
          </motion.a>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[var(--caramel)]/30 text-[var(--cream)] bg-white/5 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden"
            aria-label="Mobile navigation"
            style={{ background: "rgba(10, 6, 4, 0.96)", backdropFilter: "blur(24px)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(212,165,116,0.1) 0%, transparent 70%)",
              }}
            />

            <div className="flex flex-col items-center justify-center h-full gap-2 px-8 pb-20">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12 flex flex-col items-center gap-2"
              >
                <img src="/logo.png" alt="Maati Art Cafe logo" className="w-16 h-16 object-contain drop-shadow-2xl" />
                <p className="font-serif text-[var(--caramel)] text-sm tracking-[0.4em] uppercase">
                  Maati Art Café
                </p>
              </motion.div>

              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full max-w-xs"
                >
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === item.path ? "page" : undefined}
                    className="group flex items-center justify-between w-full py-4 border-b border-[var(--caramel)]/15"
                  >
                    <span
                      className="font-serif text-4xl font-bold tracking-tight transition-colors duration-200 text-[var(--cream)]/60 group-hover:text-[var(--caramel)]"
                    >
                      {item.name}
                    </span>
                  </a>
                </motion.div>
              ))}

              <motion.a
                href={SITE.reservationUrl}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileTap={{ scale: 0.96 }}
                className="mt-12 flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-sm tracking-widest uppercase text-[var(--espresso)]"
                onClick={() => setIsOpen(false)}
                aria-label="Email Maati Art Cafe to reserve a table"
                style={{
                  background: "linear-gradient(135deg, var(--caramel), #e8c08a, var(--caramel))",
                  boxShadow: "0 8px 32px rgba(212,165,116,0.4)",
                }}
              >
                <Coffee size={16} />
                Reserve a Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
