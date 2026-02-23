"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CoffeeSections from "@/components/CoffeeSections";
import ExtraSections from "@/components/ExtraSections";
import MapWrapper from "@/components/MapWrapper";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-silk">
      <Navbar />

      {/* HERO SECTION – PREMIUM PARALLAX */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920"
            className="w-full h-full object-cover"
            alt="Artisan Coffee"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-primary" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-6"
        >
          <span className="block mb-6 tracking-[0.5em] uppercase text-xs font-black text-accent-light">
            Premium Roastery
          </span>

          <h1 className="text-8xl md:text-[12rem] font-serif font-bold leading-[0.75] mb-10 drop-shadow-2xl">
            Java <br />
            <span className="text-accent-light">Buzz</span>
          </h1>

          <div className="flex justify-center mb-12">
            <div className="w-16 h-px bg-white/30 self-center"></div>
            <p className="px-6 text-xl font-light italic text-white/80 tracking-wide">
              Cultivating the perfect morning.
            </p>
            <div className="w-16 h-px bg-white/30 self-center"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-accent hover:bg-accent-light text-white px-12 py-5 rounded-full text-lg font-black transition-all transform hover:scale-105 shadow-2xl">
              ORDER ONLINE
            </button>

            <div className="flex gap-6 text-white/60">
              <Instagram className="hover:text-accent-light cursor-pointer transition-colors" />
              <Facebook className="hover:text-accent-light cursor-pointer transition-colors" />
              <Twitter className="hover:text-accent-light cursor-pointer transition-colors" />
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-20 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Main Content Sections */}
      <CoffeeSections />
      <ExtraSections />
      <MapWrapper />

      {/* FOOTER – BROWN & GREEN THEME */}
      <footer className="bg-primary text-silk py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          
          <div className="col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6">
              JAVA BUZZ
            </h2>
            <p className="text-silk/60 max-w-sm mb-8 leading-relaxed italic">
              Sustainable beans. Hand-crafted roasting. Local community.
              We are dedicated to the art of the perfect brew.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li>Our Story</li>
              <li>Brewing Guides</li>
              <li>Wholesale Beans</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-6">
              Follow
            </h4>
            <div className="flex gap-4 text-silk/70">
              <Instagram className="hover:text-accent-light transition-colors cursor-pointer"/>
              <Facebook className="hover:text-accent-light transition-colors cursor-pointer"/>
              <Twitter className="hover:text-accent-light transition-colors cursor-pointer"/>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest opacity-40">
          <p>© 2026 Java Buzz Coffee Co. | All Rights Reserved</p>
          <p>Created for Developer Super League Task #2</p>
        </div>
      </footer>
    </main>
  );
}