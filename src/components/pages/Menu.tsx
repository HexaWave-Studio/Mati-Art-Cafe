import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Sparkles, Star } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import { menuCategories, menuData } from "@/lib/menu-data";
import { SITE } from "@/lib/site";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="relative min-h-screen overflow-hidden px-6 pb-20 pt-24">
      <FloatingParticles />

      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[var(--cream)] via-[var(--latte)] to-[var(--cream)]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <header className="mb-16 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--caramel)]/20 bg-[var(--mocha)]/10 px-6 py-3 backdrop-blur-sm"
          >
            <Sparkles className="text-[var(--caramel)]" size={20} />
            <span className="text-sm tracking-wider text-[var(--mocha)]">
              CURATED SELECTIONS
            </span>
          </motion.div>

          <motion.h1
            id="menu-page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 font-serif text-6xl text-[var(--espresso)] md:text-7xl"
          >
            Our Menu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-[var(--coffee-light)]"
          >
            Explore artisan coffee, espresso drinks, breakfast favorites,
            pastries, and desserts served in handcrafted ceramics at Maati Art
            Cafe in Brooklyn.
          </motion.p>
        </header>

        <section aria-labelledby="menu-categories-title" className="mb-20">
          <h2 id="menu-categories-title" className="sr-only">
            Menu categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {menuCategories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-full px-8 py-4 transition-all ${
                  selectedCategory === category
                    ? "text-[var(--cream)] shadow-2xl"
                    : "bg-white/70 text-[var(--coffee-dark)] shadow-lg backdrop-blur-sm hover:bg-white"
                }`}
                aria-pressed={selectedCategory === category}
              >
                <span className="relative z-10 font-medium">{category}</span>
                {selectedCategory === category && (
                  <motion.div
                    layoutId="categoryBackground"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </section>

        <section aria-labelledby="menu-items-title">
          <h2 id="menu-items-title" className="sr-only">
            Menu items
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredMenu.map((item, index) => (
                <motion.article
                  key={`${item.category}-${item.name}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    type: "spring",
                    bounce: 0.3,
                  }}
                  whileHover={{
                    y: -15,
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.03,
                  }}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group relative overflow-hidden rounded-3xl bg-white/90 shadow-2xl backdrop-blur-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredItem === item.name ? 1.2 : 1,
                        rotate: hoveredItem === item.name ? 3 : 0,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full w-full"
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.name ? 0.8 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-[var(--coffee-dark)]/50 to-transparent"
                    />

                    {hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
                        transition={{ duration: 0.6 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      >
                        <Star
                          className="fill-[var(--caramel)] text-[var(--caramel)]"
                          size={48}
                        />
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute right-6 top-6 rounded-full border-2 border-white/30 bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] px-5 py-3 text-white shadow-2xl backdrop-blur-sm"
                    >
                      <span className="text-lg font-medium">{item.price}</span>
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <h3 className="mb-3 font-serif text-3xl text-[var(--espresso)] transition-colors group-hover:text-[var(--mocha)]">
                      {item.name}
                    </h3>

                    <p className="mb-5 text-base leading-relaxed text-[var(--coffee-light)]">
                      {item.description}
                    </p>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.08 + 0.4 }}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--latte)] to-[var(--cream)] px-4 py-2 text-sm text-[var(--coffee-dark)]"
                    >
                      <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--caramel)]" />
                      {item.category}
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{
                      opacity: hoveredItem === item.name ? 0.6 : 0,
                      scale: hoveredItem === item.name ? 1 : 0.8,
                    }}
                    className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-[var(--caramel)] via-[var(--mocha)] to-[var(--caramel)] blur-3xl"
                  />

                  <motion.div
                    animate={{
                      opacity: hoveredItem === item.name ? 1 : 0,
                      x: hoveredItem === item.name ? "100%" : "-100%",
                    }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-32 text-center"
          aria-labelledby="menu-visit-title"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--mocha)] to-[var(--espresso)] p-16 shadow-2xl backdrop-blur-xl">
            <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-[var(--caramel)]/20 blur-2xl" />
            <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-[var(--caramel)]/20 blur-3xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--caramel)]/10"
            />

            <div className="relative z-10">
              <h2
                id="menu-visit-title"
                className="mb-6 font-serif text-4xl text-[var(--cream)]"
              >
                Can&apos;t Decide?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--latte)]">
                Let our baristas guide you to the right roast, drink, or dessert
                pairing when you visit Maati Art Cafe.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 20px 60px rgba(212, 165, 116, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-gradient-to-r from-[var(--caramel)] to-[var(--latte)] px-12 py-5 text-lg font-medium text-[var(--espresso)] shadow-2xl"
                >
                  Visit Us Today
                </motion.a>
                <motion.a
                  href={SITE.reservationUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border border-[var(--caramel)]/40 px-12 py-5 text-lg font-medium text-[var(--cream)]"
                >
                  Reserve by Email
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
