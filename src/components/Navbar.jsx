import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Nindō', href: '#about', color: 'hover:text-orange-500' },
    { name: 'Jutsu', href: '#skills', color: 'hover:text-blue-400' },
    { name: 'Missions', href: '#experience', color: 'hover:text-orange-500' },
    { name: 'Scrolls', href: '#projects', color: 'hover:text-red-500' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 w-full z-50 bg-slate-900/95 border-b-4 border-orange-600 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <motion.div 
            whileHover={{ rotate: 360 }}
            className="w-10 h-10 bg-slate-800 rounded-full border-2 border-orange-500 flex items-center justify-center"
          >
            <i className="fa-solid fa-leaf text-orange-500 text-xl"></i>
          </motion.div>
          <span className="brush-font text-2xl text-white tracking-wider">
            HARSH<span className="text-orange-500">-SENSEI</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 font-bold uppercase tracking-widest text-sm">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              whileHover={{ scale: 1.1, y: -2 }}
              className={`${link.color} transition text-slate-300`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;