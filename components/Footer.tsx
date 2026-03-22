"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white flex items-center gap-2 mb-8"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white dark:bg-zinc-900 rounded-sm rotate-45" />
              </div>
              CLEANING BRAND
            </Link>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-sm font-medium leading-relaxed">
              Defining the future of clean. We provide premium cleaning experiences for those who demand the absolute best.
            </p>
          </div>
          
          <div>
            <h4 className="text-zinc-900 dark:text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-white font-bold mb-8 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-4 text-zinc-500 dark:text-zinc-400 font-medium">
              <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Facebook</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-400 dark:text-zinc-600 font-medium text-sm">
            © {currentYear} CLEANING BRAND. All rights reserved.
          </p>
          <div className="flex gap-10">
            <span className="text-zinc-400 dark:text-zinc-600 font-medium text-sm cursor-pointer hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-zinc-400 dark:text-zinc-600 font-medium text-sm cursor-pointer hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
