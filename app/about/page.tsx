"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <Navbar />
      <main className="flex-grow pt-32">
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-9xl font-black text-zinc-900 dark:text-white mb-12 tracking-tighter leading-[0.8]">
                WE ARE THE <br />
                <span className="text-zinc-400 dark:text-zinc-600">NEW STANDARD</span>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-24">
                <div className="space-y-8">
                  <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-medium leading-tight">
                    Founded on the principle that your environment directly impacts your well-being and productivity.
                  </p>
                  <p className="text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed font-medium">
                    CLEANING BRAND was established to bridge the gap between standard cleaning services and elite environmental curation. We don't just remove dust; we restore the soul of your space.
                  </p>
                </div>
                <div className="bg-zinc-100 dark:bg-zinc-900 aspect-video rounded-[2rem] flex items-center justify-center overflow-hidden">
                  <span className="text-zinc-900 dark:text-white font-black text-4xl opacity-10 uppercase tracking-widest rotate-12">EST. 2024</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-40">
              {[
                { label: "Our Mission", text: "To provide an unparalleled level of cleanliness that inspires and elevates daily life." },
                { label: "Our Vision", text: "To be the global benchmark for professional cleaning and environmental excellence." },
                { label: "Our Values", text: "Integrity, precision, and an unwavering commitment to sustainable practices." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 border border-zinc-100 dark:border-zinc-900 rounded-3xl"
                >
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">{item.label}</h3>
                  <p className="text-xl font-bold text-zinc-900 dark:text-white">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
