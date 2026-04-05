import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Coffee, Heart, Award, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const timeline = [
  { year: "2018", event: "Founded with a dream", description: "Started in a small corner with big ambitions" },
  { year: "2019", event: "First expansion", description: "Opened our second location" },
  { year: "2020", event: "Award winning", description: "Best Café of the Year" },
  { year: "2021", event: "Community hub", description: "Became the neighborhood's favorite spot" },
  { year: "2023", event: "Sustainable commitment", description: "100% eco-friendly operations" },
  { year: "2026", event: "Today", description: "Serving excellence every day" },
];

const team = [
  {
    name: "Sofia Martinez",
    role: "Head Barista",
    image: "https://images.unsplash.com/photo-1769264963680-95a86383a483?w=400",
    specialty: "Latte Art Champion",
  },
  {
    name: "James Chen",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1762657424841-7b5166d5d54c?w=400",
    specialty: "Dessert Innovator",
  },
  {
    name: "Emma Wilson",
    role: "Coffee Roaster",
    image: "https://images.unsplash.com/photo-1769970629670-b3d188da9699?w=400",
    specialty: "Bean Expert",
  },
  {
    name: "Alex Rivera",
    role: "Master Brewer",
    image: "https://images.unsplash.com/photo-1769264962972-39cc2acd2591?w=400",
    specialty: "Cold Brew Specialist",
  },
];

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description: "Only the finest beans, sourced ethically from around the world",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Every cup is crafted with love and attention to detail",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in taste and service",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Building connections, one cup at a time",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-20 bg-[var(--cream)]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--coffee-dark)] to-[var(--espresso)]">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765225979687-8e4a11541401?w=1920"
              alt="Café interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-[var(--cream)] mb-6">
            Our Story
          </h1>
          <p className="text-[var(--latte)] text-lg md:text-xl max-w-3xl mx-auto">
            From humble beginnings to award-winning excellence, our journey has been
            fueled by passion, dedication, and an unwavering commitment to quality.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[var(--espresso)] text-center mb-16"
          >
            What We Stand For
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--caramel)] to-[var(--mocha)] flex items-center justify-center"
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-[var(--espresso)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--coffee-light)]">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[var(--latte)] to-[var(--cream)]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[var(--espresso)] text-center mb-20"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--caramel)] -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-16 flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="backdrop-blur-sm bg-white/70 p-6 rounded-xl shadow-lg border border-[var(--border)]"
                  >
                    <h3 className="font-serif text-3xl text-[var(--mocha)] mb-2">
                      {item.year}
                    </h3>
                    <h4 className="text-xl text-[var(--espresso)] mb-2">
                      {item.event}
                    </h4>
                    <p className="text-[var(--coffee-light)]">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 w-6 h-6 rounded-full bg-[var(--mocha)] border-4 border-[var(--cream)] -translate-x-1/2 z-10"
                />

                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-[var(--espresso)]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[var(--cream)] text-center mb-16"
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.05,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-transparent to-transparent opacity-60" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[var(--caramel)] mb-2">{member.role}</p>
                    <p className="text-sm text-[var(--latte)] opacity-90">
                      {member.specialty}
                    </p>
                  </div>

                  {/* Border animation */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[var(--caramel)] to-[var(--mocha)] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Experience */}
      <section className="py-20 px-6 bg-gradient-to-b from-[var(--cream)] to-[var(--latte)]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[var(--espresso)] text-center mb-16"
          >
            Experience Our Space
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1751956066306-c5684cbcf385?w=800",
                title: "Warm & Inviting",
                description: "Designed for comfort and connection",
              },
              {
                image: "https://images.unsplash.com/photo-1773927005455-8efc55a8d512?w=800",
                title: "Bright & Airy",
                description: "Natural light and modern aesthetics",
              },
            ].map((space, index) => (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <ImageWithFallback
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover"
                />

                <motion.div
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-[var(--espresso)]/80 to-transparent flex items-end p-8"
                >
                  <div>
                    <h3 className="font-serif text-3xl text-white mb-2">
                      {space.title}
                    </h3>
                    <p className="text-[var(--latte)]">{space.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[var(--mocha)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--cream)] mb-6">
            Join Our Story
          </h2>
          <p className="text-[var(--latte)] text-lg mb-8">
            We're more than just a café. We're a community, a gathering place,
            a home away from home. Come be a part of our journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[var(--caramel)] text-[var(--espresso)] rounded-full"
          >
            Visit Us Today
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
