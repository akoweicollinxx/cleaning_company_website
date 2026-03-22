import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        
        {/* Why Choose Us Section */}
        <section id="about" className="py-32 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-24">
              <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-black mb-10 text-zinc-900 dark:text-white leading-tight">
                  UNCOMPROMISING <br />
                  QUALITY.
                </h2>
                <div className="space-y-10">
                  {[
                    { title: "Meticulous Standards", desc: "Every corner, every surface, handled with extreme precision." },
                    { title: "Vetted Professionals", desc: "Our staff undergo rigorous background checks and elite training." },
                    { title: "Eco-Conscious Excellence", desc: "Premium results using only sustainable, high-grade products." },
                    { title: "Discrete Service", desc: "We prioritize your privacy and peace of mind at all times." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-900 dark:text-white font-bold group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-colors">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] overflow-hidden relative group">
                <Image
                    src="/clean.jpg"
                    alt="Cleaning service"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                />
                 <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/50 to-zinc-50/20 dark:from-zinc-900/80 dark:to-zinc-800/40" />
                 <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-zinc-900 dark:text-white text-3xl font-black text-center tracking-tighter uppercase opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                      The Standard of <br /> Excellence
                    </div>
                 </div>
                 {/* Floating card effect */}
                 <div className="absolute bottom-10 left-10 right-10 bg-black/40 backdrop-blur-3xl p-8 rounded-3xl border border-white/10">
                    <p className="text-white font-bold text-lg leading-snug">
                      "Transforming spaces into curated environments of absolute purity."
                    </p>
                    <p className="text-white/60 mt-4 font-medium uppercase tracking-widest text-xs">— CLEANING BRAND PHILOSOPHY</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-zinc-900 dark:bg-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-black text-white dark:text-zinc-900 tracking-tighter select-none">
              CLEAN
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-black text-white dark:text-zinc-900 mb-12 tracking-tighter">
              READY TO <br /> EXPERIENCE ELITE?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-12 py-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                Book Your Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
