import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CursorFollow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          opacity: isHovering ? 0.4 : 0.3,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, var(--caramel), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-50 border-2 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          borderColor: "var(--caramel)",
        }}
        animate={{
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
          opacity: isHovering ? 0.8 : 0.6,
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
          marginLeft: 12,
          marginTop: 12,
          background: "var(--cream)",
        }}
        animate={{
          width: isHovering ? 8 : 4,
          height: isHovering ? 8 : 4,
        }}
      />
    </>
  );
}
