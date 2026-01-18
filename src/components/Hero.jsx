import React from 'react';
import { motion } from 'framer-motion';
import { SHINOBI_DATA } from '../data/portfolio';
import HarshResume from '../data/Harsh-Resume-Jan-2026.pdf';

const Hero = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10 max-w-4xl"
      >
        <motion.h2 
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-orange-500 font-bold tracking-[0.5em] uppercase mb-4"
        >
          Rank: {SHINOBI_DATA.profile.rank}
        </motion.h2>
        <h1 className="brush-font text-6xl md:text-8xl text-white mb-6 leading-tight">
          {SHINOBI_DATA.profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 font-medium leading-relaxed">
          {SHINOBI_DATA.profile.tagline}
        </p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a 
          href={HarshResume} 
          download="Harsh-Jalindre-Resume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="bg-orange-600 px-8 py-4 rounded font-bold text-white hover:bg-orange-700 transition-all flex items-center mx-auto w-fit"
        >
          <i className="fa-solid fa-scroll mr-3"></i> Download Secret Scroll
        </a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;