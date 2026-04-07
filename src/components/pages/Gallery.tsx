import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { X, Play, ZoomIn, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import FloatingParticles from "@/components/FloatingParticles";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1751956066306-c5684cbcf385?w=800",
    category: "interior",
    title: "Warm Atmosphere",
    alt: "Warm interior atmosphere inside Maati Art Cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1765894711185-63800b16dbba?w=800",
    category: "interior",
    title: "Modern Design",
    alt: "Modern design details and seating inside the cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1764002673510-4b2b0ee38078?w=800",
    category: "interior",
    title: "Cozy Corner",
    alt: "Cozy corner seating at Maati Art Cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1758980960366-d344cfddd004?w=800",
    category: "interior",
    title: "Natural Light",
    alt: "Natural light across a styled cafe table",
  },
  {
    url: "https://images.unsplash.com/photo-1773927005455-8efc55a8d512?w=800",
    category: "interior",
    title: "Bright Space",
    alt: "Bright open space inside Maati Art Cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1770991934935-4bdc95292f61?w=800",
    category: "interior",
    title: "Bar Area",
    alt: "Coffee bar area and service counter",
  },
  {
    url: "https://images.unsplash.com/photo-1769970630294-924a48b99cb0?w=800",
    category: "drinks",
    title: "Crafted Perfection",
    alt: "Signature cold coffee drink at Maati Art Cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1769138885124-9d9e52bb3c8a?w=800",
    category: "drinks",
    title: "Latte Art",
    alt: "Latte art presented in a ceramic cup",
  },
  {
    url: "https://images.unsplash.com/photo-1762657433581-15773c721a42?w=800",
    category: "drinks",
    title: "Espresso Shot",
    alt: "Espresso shot served by Maati Art Cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=800",
    category: "drinks",
    title: "Coffee Beans",
    alt: "Coffee bean preparation and brewing detail",
  },
  {
    url: "https://images.unsplash.com/photo-1712000155326-708e81be975e?w=800",
    category: "drinks",
    title: "Morning Brew",
    alt: "Morning brew served in Maati Art Cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1665119497036-496bcf37425b?w=800",
    category: "drinks",
    title: "Cold Coffee",
    alt: "Cold coffee poured over ice",
  },
  {
    url: "https://images.unsplash.com/photo-1761637604549-4943604df127?w=800",
    category: "desserts",
    title: "Chocolate Delight",
    alt: "Chocolate dessert plated at Maati Art Cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1774689407321-7b0ff1c77f85?w=800",
    category: "desserts",
    title: "Fresh Strawberry",
    alt: "Fresh strawberry dessert in the cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1771069838532-0b72cd163ae1?w=800",
    category: "desserts",
    title: "Pastry Display",
    alt: "Pastry display with baked goods at Maati Art Cafe",
  },
  {
    url: "https://images.unsplash.com/photo-1762922425248-2ef724c3ceb0?w=800",
    category: "desserts",
    title: "Sweet Treats",
    alt: "Sweet treats and desserts served at the cafe",
  },
] as const;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const categories = [
    { id: "all", label: "All" },
    { id: "interior", label: "Interior" },
    { id: "drinks", label: "Drinks" },
    { id: "desserts", label: "Desserts" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24"
    >
      <FloatingParticles />

      <motion.div
        animate={{
          background: [
            "linear-gradient(135deg, var(--espresso) 0%, var(--coffee-dark) 50%, var(--mocha) 100%)",
            "linear-gradient(135deg, var(--mocha) 0%, var(--espresso) 50%, var(--coffee-dark) 100%)",
            "linear-gradient(135deg, var(--espresso) 0%, var(--coffee-dark) 50%, var(--mocha) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 -z-10"
      />

      <motion.header
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="mb-12 text-center sm:mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--caramel)]/30 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:mb-8 sm:px-6 sm:py-3"
          >
            <Sparkles className="text-[var(--caramel)]" size={20} />
            <span className="text-xs tracking-[0.2em] text-[var(--caramel)] sm:text-sm sm:tracking-wider">
              VISUAL STORIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-serif text-5xl text-[var(--cream)] sm:mb-6 sm:text-6xl md:text-7xl"
          >
            Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--latte)] sm:text-xl"
          >
            Explore the interiors, coffee craft, plated desserts, and visual
            details that give Maati Art Cafe its gallery-like personality.
          </motion.p>
        </div>
      </motion.header>

      <main className="relative z-10 mx-auto max-w-7xl">
        <section
          aria-labelledby="gallery-filters-title"
          className="mb-12 sm:mb-16"
        >
          <h2 id="gallery-filters-title" className="sr-only">
            Gallery filters
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-full px-6 py-3 transition-all sm:px-8 sm:py-4 ${
                  filter === cat.id
                    ? "text-[var(--espresso)] shadow-2xl"
                    : "bg-white/10 text-[var(--cream)] backdrop-blur-sm hover:bg-white/20"
                }`}
                aria-pressed={filter === cat.id}
              >
                <span className="relative z-10 font-medium">{cat.label}</span>
                {filter === cat.id && (
                  <motion.div
                    layoutId="galleryFilterBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--caramel)] to-[var(--latte)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </section>

        <section aria-labelledby="gallery-grid-title">
          <h2 id="gallery-grid-title" className="sr-only">
            Gallery images
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 0: 1, 640: 2, 960: 3 }}
              >
                <Masonry gutter="24px">
                  {filteredImages.map((image, index) => (
                    <motion.figure
                      key={`${filter}-${image.url}`}
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      whileHover={{ scale: 1.03, y: -8, zIndex: 10 }}
                      onClick={() => setSelectedImage(index)}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl"
                    >
                      <ImageWithFallback
                        src={image.url}
                        alt={image.alt}
                        className="h-auto w-full"
                      />

                      <motion.figcaption
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--espresso)] via-[var(--espresso)]/70 to-transparent p-6"
                      >
                        <div className="w-full">
                          <motion.h3
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            className="mb-2 font-serif text-2xl text-white"
                          >
                            {image.title}
                          </motion.h3>

                          <div className="flex items-center justify-between">
                            <motion.span
                              initial={{ x: -20, opacity: 0 }}
                              whileHover={{ x: 0, opacity: 1 }}
                              className="text-sm uppercase tracking-wider text-[var(--caramel)]"
                            >
                              {image.category}
                            </motion.span>

                            <motion.div
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1, rotate: 360 }}
                              transition={{ type: "spring" }}
                            >
                              <ZoomIn className="text-white" size={24} />
                            </motion.div>
                          </div>
                        </div>
                      </motion.figcaption>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.6 }}
                        className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] blur-2xl"
                      />
                    </motion.figure>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </motion.div>
          </AnimatePresence>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-32"
          aria-labelledby="gallery-story-title"
        >
          <div className="mb-16 text-center">
            <h2
              id="gallery-story-title"
              className="mb-4 font-serif text-4xl text-[var(--cream)] sm:mb-6 sm:text-5xl"
            >
              Experience Our Story
            </h2>
            <p className="text-base text-[var(--latte)] sm:text-lg">
              Behind-the-scenes moments that capture our coffee craft and visual
              atmosphere
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "The Art of Brewing",
                thumbnail:
                  "https://images.unsplash.com/photo-1758845078572-36586c19f73a?w=800",
                alt: "Barista coffee brewing process at Maati Art Cafe",
              },
              {
                title: "Behind the Scenes",
                thumbnail:
                  "https://images.unsplash.com/photo-1762657424841-7b5166d5d54c?w=800",
                alt: "Behind the scenes preparation inside the cafe",
              },
            ].map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
              >
                <ImageWithFallback
                  src={story.thumbnail}
                  alt={story.alt}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/20">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] shadow-2xl sm:h-20 sm:w-20">
                      <Play className="ml-1 text-white" size={24} />
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-[var(--caramel)]"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--espresso)] to-transparent p-6 sm:p-8"
                >
                  <h3 className="font-serif text-2xl text-white sm:text-3xl">
                    {story.title}
                  </h3>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/96 p-4 backdrop-blur-xl sm:p-6"
          >
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm sm:right-8 sm:top-8 sm:h-14 sm:w-14"
              aria-label="Close image viewer"
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl cursor-default sm:max-w-6xl"
            >
              <ImageWithFallback
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].alt}
                className="max-h-[90vh] max-w-full rounded-3xl object-contain shadow-2xl"
              />

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 rounded-b-3xl bg-gradient-to-t from-black/90 to-transparent p-5 sm:p-8"
              >
                <h3 className="mb-2 font-serif text-2xl text-white sm:mb-3 sm:text-4xl">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-sm uppercase tracking-wider text-[var(--caramel)] sm:text-lg">
                  {filteredImages[selectedImage].category}
                </p>
              </motion.div>

              <div className="pointer-events-none absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-3 sm:px-6">
                {selectedImage > 0 && (
                  <motion.button
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.2, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(selectedImage - 1);
                    }}
                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md sm:h-14 sm:w-14"
                    aria-label="View previous gallery image"
                  >
                    <span className="text-2xl">←</span>
                  </motion.button>
                )}

                {selectedImage < filteredImages.length - 1 && (
                  <motion.button
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ scale: 1.2, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(selectedImage + 1);
                    }}
                    className="pointer-events-auto ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md sm:h-14 sm:w-14"
                    aria-label="View next gallery image"
                  >
                    <span className="text-2xl">→</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
