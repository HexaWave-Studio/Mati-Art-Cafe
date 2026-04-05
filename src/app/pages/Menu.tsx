import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Sparkles, Star } from "lucide-react";
import FloatingParticles from "../components/FloatingParticles";

const categories = ["All", "Coffee", "Espresso", "Cold Coffee", "Desserts", "Breakfast", "Snacks"];

const menuData = [
  {
    category: "Coffee",
    name: "Classic Americano",
    description: "Rich espresso with hot water",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1712000155326-708e81be975e?w=600",
  },
  {
    category: "Coffee",
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1633677224449-7787d6ed2985?w=600",
  },
  {
    category: "Coffee",
    name: "Flat White",
    description: "Smooth microfoam over espresso",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1658933933131-c4ff2aabc70d?w=600",
  },
  {
    category: "Espresso",
    name: "Double Espresso",
    description: "Bold and intense",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1762657433581-15773c721a42?w=600",
  },
  {
    category: "Espresso",
    name: "Macchiato",
    description: "Espresso with a dollop of foam",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=600",
  },
  {
    category: "Cold Coffee",
    name: "Iced Latte",
    description: "Smooth cold brew with milk",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1769138885124-9d9e52bb3c8a?w=600",
  },
  {
    category: "Cold Coffee",
    name: "Cold Brew",
    description: "24-hour steeped perfection",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1665119497036-496bcf37425b?w=600",
  },
  {
    category: "Cold Coffee",
    name: "Nitro Cold Brew",
    description: "Smooth, creamy, cascading",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1769970630294-924a48b99cb0?w=600",
  },
  {
    category: "Desserts",
    name: "Chocolate Cake",
    description: "Rich dark chocolate layers",
    price: "$7.00",
    image: "https://images.unsplash.com/photo-1761637604549-4943604df127?w=600",
  },
  {
    category: "Desserts",
    name: "Strawberry Shortcake",
    description: "Fresh berries and cream",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1774689407321-7b0ff1c77f85?w=600",
  },
  {
    category: "Desserts",
    name: "Tiramisu",
    description: "Classic Italian dessert",
    price: "$7.50",
    image: "https://images.unsplash.com/photo-1761637604893-f049f46d2bcd?w=600",
  },
  {
    category: "Desserts",
    name: "Cheesecake",
    description: "New York style perfection",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1764445415300-0e07729dfc4a?w=600",
  },
  {
    category: "Breakfast",
    name: "Croissant",
    description: "Buttery, flaky, French",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1762922425248-2ef724c3ceb0?w=600",
  },
  {
    category: "Breakfast",
    name: "Avocado Toast",
    description: "Sourdough with fresh avocado",
    price: "$9.00",
    image: "https://images.unsplash.com/photo-1773399159452-0b9b205c751f?w=600",
  },
  {
    category: "Breakfast",
    name: "Bagel & Lox",
    description: "Smoked salmon on fresh bagel",
    price: "$10.00",
    image: "https://images.unsplash.com/photo-1774988861608-0c46bbee0dfb?w=600",
  },
  {
    category: "Snacks",
    name: "Muffins",
    description: "Blueberry or chocolate chip",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1771069838532-0b72cd163ae1?w=600",
  },
  {
    category: "Snacks",
    name: "Cookies",
    description: "Freshly baked daily",
    price: "$2.50",
    image: "https://images.unsplash.com/photo-1762267660021-8f501db38ee1?w=600",
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-6 overflow-hidden">
      <FloatingParticles />

      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[var(--cream)] via-[var(--latte)] to-[var(--cream)] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--mocha)]/10 backdrop-blur-sm rounded-full border border-[var(--caramel)]/20 mb-6"
          >
            <Sparkles className="text-[var(--caramel)]" size={20} />
            <span className="text-[var(--mocha)] text-sm tracking-wider">CURATED SELECTIONS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-6xl md:text-7xl text-[var(--espresso)] mb-6"
          >
            Our Menu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[var(--coffee-light)] text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Crafted with passion, served with love.
            <br />
            Every item is a celebration of flavor and quality.
          </motion.p>
        </div>

        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-4 rounded-full transition-all ${
                selectedCategory === category
                  ? "text-[var(--cream)] shadow-2xl"
                  : "bg-white/70 backdrop-blur-sm text-[var(--coffee-dark)] hover:bg-white shadow-lg"
              }`}
            >
              <span className="relative z-10 font-medium">{category}</span>
              {selectedCategory === category && (
                <motion.div
                  layoutId="categoryBackground"
                  className="absolute inset-0 bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Enhanced Menu Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredMenu.map((item, index) => (
              <motion.div
                key={`${item.category}-${item.name}`}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  bounce: 0.3
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
                className="group relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              >
                {/* Image with enhanced effects */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.div
                    animate={{
                      scale: hoveredItem === item.name ? 1.2 : 1,
                      rotate: hoveredItem === item.name ? 3 : 0
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Animated gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredItem === item.name ? 0.8 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-[var(--coffee-dark)]/50 to-transparent"
                  />

                  {/* Sparkle effect on hover */}
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 1.5] }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <Star className="text-[var(--caramel)] fill-[var(--caramel)]" size={48} />
                    </motion.div>
                  )}

                  {/* Animated price badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute top-6 right-6 bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] text-white px-5 py-3 rounded-full backdrop-blur-sm shadow-2xl border-2 border-white/30"
                  >
                    <span className="font-medium text-lg">{item.price}</span>
                  </motion.div>
                </div>

                {/* Enhanced content section */}
                <div className="p-8">
                  <motion.h3
                    className="font-serif text-3xl text-[var(--espresso)] mb-3 group-hover:text-[var(--mocha)] transition-colors"
                  >
                    {item.name}
                  </motion.h3>

                  <p className="text-[var(--coffee-light)] text-base mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Category badge with animation */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08 + 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--latte)] to-[var(--cream)] text-[var(--coffee-dark)] text-sm rounded-full"
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--caramel)] animate-pulse" />
                    {item.category}
                  </motion.div>
                </div>

                {/* Enhanced glow effect */}
                <motion.div
                  animate={{
                    opacity: hoveredItem === item.name ? 0.6 : 0,
                    scale: hoveredItem === item.name ? 1 : 0.8
                  }}
                  className="absolute -inset-2 bg-gradient-to-r from-[var(--caramel)] via-[var(--mocha)] to-[var(--caramel)] rounded-3xl blur-3xl -z-10"
                />

                {/* Light reflection effect */}
                <motion.div
                  animate={{
                    opacity: hoveredItem === item.name ? 1 : 0,
                    x: hoveredItem === item.name ? "100%" : "-100%"
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                  style={{ transform: "skewX(-20deg)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-[var(--mocha)] to-[var(--espresso)] rounded-3xl p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-[var(--caramel)]/20 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[var(--caramel)]/20 rounded-full blur-3xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[var(--caramel)]/10 rounded-full"
            />

            <div className="relative z-10">
              <h2 className="font-serif text-4xl text-[var(--cream)] mb-6">
                Can't Decide?
              </h2>
              <p className="text-[var(--latte)] text-lg mb-8 max-w-2xl mx-auto">
                Let our expert baristas recommend the perfect drink for you.
                <br />
                Experience personalized coffee craftsmanship.
              </p>
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(212, 165, 116, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-[var(--caramel)] to-[var(--latte)] text-[var(--espresso)] rounded-full shadow-2xl font-medium text-lg"
              >
                Visit Us Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
