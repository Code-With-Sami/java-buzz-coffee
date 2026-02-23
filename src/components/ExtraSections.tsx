"use client";
import { motion } from 'framer-motion';
import { Star, Send, ShieldCheck, Award, Coffee } from 'lucide-react'; // Added Coffee here

export default function ExtraSections() {
  const reviews = [
    { name: "James Wilson", text: "The best Espresso in the city. The atmosphere is unmatched.", stars: 5 },
    { name: "Sophia Chen", text: "Their organic beans make a huge difference. Highly recommend the Latte.", stars: 5 },
    { name: "Marcus Thorne", text: "A perfect spot for morning work. Quiet, cozy, and great coffee.", stars: 5 }
  ];

  return (
    <div className="bg-silk">
      {/* TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-xs">Guest Experience</span>
          <h2 className="text-5xl font-serif font-bold text-primary mt-2">What They Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-primary/5 italic"
            >
              <div className="flex text-gold mb-6">
                {[...Array(r.stars)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-mocha text-lg mb-6">"{r.text}"</p>
              <span className="text-primary font-bold not-italic">— {r.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 bg-accent/5 mx-6 rounded-[3rem] mb-24 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Join the Buzz Club</h2>
          <p className="text-mocha mb-10 text-lg">Subscribe for 15% off your first order and exclusive access to new blends.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-8 py-4 rounded-full border-none focus:ring-2 focus:ring-accent outline-none shadow-sm" 
            />
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg">
              Subscribe <Send size={18} />
            </button>
          </div>
        </div>
        {/* This was the causing the error - now fixed */}
        <Coffee className="absolute -bottom-10 -right-10 text-accent/10 w-64 h-64 rotate-12" />
      </section>
    </div>
  );
}