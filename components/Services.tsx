"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Cleaning",
    description: "Tailored home cleaning that transforms your living space into a sanctuary of purity.",
    icon: "H",
  },
  {
    title: "Commercial Spaces",
    description: "Professional workplace hygiene designed to enhance productivity and impress clients.",
    icon: "C",
  },
  {
    title: "Industrial Sanitization",
    description: "Deep-scale cleaning for specialized environments requiring surgical precision.",
    icon: "I",
  },
  {
    title: "Eco-Specialist Care",
    description: "100% sustainable products and methods for the environmentally conscious client.",
    icon: "E",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-6 leading-tight"
            >
              OUR ELITE <br />
              CLEANING SERVICES
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 font-medium"
            >
              We provide a comprehensive range of high-end cleaning solutions designed to meet the most demanding standards of excellence.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center animate-spin-slow">
              <span className="text-zinc-400 font-black text-2xl">★</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl transition-all hover:shadow-2xl hover:shadow-zinc-500/10"
            >
              <div className="w-14 h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl flex items-center justify-center text-2xl font-black mb-8 group-hover:rotate-12 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium mb-8">
                {service.description}
              </p>
              <div className="w-8 h-px bg-zinc-200 dark:bg-zinc-800 transition-all group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
