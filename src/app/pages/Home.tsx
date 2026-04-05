import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, MapPin, Star, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import FloatingParticles from "../components/FloatingParticles";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refs for stacking sections
  const heroRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const drinksRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Hero scroll animations
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(heroProgress, [0, 1], [0, -100]);

  // Menu section scroll
  const { scrollYProgress: menuProgress } = useScroll({
    target: menuRef,
    offset: ["start end", "end start"],
  });

  const menuScale = useTransform(menuProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const menuOpacity = useTransform(menuProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  // Drinks section scroll
  const { scrollYProgress: drinksProgress } = useScroll({
    target: drinksRef,
    offset: ["start end", "end start"],
  });

  const drinksScale = useTransform(drinksProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const drinksY = useTransform(drinksProgress, [0, 0.2], [100, 0]);

  // Gallery section scroll
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const galleryScale = useTransform(galleryProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);

  const menuItems = [
    {
      title: "Coffee",
      image: "https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=800",
      description: "Artisan coffee from around the world",
    },
    {
      title: "Desserts",
      image: "https://images.unsplash.com/photo-1761637604549-4943604df127?w=800",
      description: "Handcrafted pastries and cakes",
    },
    {
      title: "Breakfast",
      image: "https://images.unsplash.com/photo-1769264963680-95a86383a483?w=800",
      description: "Start your day right",
    },
    {
      title: "Signature Drinks",
      image: "https://images.unsplash.com/photo-1769970630294-924a48b99cb0?w=800",
      description: "Exclusive café creations",
    },
  ];

  const signatureDrinks = [
    {
      name: "Golden Latte",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1769138885124-9d9e52bb3c8a?w=600",
      description: "Turmeric, honey, and steamed milk",
    },
    {
      name: "Espresso Martini",
      price: "$8.00",
      image: "https://images.unsplash.com/photo-1762657433581-15773c721a42?w=600",
      description: "Cold brew, vodka, and vanilla",
    },
    {
      name: "Caramel Cloud",
      price: "$7.00",
      image: "https://images.unsplash.com/photo-1665119497036-496bcf37425b?w=600",
      description: "Cold foam with caramel drizzle",
    },
    {
      name: "Mocha Velvet",
      price: "$6.00",
      image: "https://images.unsplash.com/photo-1712000155326-708e81be975e?w=600",
      description: "Dark chocolate and espresso",
    },
  ];

  const reviews = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      text: "The ambiance is unmatched. Every visit feels like a luxurious escape.",
    },
    {
      name: "James Chen",
      rating: 5,
      text: "Best coffee in the city. The baristas are true artists.",
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "A perfect blend of cozy atmosphere and premium quality.",
    },
  ];

  return (
    <div ref={containerRef} className="relative">
      <FloatingParticles />

      {/* Hero Section - Fixed Background */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--espresso)]/80 via-[var(--coffee-dark)]/60 to-[var(--espresso)]/90 z-10" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1751956066306-c5684cbcf385?w=1920"
              alt="Coffee brewing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Floating coffee beans with 3D effect */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0, rotateX: 0, rotateY: 0 }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3],
              rotateX: [0, 360],
              rotateY: [0, 180],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] shadow-lg"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${25 + Math.floor(i / 4) * 20}%`,
              filter: "drop-shadow(0 0 10px rgba(212, 165, 116, 0.5))",
            }}
          />
        ))}

        {/* 3D Floating coffee cup */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
            rotateY: [0, 5, 0],
            rotateX: [0, 5, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute right-[10%] top-1/4 w-40 h-40 opacity-30"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] rounded-b-[45%] border-8 border-[var(--latte)] shadow-2xl" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--mocha)]/40 backdrop-blur-md rounded-full border border-[var(--caramel)]/30 mb-8"
            >
              <Sparkles className="text-[var(--caramel)]" size={20} />
              <span className="text-[var(--cream)] text-sm tracking-wider">ARTISAN COFFEE EXPERIENCE</span>
            </motion.div>

            <h1 className="font-serif text-6xl md:text-8xl text-[var(--cream)] mb-8 leading-tight">
              Experience Coffee
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--caramel)] via-[var(--latte)] to-[var(--caramel)]">
                Like Never Before
              </span>
            </h1>

            <p className="text-[var(--latte)] text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Where passion meets perfection in every cup.
              <br />
              Immerse yourself in the art of coffee.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link to="/menu">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 20px 60px rgba(212, 165, 116, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] text-white rounded-full overflow-hidden"
                >
                  <span className="relative z-10 font-medium">Explore Menu</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[var(--mocha)] to-[var(--caramel)]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-[var(--cream)] text-[var(--cream)] rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                Visit Us
              </motion.button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="text-[var(--caramel)]" size={40} />
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Menu Section - Stacks over Hero */}
      <motion.section
        ref={menuRef}
        style={{ scale: menuScale, opacity: menuOpacity }}
        className="sticky top-0 min-h-screen py-32 px-6 bg-gradient-to-b from-[var(--cream)] via-[var(--latte)] to-[var(--cream)] rounded-t-[50px] shadow-2xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="text-[var(--caramel)] text-sm tracking-[0.3em] uppercase">Curated Selection</span>
            </motion.div>
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--espresso)] mb-6">
              Our Menu
            </h2>
            <p className="text-[var(--coffee-light)] text-lg max-w-2xl mx-auto">
              Every item crafted with passion, precision, and the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  rotateY: 8,
                  rotateX: 8,
                  scale: 1.05,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl cursor-pointer"
              >
                <div className="aspect-square overflow-hidden relative">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 3 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "radial-gradient(circle at center, rgba(212, 165, 116, 0.3), transparent 70%)",
                    }}
                  />
                </div>

                {/* Content - slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-3xl mb-3">{item.title}</h3>
                  <p className="text-sm opacity-90 text-[var(--latte)]">{item.description}</p>
                </div>

                {/* Title when not hovering */}
                <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-serif text-2xl text-[var(--espresso)]">{item.title}</h3>
                </div>

                {/* Border glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 -z-10"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[var(--mocha)] text-[var(--cream)] rounded-full shadow-lg hover:shadow-2xl transition-shadow"
              >
                View Full Menu
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Signature Drinks Section - Stacks over Menu */}
      <motion.section
        ref={drinksRef}
        style={{ scale: drinksScale, y: drinksY }}
        className="sticky top-0 min-h-screen py-32 px-6 bg-gradient-to-br from-[var(--mocha)] via-[var(--coffee-dark)] to-[var(--espresso)] rounded-t-[50px] shadow-2xl z-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="text-[var(--caramel)] text-sm tracking-[0.3em] uppercase">Exclusive</span>
            </motion.div>
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--cream)] mb-6">
              Signature Creations
            </h2>
            <p className="text-[var(--latte)] text-lg max-w-2xl mx-auto">
              Handcrafted masterpieces that define our artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDrinks.map((drink, index) => (
              <motion.div
                key={drink.name}
                initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 5,
                  y: -15
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/10 p-6 border border-white/20 shadow-2xl">
                  {/* Image with zoom effect */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-square mb-6 rounded-2xl overflow-hidden"
                  >
                    <ImageWithFallback
                      src={drink.image}
                      alt={drink.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient glow overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "radial-gradient(circle at center, rgba(212, 165, 116, 0.2), transparent 70%)",
                    }}
                  />

                  <h3 className="font-serif text-2xl text-[var(--cream)] mb-2">{drink.name}</h3>
                  <p className="text-sm text-[var(--latte)] mb-4">{drink.description}</p>
                  <p className="text-2xl text-[var(--caramel)]">{drink.price}</p>
                </div>

                {/* Enhanced glow effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[var(--caramel)] via-[var(--latte)] to-[var(--mocha)] rounded-3xl opacity-0 group-hover:opacity-50 blur-3xl transition-opacity duration-500 -z-10"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Gallery Preview Section - Stacks over Drinks */}
      <motion.section
        ref={galleryRef}
        style={{ scale: galleryScale }}
        className="sticky top-0 min-h-screen py-32 px-6 bg-gradient-to-b from-[var(--espresso)] via-[var(--coffee-dark)] to-[var(--espresso)] rounded-t-[50px] shadow-2xl z-30"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="text-[var(--caramel)] text-sm tracking-[0.3em] uppercase">Atmosphere</span>
            </motion.div>
            <h2 className="font-serif text-5xl md:text-7xl text-[var(--cream)] mb-6">
              Ambience
            </h2>
            <p className="text-[var(--latte)] text-lg max-w-2xl mx-auto">
              Step into a world where every corner tells a story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              "https://images.unsplash.com/photo-1751956066306-c5684cbcf385?w=600",
              "https://images.unsplash.com/photo-1765894711185-63800b16dbba?w=600",
              "https://images.unsplash.com/photo-1764002673510-4b2b0ee38078?w=600",
              "https://images.unsplash.com/photo-1758980960366-d344cfddd004?w=600",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  rotateZ: index % 2 === 0 ? 3 : -3
                }}
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] text-white rounded-full shadow-lg"
              >
                View Full Gallery
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Reviews Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[var(--cream)] to-[var(--latte)] z-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-[var(--espresso)] text-center mb-20">
            What Our Guests Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="backdrop-blur-xl bg-white/80 p-10 rounded-3xl border border-[var(--border)] shadow-xl"
              >
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="text-[var(--caramel)] fill-[var(--caramel)]" size={24} />
                    </motion.div>
                  ))}
                </div>
                <p className="text-[var(--coffee-dark)] text-lg mb-8 italic leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-[var(--mocha)] font-medium">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[var(--espresso)] to-[var(--coffee-dark)] z-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <MapPin className="mx-auto text-[var(--caramel)]" size={64} />
          </motion.div>

          <h2 className="font-serif text-5xl md:text-6xl text-[var(--cream)] mb-8">
            Visit Us
          </h2>
          <p className="text-[var(--latte)] text-xl mb-12">
            123 Coffee Street, Brooklyn, NY 11201
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <motion.a
              href="https://maps.app.goo.gl/oFR8L1Mm8uqFAiLV9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] text-white rounded-full shadow-lg"
            >
              Get Directions
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-[var(--cream)] text-[var(--cream)] rounded-full backdrop-blur-sm bg-white/10"
            >
              Reserve a Table
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[var(--coffee-dark)] text-[var(--latte)] py-16 px-6 z-40">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="mb-6">© 2026 Café Noir. All rights reserved.</p>
            <div className="flex gap-8 justify-center">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, color: "var(--caramel)", y: -5 }}
                  className="hover:text-[var(--caramel)] transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
