import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import Masonry from "react-responsive-masonry";
import { X, Play, ZoomIn, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import FloatingParticles from "../components/FloatingParticles";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1751956066306-c5684cbcf385?w=800",
    category: "interior",
    title: "Warm Atmosphere",
  },
  {
    url: "https://images.unsplash.com/photo-1765894711185-63800b16dbba?w=800",
    category: "interior",
    title: "Modern Design",
  },
  {
    url: "https://images.unsplash.com/photo-1764002673510-4b2b0ee38078?w=800",
    category: "interior",
    title: "Cozy Corner",
  },
  {
    url: "https://images.unsplash.com/photo-1758980960366-d344cfddd004?w=800",
    category: "interior",
    title: "Natural Light",
  },
  {
    url: "https://images.unsplash.com/photo-1773927005455-8efc55a8d512?w=800",
    category: "interior",
    title: "Bright Space",
  },
  {
    url: "https://images.unsplash.com/photo-1770991934935-4bdc95292f61?w=800",
    category: "interior",
    title: "Bar Area",
  },
  {
    url: "https://images.unsplash.com/photo-1769970630294-924a48b99cb0?w=800",
    category: "drinks",
    title: "Crafted Perfection",
  },
  {
    url: "https://images.unsplash.com/photo-1769138885124-9d9e52bb3c8a?w=800",
    category: "drinks",
    title: "Latte Art",
  },
  {
    url: "https://images.unsplash.com/photo-1762657433581-15773c721a42?w=800",
    category: "drinks",
    title: "Espresso Shot",
  },
  {
    url: "https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=800",
    category: "drinks",
    title: "Coffee Beans",
  },
  {
    url: "https://images.unsplash.com/photo-1712000155326-708e81be975e?w=800",
    category: "drinks",
    title: "Morning Brew",
  },
  {
    url: "https://images.unsplash.com/photo-1665119497036-496bcf37425b?w=800",
    category: "drinks",
    title: "Cold Coffee",
  },
  {
    url: "https://images.unsplash.com/photo-1761637604549-4943604df127?w=800",
    category: "desserts",
    title: "Chocolate Delight",
  },
  {
    url: "https://images.unsplash.com/photo-1774689407321-7b0ff1c77f85?w=800",
    category: "desserts",
    title: "Fresh Strawberry",
  },
  {
    url: "https://images.unsplash.com/photo-1771069838532-0b72cd163ae1?w=800",
    category: "desserts",
    title: "Pastry Display",
  },
  {
    url: "https://images.unsplash.com/photo-1762922425248-2ef724c3ceb0?w=800",
    category: "desserts",
    title: "Sweet Treats",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
    <div ref={containerRef} className="relative min-h-screen pt-24 pb-20 px-6 overflow-hidden">
      <FloatingParticles />

      {/* Animated gradient background */}
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

      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-[var(--caramel)]/30 mb-8"
          >
            <Sparkles className="text-[var(--caramel)]" size={20} />
            <span className="text-[var(--caramel)] text-sm tracking-wider">VISUAL STORIES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-6xl md:text-7xl text-[var(--cream)] mb-6"
          >
            Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[var(--latte)] text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Step into our world. Experience the ambiance,
            <br />
            taste the artistry, feel the warmth.
          </motion.p>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-4 rounded-full transition-all ${
                filter === cat.id
                  ? "text-[var(--espresso)] shadow-2xl"
                  : "bg-white/10 text-[var(--cream)] backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              <span className="relative z-10 font-medium">{cat.label}</span>
              {filter === cat.id && (
                <motion.div
                  layoutId="galleryFilterBg"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--caramel)] to-[var(--latte)] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Enhanced Masonry Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Masonry columnsCount={3} gutter="20px">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${filter}-${index}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    type: "spring",
                    bounce: 0.3
                  }}
                  whileHover={{ scale: 1.03, y: -8, zIndex: 10 }}
                  onClick={() => setSelectedImage(index)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto"
                  />

                  {/* Enhanced overlay with animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-[var(--espresso)]/70 to-transparent flex items-end p-6"
                  >
                    <div className="w-full">
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="font-serif text-white text-2xl mb-2"
                      >
                        {image.title}
                      </motion.h3>

                      <div className="flex items-center justify-between">
                        <motion.span
                          initial={{ x: -20, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          className="text-[var(--caramel)] text-sm uppercase tracking-wider"
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
                  </motion.div>

                  {/* Enhanced glow effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.6 }}
                    className="absolute -inset-1 bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] rounded-2xl blur-2xl -z-10"
                  />
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl text-[var(--cream)] mb-6">
              Experience Our Story
            </h2>
            <p className="text-[var(--latte)] text-lg">
              Behind the scenes moments that capture our passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Art of Brewing",
                thumbnail: "https://images.unsplash.com/photo-1758845078572-36586c19f73a?w=800",
              },
              {
                title: "Behind the Scenes",
                thumbnail: "https://images.unsplash.com/photo-1762657424841-7b5166d5d54c?w=800",
              },
            ].map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
              >
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* Video overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] flex items-center justify-center shadow-2xl">
                      <Play className="text-white ml-1" size={32} />
                    </div>
                    {/* Ripple effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-[var(--caramel)]"
                    />
                  </motion.div>
                </div>

                {/* Title */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[var(--espresso)] to-transparent"
                >
                  <h3 className="font-serif text-white text-3xl">{video.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/96 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            {/* Close button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white z-20 border border-white/20"
            >
              <X size={28} />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[90vh] cursor-default"
            >
              <ImageWithFallback
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[90vh] rounded-3xl object-contain shadow-2xl"
              />

              {/* Image info */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent rounded-b-3xl"
              >
                <h3 className="font-serif text-white text-4xl mb-3">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-[var(--caramel)] text-lg uppercase tracking-wider">
                  {filteredImages[selectedImage].category}
                </p>
              </motion.div>

              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-6 pointer-events-none">
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
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white pointer-events-auto shadow-lg"
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
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white pointer-events-auto ml-auto shadow-lg"
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
