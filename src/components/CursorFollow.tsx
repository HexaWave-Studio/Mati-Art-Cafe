import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CursorFollow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isHiddenZone, setIsHiddenZone] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isInsideHiddenZone = Boolean(
        target?.closest("[data-hide-custom-cursor='true']"),
      );

      setIsHiddenZone(isInsideHiddenZone);
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
        return;
      }

      setIsHovering(false);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsHiddenZone(false);
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
        className="fixed rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          opacity: isHiddenZone ? 0 : isHovering ? 0.4 : 0.3,
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          scale: isHiddenZone ? 0.6 : 1,
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
        className="fixed rounded-full pointer-events-none z-[9999] border-2 hidden md:block"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          borderColor: "var(--caramel)",
        }}
        animate={{
          opacity: isHiddenZone ? 0 : isHovering ? 0.8 : 0.6,
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
          scale: isHiddenZone ? 0.6 : 1,
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
          marginLeft: 12,
          marginTop: 12,
          background: "var(--cream)",
        }}
        animate={{
          opacity: isHiddenZone ? 0 : 1,
          width: isHovering ? 8 : 4,
          height: isHovering ? 8 : 4,
        }}
      />
    </>
  );
}
