import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[var(--espresso)] via-[var(--coffee-dark)] to-[var(--mocha)]"
    >
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-2 h-2 bg-[var(--caramel)] rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        {/* Coffee cup with steam */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Cup */}
          <div className="w-32 h-32 mx-auto relative">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-[var(--caramel)] to-[var(--mocha)] rounded-b-[40%] border-4 border-[var(--cream)] shadow-2xl"
            >
              {/* Coffee liquid */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "80%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--espresso)] to-[var(--coffee-dark)] rounded-b-[40%]"
              />
            </motion.div>

            {/* Handle */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-8 h-12 border-4 border-[var(--cream)] rounded-r-full" />
          </div>

          {/* Steam particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, -60],
                x: [0, (i - 2) * 5],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-12 bg-gradient-to-t from-[var(--latte)] to-transparent rounded-full blur-sm"
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-serif text-4xl text-[var(--cream)] mb-4"
        >
          Café Noir
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[var(--latte)] mb-8"
        >
          Brewing something special...
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 h-2 mx-auto bg-[var(--coffee-dark)] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-[var(--caramel)] to-[var(--latte)] rounded-full"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-[var(--caramel)] mt-4 text-sm"
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
}
