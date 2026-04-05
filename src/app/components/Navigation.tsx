import { motion, useScroll, useTransform } from "motion/react";
import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 248, 240, 0)", "rgba(255, 248, 240, 0.95)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(10px)"]
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--border)]"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--mocha)] to-[var(--coffee-dark)] rounded-full flex items-center justify-center">
                  <span className="text-[var(--cream)] font-serif">C</span>
                </div>
                <span className="font-serif text-xl text-[var(--espresso)]">Café Noir</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative py-2 ${
                      location.pathname === item.path
                        ? "text-[var(--mocha)]"
                        : "text-[var(--coffee-light)]"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--caramel)]"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[var(--mocha)] text-[var(--cream)] rounded-full"
              >
                Reserve Table
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[var(--espresso)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30 }}
        className="fixed top-16 right-0 bottom-0 w-64 bg-[var(--cream)] shadow-2xl z-50 md:hidden"
      >
        <div className="flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ x: 10 }}
                className={`py-2 ${
                  location.pathname === item.path
                    ? "text-[var(--mocha)]"
                    : "text-[var(--coffee-light)]"
                }`}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 bg-[var(--mocha)] text-[var(--cream)] rounded-full"
          >
            Reserve Table
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
