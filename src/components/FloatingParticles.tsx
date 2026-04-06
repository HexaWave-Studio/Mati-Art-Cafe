import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 10, // Larger, more visible size
      duration: Math.random() * 20 + 25, // Slower, more cinematic drift
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y - 50}vh`, `${particle.y}vh`],
            x: [
              `${particle.x}vw`,
              `${particle.x + 20}vw`,
              `${particle.x - 20}vw`,
              `${particle.x}vw`,
            ],
            opacity: [0, 0.8, 0.8, 0], // Higher peak opacity
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-gradient-to-br from-[var(--caramel)]/80 via-[var(--mocha)]/60 to-[var(--caramel)]/30 shadow-[0_0_20px_rgba(212,165,116,0.6)]"
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}
