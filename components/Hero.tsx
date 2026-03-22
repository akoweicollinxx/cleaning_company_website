"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-white dark:bg-zinc-950">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-zinc-100 dark:bg-zinc-900/50 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-zinc-100 dark:bg-zinc-900/50 rounded-full blur-3xl" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase border border-zinc-200 dark:border-zinc-800 rounded-full"
          >
            The Standard of Clean
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-white mb-8 leading-[0.9]">
            EXCEPTIONAL <br />
            <span className="text-zinc-400 dark:text-zinc-600">SPACES</span> REIMAGINED.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 font-medium">
            Elevating your environment with meticulous attention to detail and professional care. We don't just clean; we transform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-zinc-500/20"
            >
              Get a Quote
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-full text-lg font-bold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-24 bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800" />
      </motion.div>
    </section>
  );
};

export default Hero;
