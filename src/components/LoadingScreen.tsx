import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const BRAND_LETTERS = "MAATI ART CAFÉ".split("");

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"intro" | "reveal" | "exit">("intro");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll + reset position
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    // Phase timeline
    const t1 = setTimeout(() => setPhase("reveal"), 900); // drop lands → text appears
    const t2 = setTimeout(() => setPhase("exit"), 3000); // hold brand → begin exit
    const t3 = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }, 3700); // fully gone

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "ellipse(0% 0% at 50% 50%)", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex select-none flex-col items-center justify-center overflow-hidden px-4"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 60%, #3d2415 0%, #1a0c07 55%, #0a0604 100%)",
          }}
        >
          {/* ── Noise texture overlay ── */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* ── Ambient ring glow ── */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase !== "intro"
                ? { scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }
                : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "min(72vw, 480px)",
              height: "min(72vw, 480px)",
              background:
                "radial-gradient(circle, rgba(212,165,116,0.18) 0%, transparent 70%)",
            }}
          />

          {/* ── Coffee drop ── */}
          <motion.div
            className="relative mb-10"
            initial={{ y: -180, opacity: 0, scale: 0.6 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow halo behind logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                phase !== "intro"
                  ? { scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }
                  : { scale: 1, opacity: 0 }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,165,116,0.5) 0%, transparent 70%)",
                transform: "scale(1.8)",
              }}
            />

            {/* Logo with drop-bounce */}
            <motion.img
              src="/logo.png"
              alt="Maati Art Cafe"
              className="relative h-20 w-20 object-contain drop-shadow-2xl sm:h-24 sm:w-24 md:h-28 md:w-28"
              animate={
                phase === "intro"
                  ? { y: [0, -18, 0, -8, 0], rotate: [0, -4, 4, -2, 0] }
                  : { y: [0, -10, 0], rotate: [0, 3, 0] }
              }
              transition={
                phase === "intro"
                  ? { duration: 0.8, ease: "easeOut" }
                  : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
              }
            />

            {/* Ripple splash on landing */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0.8 }}
              animate={{ scaleX: 3.5, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-3 w-20 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(212,165,116,0.5) 0%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* ── Brand name letter-stagger ── */}
          <div className="flex items-center gap-0 overflow-hidden px-2 text-center">
            {BRAND_LETTERS.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32, rotateX: -60 }}
                animate={
                  phase !== "intro" ? { opacity: 1, y: 0, rotateX: 0 } : {}
                }
                transition={{
                  duration: 0.55,
                  delay: 0.05 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block font-serif text-2xl font-bold sm:text-4xl md:text-5xl ${
                  char === " " ? "w-3" : ""
                }`}
                style={{
                  color:
                    char === " "
                      ? "transparent"
                      : i < 5
                        ? "#faf7f2" // MAATI → cream
                        : "#D4A574", // ART CAFÉ → caramel
                  textShadow:
                    i >= 5 && char !== " "
                      ? "0 0 24px rgba(212,165,116,0.6)"
                      : "none",
                  letterSpacing: "0.15em",
                  transformOrigin: "bottom center",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* ── Tagline ── */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={phase !== "intro" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-4 text-[10px] font-light uppercase tracking-[0.3em] text-[var(--caramel)]/60 sm:text-xs sm:tracking-[0.45em]"
          >
            Where art meets every cup
          </motion.p>

          {/* ── Golden shimmer bar ── */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={phase !== "intro" ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 h-[1px] w-32 origin-left overflow-hidden rounded-full sm:mt-10 sm:w-48"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--caramel), transparent)",
            }}
          >
            {/* Travelling shimmer */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute inset-y-0 w-1/3 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
              }}
            />
          </motion.div>

          {/* ── Corner decorative lines ── */}
          {[
            "top-8 left-8 border-t border-l",
            "top-8 right-8 border-t border-r",
            "bottom-8 left-8 border-b border-l",
            "bottom-8 right-8 border-b border-r",
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={phase !== "intro" ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
              className={`absolute h-6 w-6 border-[var(--caramel)]/25 sm:h-8 sm:w-8 ${cls}`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
