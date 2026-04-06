import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Coffee, Flame, Droplets, Leaf } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const philosophyStages = [
  {
    title: "The Earth (Maati)",
    description: "Everything begins with the soil. 'Maati' is our homage to the earth that nurtures the coffee bean and shapes the clay. We celebrate the raw, grounding energy of nature in every cup and every vessel.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1600&auto=format&fit=crop",
    icon: Leaf,
  },
  {
    title: "The Craft",
    description: "Hands shape the clay, hands roast the bean. We believe in the palpable soul of artisanal work. Our space is a sanctuary where the master potter and the master barista speak the same language.",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop",
    icon: Droplets,
  },
  {
    title: "The Fire",
    description: "Heat transforms. The kiln solidifies the fragile vessel, while the roaster awakens the hidden notes of the coffee. It is the crucible where our dual passions merge.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1600&auto=format&fit=crop",
    icon: Flame,
  },
  {
    title: "The Ritual",
    description: "Finally, the elements converge. Serving our ethically sourced, perfectly extracted coffee in bespoke, hand-crafted ceramics elevates a simple habit into a revered daily ritual.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1600&auto=format&fit=crop",
    icon: Coffee,
  },
];

const artisans = [
  {
    name: "Kavya",
    role: "Master Potter",
    story: "Shaping the earth into vessels that breathe life into your daily brew.",
    image: "https://images.unsplash.com/photo-1588693959306-b51f0ab8ee11?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aarav",
    role: "Head Roaster",
    story: "Finding the nuanced melody hidden within every single coffee bean.",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero Parallax effect
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const yBg = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const opacityHeroText = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const scaleHeroText = useTransform(heroScroll, [0, 1], [1, 0.9]);

  // Smooth scroll progress for the progress bar
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, stiffness: 100, damping: 20 });

  return (
    <div ref={containerRef} className="bg-[var(--cream)] relative z-0">
      
      {/* Scroll Progress Bar */}
      {isMounted && (
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-[var(--caramel)] origin-left z-50"
          style={{ scaleX: smoothProgress }}
        />
      )}

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <div className="absolute inset-0 bg-[var(--espresso)]/70 mix-blend-multiply z-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2000&auto=format&fit=crop"
            alt="Coffee beans and earthy textures representing the origins of Maati Art Cafe"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          style={{ opacity: opacityHeroText, scale: scaleHeroText }}
          className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[var(--caramel)] tracking-[0.3em] text-sm uppercase font-medium mb-6">Our Origin</h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--cream)] mb-6 leading-tight">
              Roots in the <span className="italic font-light">Earth.</span>
            </h1>
            <p className="text-[var(--latte)] text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              "Maati" means soil. It is the beginning of everything. In Brooklyn, we bring together bespoke pottery, artisanal roasting, and a slower way to gather around coffee.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[var(--caramel)] text-xs uppercase tracking-widest">Unearth the story</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-[var(--caramel)] opacity-50"
          />
        </motion.div>
      </section>

      {/* The Philosophy - Staggered Storytelling Section */}
      <section className="py-24 md:py-40 px-6 bg-[var(--cream)] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mb-24 md:mb-40 text-center"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-[var(--espresso)]">The Maati Philosophy</h2>
            <div className="w-24 h-[1px] bg-[var(--coffee-light)] mx-auto mt-8"></div>
          </motion.div>

          <div className="flex flex-col gap-32 md:gap-48">
            {philosophyStages.map((stage, index) => (
              <PhilosophyStage 
                key={stage.title} 
                stage={stage} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Artisans Section */}
      <section className="py-32 px-6 bg-[var(--espresso)] text-[var(--cream)] relative overflow-hidden">
        {/* Subtle background texture/pattern could go here */}
        <div className="absolute inset-0 opacity-5">
           <ImageWithFallback
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2000&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
           />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <h2 className="font-serif text-4xl md:text-6xl text-[var(--cream)] mb-6">The Hands That <span className="italic text-[var(--caramel)]">Shape Us</span></h2>
              <p className="text-[var(--latte)] text-lg">
                Behind every ceramic cup and every espresso shot are the hands of artisans completely devoted to their craft.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {artisans.map((artisan, index) => (
              <motion.div
                key={artisan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                  <div className="absolute inset-0 bg-[var(--mocha)]/20 group-hover:bg-transparent transition-colors duration-700 z-10"/>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={artisan.image}
                      alt={`${artisan.name}, ${artisan.role} at Maati Art Cafe`}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                </div>
                <div className="border-t border-[var(--coffee-light)]/30 pt-6">
                  <h3 className="font-serif text-3xl text-[var(--cream)] mb-1">{artisan.name}</h3>
                  <p className="tracking-widest text-[var(--caramel)] text-sm uppercase mb-4">{artisan.role}</p>
                  <p className="text-[var(--latte)] font-light italic">{artisan.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action / Manifesto Outro */}
      <section className="h-[70vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--mocha)] to-[var(--espresso)] z-0" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <Leaf className="mx-auto mb-8 text-[var(--caramel)] opacity-50" size={32} />
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--cream)] mb-8 leading-snug">
            We invite you to slow down. Feel the texture of the cup. Taste the nuances of the roast. <span className="italic text-[var(--caramel)]">Return to the earth.</span>
          </h2>
          <motion.a
            href="/menu"
            whileHover={{ scale: 1.05, backgroundColor: "var(--cream)", color: "var(--espresso)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 border border-[var(--caramel)] text-[var(--caramel)] rounded-full uppercase tracking-widest text-sm transition-colors duration-300"
          >
            Explore The Menu
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
}

function PhilosophyStage({ stage, index }: { stage: any, index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const Icon = stage.icon;

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
      {/* Image side - Large and cinematic */}
      <motion.div 
        style={{ opacity, y }}
        className="w-full md:w-1/2 aspect-square md:aspect-[4/5] overflow-hidden rounded-sm relative"
      >
        <ImageWithFallback
          src={stage.image}
          alt={stage.title}
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
      </motion.div>

      {/* Text side - Elegant typography */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full border border-[var(--coffee-light)]/30 text-[var(--coffee-dark)]">
          <Icon size={24} />
        </div>
        <h3 className="font-serif text-3xl md:text-5xl text-[var(--espresso)] mb-6">
          {stage.title}
        </h3>
        <p className="text-lg text-[var(--coffee-medium)] leading-relaxed max-w-lg">
          {stage.description}
        </p>
      </motion.div>
    </div>
  );
}
