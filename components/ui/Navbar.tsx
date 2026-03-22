"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled || mobileMenuOpen
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white flex items-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white dark:bg-zinc-900 rounded-sm rotate-45" />
          </div>
          <span className="truncate">CLEANING BRAND</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <Link 
            href="/contact"
            className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-zinc-500/20"
          >
            Book a Clean
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-zinc-900 dark:bg-white rounded-full transition-transform"
          />
          <motion.span 
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-zinc-900 dark:bg-white rounded-full transition-opacity"
          />
          <motion.span 
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-zinc-900 dark:bg-white rounded-full transition-transform"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 left-0 w-full bg-white dark:bg-zinc-950 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className="text-4xl font-bold text-zinc-900 dark:text-white hover:text-zinc-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link 
                href="/contact"
                className="mt-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-10 py-4 rounded-full text-xl font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
