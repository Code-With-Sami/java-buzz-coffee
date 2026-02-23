"use client";
import menuData from '../data/menu.json';
import blogData from '../data/blogs.json';
import { motion } from 'framer-motion';
import { Star, Send, ShieldCheck, Award, Coffee } from 'lucide-react'; // Added Coffee here
import { Facebook, Twitter, Share2, Plus } from 'lucide-react';

const handleShare = (platform: string, title: string) => {
  const url = window.location.href;
  const text = `Check out this blog: ${title} at Java Buzz!`;
  
  if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
};

export default function CoffeeSections() {
  return (
    <div className="bg-silk">
      {/* ADVANCED MENU SECTION */}
      <section id="menu" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Menu Selects</span>
            <h2 className="text-6xl font-serif font-bold text-primary mt-2">The Coffee Lab</h2>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-px bg-accent/30 self-center hidden md:block"></div>
            <p className="text-mocha max-w-xs text-sm italic">"Every cup is a masterpiece of precision and flavor."</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-primary/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Coffee className="text-accent" size={40} />
              </div>
              <span className="text-accent font-black text-[10px] tracking-widest uppercase mb-4 block">{item.category}</span>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">{item.name}</h3>
              <p className="text-silk-dark/40 text-xs mb-6 italic">Organic • Sustainably Sourced</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-mocha font-serif">{item.price}</span>
                <button className="bg-accent/10 text-accent p-3 rounded-full hover:bg-accent hover:text-white transition-all">
                  <Plus size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ADVANCED BLOG SECTION (WINNING DESIGN) */}
      <section id="blog" className="py-24 bg-primary text-silk">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <span className="text-gold font-bold tracking-widest uppercase text-xs">Journal</span>
              <h2 className="text-5xl font-serif font-bold mt-2 text-white">The Coffee Culture</h2>
            </div>
            <button className="px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-gold transition-all">
              All Stories
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-silk/60 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gold font-medium">{post.date}</span>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Facebook size={18} onClick={() => handleShare('facebook', post.title)} className="hover:text-accent cursor-pointer transition-colors"/>
<Twitter size={18} onClick={() => handleShare('twitter', post.title)} className="hover:text-accent cursor-pointer transition-colors"/>
                    <Share2 size={16} className="hover:text-gold" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}