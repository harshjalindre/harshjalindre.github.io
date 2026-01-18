import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
  >
    {/* Spinning Shuriken */}
    <motion.div 
      animate={{ 
        rotate: 360,
        scale: [1, 1.1, 1] // Slight pulse to make it feel "active"
      }}
      transition={{ 
        rotate: { repeat: Infinity, duration: 1, ease: "linear" },
        scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
      }}
      className="text-orange-500 text-8xl mb-6 flex items-center justify-center"
    >
      <i className="fa-solid fa-star-of-david"></i> 
      {/* Note: fa-star-of-david or fa-bahai look most like shurikens.
          If you have FontAwesome Pro, 'fa-shuriken' is the best choice.
      */}
    </motion.div>

    <motion.p 
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="brush-font text-orange-500 text-2xl tracking-[0.3em] uppercase"
    >
      Gathering Chakra...
    </motion.p>
    
    {/* Optional background detail: Pulsing glow */}
    <motion.div 
      animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ repeat: Infinity, duration: 3 }}
      className="absolute w-64 h-64 bg-orange-600 rounded-full blur-[100px] -z-10"
    />
  </motion.div>
);

export default Loader;