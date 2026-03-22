"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
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
              className="mb-20 md:mb-32"
            >
              <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.8] mb-12">
                OUR <br />
                <span className="text-zinc-400 dark:text-zinc-600">SPECIALIZED</span> <br />
                EXPERTISE.
              </h1>
              <p className="max-w-2xl text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-snug">
                From luxury residences to high-tech industrial hubs, we deliver precision cleaning tailored to your specific requirements.
              </p>
            </motion.div>

            <Services />

            <div className="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900 overflow-hidden rounded-[2rem] md:rounded-[3rem]">
              {[
                { title: "Custom Plans", text: "Every space is unique. We develop bespoke cleaning protocols for every client." },
                { title: "24/7 Availability", text: "Elite service doesn't follow a clock. We work around your schedule." },
                { title: "White Glove Service", text: "Meticulous handling of sensitive equipment and valuable artifacts." },
                { title: "Post-Event Recovery", text: "Restoring order after significant gatherings with speed and precision." }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-zinc-950 p-8 md:p-16">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-24 md:mt-40 text-center">
              <h2 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white mb-10 tracking-tighter uppercase">Need a Tailored Quote?</h2>
              <Link 
                href="/contact"
                className="inline-block px-12 py-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-xl font-bold transition-all hover:scale-105"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
