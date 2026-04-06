import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Mail, MapPin, Phone, Star, Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import FloatingParticles from "@/components/FloatingParticles";
import { SITE, getAddressText } from "@/lib/site";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const addressText = getAddressText();

  const heroRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const drinksRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(heroProgress, [0, 1], [0, -100]);

  const { scrollYProgress: menuProgress } = useScroll({
    target: menuRef,
    offset: ["start end", "end start"],
  });

  const menuScale = useTransform(menuProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const menuOpacity = useTransform(menuProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  const { scrollYProgress: drinksProgress } = useScroll({
    target: drinksRef,
    offset: ["start end", "end start"],
  });

  const drinksScale = useTransform(drinksProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const drinksY = useTransform(drinksProgress, [0, 0.2], [100, 0]);

  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const galleryScale = useTransform(galleryProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);

  const { scrollYProgress: reviewsProgress } = useScroll({
    target: reviewsRef,
    offset: ["start end", "end start"],
  });

  const reviewsScale = useTransform(reviewsProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuItems = [
    {
      title: "Coffee",
      image: "https://images.unsplash.com/photo-1764361276489-79b17d9a8782?w=800",
      description: "Artisan coffee from around the world",
      alt: "Freshly brewed coffee at Maati Art Cafe",
    },
    {
      title: "Desserts",
      image: "https://images.unsplash.com/photo-1761637604549-4943604df127?w=800",
      description: "Handcrafted pastries and cakes",
      alt: "Handcrafted desserts plated at Maati Art Cafe",
    },
    {
      title: "Breakfast",
      image: "https://images.unsplash.com/photo-1769264963680-95a86383a483?w=800",
      description: "Start your day right",
      alt: "Breakfast plate served in the cafe",
    },
    {
      title: "Signature Drinks",
      image: "https://images.unsplash.com/photo-1769970630294-924a48b99cb0?w=800",
      description: "Exclusive cafe creations",
      alt: "Signature cold coffee creation at Maati Art Cafe",
    },
  ];

  const signatureDrinks = [
    {
      name: "Golden Latte",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1769138885124-9d9e52bb3c8a?w=600",
      description: "Turmeric, honey, and steamed milk",
      alt: "Golden latte served in a handcrafted ceramic cup",
    },
    {
      name: "Espresso Martini",
      price: "$8.00",
      image: "https://images.unsplash.com/photo-1762657433581-15773c721a42?w=600",
      description: "Cold brew, vodka, and vanilla",
      alt: "Espresso martini styled signature drink",
    },
    {
      name: "Caramel Cloud",
      price: "$7.00",
      image: "https://images.unsplash.com/photo-1665119497036-496bcf37425b?w=600",
      description: "Cold foam with caramel drizzle",
      alt: "Caramel cloud iced coffee with cold foam",
    },
    {
      name: "Mocha Velvet",
      price: "$6.00",
      image: "https://images.unsplash.com/photo-1712000155326-708e81be975e?w=600",
      description: "Dark chocolate and espresso",
      alt: "Mocha velvet coffee with dark chocolate notes",
    },
  ];

  const galleryPreview = [
    {
      url: "https://images.unsplash.com/photo-1751956066306-c5684cbcf385?w=600",
      alt: "Warm cafe interior at Maati Art Cafe",
    },
    {
      url: "https://images.unsplash.com/photo-1765894711185-63800b16dbba?w=600",
      alt: "Modern cafe seating and interior design",
    },
    {
      url: "https://images.unsplash.com/photo-1764002673510-4b2b0ee38078?w=600",
      alt: "Cozy corner seating inside the cafe",
    },
    {
      url: "https://images.unsplash.com/photo-1758980960366-d344cfddd004?w=600",
      alt: "Sunlit cafe table setting at Maati Art Cafe",
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

      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
        aria-labelledby="home-hero-title"
      >
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[var(--espresso)]/80 via-[var(--coffee-dark)]/60 to-[var(--espresso)]/90" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1751956066306-c5684cbcf385?w=1920"
              alt="Maati Art Cafe interior with coffee service and warm lighting"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
            />
          </motion.div>
        </div>

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
            className="absolute h-6 w-6 rounded-full bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] shadow-lg"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${25 + Math.floor(i / 4) * 20}%`,
              filter: "drop-shadow(0 0 10px rgba(212, 165, 116, 0.5))",
            }}
          />
        ))}

        <div className="relative z-20 mt-12 max-w-5xl px-6 pt-24 text-center md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--caramel)]/30 bg-[var(--mocha)]/40 px-6 py-3 backdrop-blur-md"
            >
              <Sparkles className="text-[var(--caramel)]" size={20} />
              <span className="text-sm tracking-wider text-[var(--cream)]">
                ARTISAN COFFEE EXPERIENCE
              </span>
            </motion.div>

            <h1
              id="home-hero-title"
              className="mb-8 font-serif text-6xl leading-tight text-[var(--cream)] md:text-8xl"
            >
              Experience Coffee
              <br />
              <span className="bg-gradient-to-r from-[var(--caramel)] via-[var(--latte)] to-[var(--caramel)] bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-[var(--latte)] md:text-2xl">
              Where artisan coffee, handcrafted ceramics, and gallery-inspired interiors come
              together in the heart of Brooklyn.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="/menu"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 20px 60px rgba(212, 165, 116, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] px-10 py-5 text-white"
              >
                <span className="relative z-10 font-medium">Explore Menu</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--mocha)] to-[var(--caramel)]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#visit"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-[var(--cream)] bg-white/10 px-10 py-5 text-[var(--cream)] backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Visit Us
              </motion.a>
            </div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16 flex w-full justify-center"
            >
              <ChevronDown className="text-[var(--caramel)] drop-shadow-lg" size={48} />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={menuRef}
        style={{ scale: menuScale, opacity: menuOpacity }}
        className="sticky top-0 z-10 flex min-h-screen flex-col justify-center rounded-t-[50px] bg-gradient-to-b from-[var(--cream)] via-[var(--latte)] to-[var(--cream)] px-4 py-16 shadow-2xl lg:py-20"
        aria-labelledby="home-menu-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-7xl origin-center scale-90 lg:scale-95"
        >
          <div className="mb-10 text-center md:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 inline-block"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-[var(--caramel)]">
                Curated Selection
              </span>
            </motion.div>
            <h2
              id="home-menu-title"
              className="mb-6 font-serif text-5xl text-[var(--espresso)] md:text-7xl"
            >
              Our Menu
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--coffee-light)]">
              Every item is crafted with quality ingredients, expressive plating, and the warmth
              of a neighborhood cafe.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {menuItems.map((item, index) => (
              <motion.article
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
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 3 }}
                    transition={{ duration: 0.8 }}
                    className="h-full w-full"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90" />

                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(212, 165, 116, 0.3), transparent 70%)",
                    }}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 translate-y-20 p-6 text-white transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="mb-3 font-serif text-3xl">{item.title}</h3>
                  <p className="text-sm text-[var(--latte)] opacity-90">{item.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-serif text-2xl text-[var(--espresso)]">{item.title}</h3>
                </div>

                <motion.div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-full bg-[var(--mocha)] px-10 py-4 text-[var(--cream)] shadow-lg transition-shadow hover:shadow-2xl"
            >
              View Full Menu
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={drinksRef}
        style={{ scale: drinksScale, y: drinksY }}
        className="sticky top-0 z-20 flex min-h-screen flex-col justify-center rounded-t-[50px] bg-gradient-to-br from-[var(--mocha)] via-[var(--coffee-dark)] to-[var(--espresso)] px-4 py-16 shadow-2xl lg:py-20"
        aria-labelledby="signature-drinks-title"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-7xl origin-center scale-90 lg:scale-95"
        >
          <div className="mb-10 text-center md:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 inline-block"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-[var(--caramel)]">
                Exclusive
              </span>
            </motion.div>
            <h2
              id="signature-drinks-title"
              className="mb-6 font-serif text-5xl text-[var(--cream)] md:text-7xl"
            >
              Signature Creations
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--latte)]">
              Handcrafted coffee and cafe creations that pair beautifully with Maati&apos;s
              ceramic-led presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {signatureDrinks.map((drink, index) => (
              <motion.article
                key={drink.name}
                initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 5,
                  y: -15,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 aspect-square overflow-hidden rounded-2xl"
                  >
                    <ImageWithFallback
                      src={drink.image}
                      alt={drink.alt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(212, 165, 116, 0.2), transparent 70%)",
                    }}
                  />

                  <h3 className="mb-2 font-serif text-2xl text-[var(--cream)]">{drink.name}</h3>
                  <p className="mb-4 text-sm text-[var(--latte)]">{drink.description}</p>
                  <p className="text-2xl text-[var(--caramel)]">{drink.price}</p>
                </div>

                <motion.div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-[var(--caramel)] via-[var(--latte)] to-[var(--mocha)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={galleryRef}
        style={{ scale: galleryScale }}
        className="sticky top-0 z-30 flex min-h-screen flex-col justify-center rounded-t-[50px] bg-gradient-to-b from-[var(--espresso)] via-[var(--coffee-dark)] to-[var(--espresso)] px-4 py-16 shadow-2xl lg:py-20"
        aria-labelledby="home-gallery-title"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-7xl origin-center scale-90 lg:scale-95"
        >
          <div className="mb-10 text-center md:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 inline-block"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-[var(--caramel)]">
                Atmosphere
              </span>
            </motion.div>
            <h2
              id="home-gallery-title"
              className="mb-6 font-serif text-5xl text-[var(--cream)] md:text-7xl"
            >
              Ambience
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[var(--latte)]">
              Browse the warm interiors, plated desserts, and coffee moments that shape the
              gallery-inspired feel of Maati Art Cafe.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {galleryPreview.map((image, index) => (
              <motion.figure
                key={image.url}
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  rotateZ: index % 2 === 0 ? 3 : -3,
                }}
                className="aspect-square overflow-hidden rounded-2xl shadow-2xl"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </motion.figure>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-full bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] px-10 py-4 text-white shadow-lg"
            >
              View Full Gallery
            </motion.a>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={reviewsRef}
        style={{ scale: reviewsScale }}
        className="sticky top-0 z-40 flex min-h-screen items-center rounded-t-[50px] bg-gradient-to-br from-[var(--cream)] via-[var(--latte)] to-[var(--cream)] px-4 py-16 shadow-2xl lg:py-20"
        aria-labelledby="guest-reviews-title"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-7xl origin-center scale-90 lg:scale-95"
        >
          <h2
            id="guest-reviews-title"
            className="mb-16 text-center font-serif text-5xl text-[var(--espresso)] drop-shadow-sm md:text-6xl"
          >
            What Our Guests Say
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.blockquote
                key={review.name}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
                }}
                className="rounded-[40px] border border-white/50 bg-white/40 p-12 shadow-2xl backdrop-blur-xl transition-shadow"
              >
                <div className="mb-8 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="fill-[var(--caramel)] text-[var(--caramel)]" size={20} />
                    </motion.div>
                  ))}
                </div>
                <p className="mb-10 font-serif text-xl italic leading-relaxed text-[var(--espresso)]">
                  &quot;{review.text}&quot;
                </p>
                <footer className="flex items-center gap-4">
                  <div className="h-0.5 w-12 rounded-full bg-[var(--caramel)]/30" />
                  <cite className="text-sm font-medium uppercase tracking-widest text-[var(--mocha)] not-italic">
                    {review.name}
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <section
        id="visit"
        className="relative z-50 flex min-h-[50vh] flex-col justify-center bg-gradient-to-b from-[var(--espresso)] to-[var(--coffee-dark)] px-4 py-16 lg:py-24"
        aria-labelledby="visit-us-title"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-7xl origin-center scale-90 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 inline-block"
          >
            <MapPin className="mx-auto text-[var(--caramel)]" size={64} />
          </motion.div>

          <h2
            id="visit-us-title"
            className="mb-8 font-serif text-5xl text-[var(--cream)] md:text-6xl"
          >
            Visit Us
          </h2>
          <p className="mb-4 text-xl text-[var(--latte)]">{addressText}</p>
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-[var(--latte)]/80 md:text-lg">
            Stop by for small-batch coffee, handcrafted desserts, breakfast favorites, and a
            gallery-inspired space built around ceramics and slow hospitality.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-6 text-[var(--latte)]">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--cream)]"
            >
              <Phone size={18} />
              <span>{SITE.phone}</span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--cream)]"
            >
              <Mail size={18} />
              <span>{SITE.email}</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] px-10 py-4 text-white shadow-lg"
            >
              Get Directions
            </motion.a>
            <motion.a
              href={SITE.reservationUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-[var(--cream)] bg-white/10 px-10 py-4 text-[var(--cream)] backdrop-blur-sm"
            >
              Reserve a Table
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
