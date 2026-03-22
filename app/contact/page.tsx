"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              className="mb-32"
            >
              <h1 className="text-6xl md:text-9xl font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.8] mb-12 uppercase">
                LET'S <br />
                <span className="text-zinc-400 dark:text-zinc-600">COMMENCE</span> <br />
                EXCELLENCE.
              </h1>
              <p className="max-w-2xl text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-snug">
                Inquire about our elite cleaning services or request a bespoke consultation for your space.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-12">Consultation Request</h3>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-900 focus:border-zinc-900 dark:focus:border-white transition-colors py-4 text-xl font-medium outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-900 focus:border-zinc-900 dark:focus:border-white transition-colors py-4 text-xl font-medium outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Service Type</label>
                      <select className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-900 focus:border-zinc-900 dark:focus:border-white transition-colors py-4 text-xl font-medium outline-none appearance-none">
                        <option className="bg-white dark:bg-zinc-950">Residential Elite</option>
                        <option className="bg-white dark:bg-zinc-950">Commercial Precision</option>
                        <option className="bg-white dark:bg-zinc-950">Industrial Sanitization</option>
                        <option className="bg-white dark:bg-zinc-950">Bespoke Project</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">Your Message</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-zinc-100 dark:border-zinc-900 focus:border-zinc-900 dark:focus:border-white transition-colors py-4 text-xl font-medium outline-none resize-none"
                        placeholder="Tell us about your space..."
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-2xl font-black uppercase tracking-tighter hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                    >
                      Send Inquiry
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-20 bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] text-center"
                  >
                    <h3 className="text-4xl font-black text-zinc-900 dark:text-white mb-6">THANK YOU.</h3>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-snug">
                      Your inquiry has been received. Our concierge will contact you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="space-y-24">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-8">Headquarters</h3>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                    100 Clean Street, <br />
                    Suite 500, <br />
                    New York, NY 10001
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-8">Direct Contact</h3>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                    hello@cleaningbrand.com <br />
                    +1 (888) 123 4567
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-8">Global Operations</h3>
                  <p className="text-xl font-bold text-zinc-500 dark:text-zinc-500 leading-tight">
                    New York — London — Paris — Tokyo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
