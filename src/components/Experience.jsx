import React from 'react';
import { motion } from 'framer-motion';
import { SHINOBI_DATA } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="brush-font text-4xl text-center text-white mb-16">
          <span className="text-red-500">任務</span> Mission History
        </h2>
        <div className="relative border-l-4 border-orange-600 ml-4 pl-8 space-y-12">
          {SHINOBI_DATA.missions.map((mission, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <motion.div 
                whileHover={{ rotate: 180 }}
                className="absolute -left-[42px] top-2 w-12 h-12 bg-slate-900 border-4 border-orange-600 rounded-full flex items-center justify-center text-orange-500 z-10"
              >
                <i className="fa-solid fa-star"></i>
              </motion.div>
              <div className="bg-slate-900 p-6 rounded-xl border-r-4 border-orange-600 shadow-xl">
                <span className="text-orange-500 font-bold text-sm uppercase">{mission.date}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{mission.rank}</h3>
                <div className="text-slate-400 font-bold mb-4 italic">Village: {mission.village}</div>
                <ul className="shuriken-list space-y-2 text-slate-300">
                  {mission.tasks.map((task, i) => <li key={i}>{task}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;