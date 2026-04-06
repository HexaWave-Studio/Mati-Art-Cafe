import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--caramel)] via-[var(--mocha)] to-[var(--caramel)] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-[var(--caramel)] origin-left z-[90] blur-xl opacity-30"
        style={{ scaleX }}
      />
    </>
  );
}
