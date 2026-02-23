"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? "bg-primary/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gold p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Coffee className="text-primary h-6 w-6" />
          </div>
          <span className="text-2xl font-serif font-black tracking-tighter text-white">JAVA BUZZ</span>
        </Link>
        
        {/* Desktop links - White on transparent, Gold on scroll */}
        <div className="hidden md:flex items-center space-x-10 font-bold text-sm uppercase tracking-widest text-white/90">
          {['Home', 'Menu', 'Location', 'Blog'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors">{item}</Link>
          ))}
          <Link href="#order" className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            <ShoppingBag size={18} /> Order Now
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-dark border-t border-white/10 px-6 py-8 space-y-6"
          >
            {['Home', 'Menu', 'Location', 'Blog'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block text-2xl font-serif text-white">{item}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;