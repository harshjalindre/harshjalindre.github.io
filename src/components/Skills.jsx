import React from 'react';
import { motion } from 'framer-motion';
import { SHINOBI_DATA } from '../data/portfolio';

const SkillBar = ({ skill }) => {
  // Define Chakra colors and shadows based on Element Type
  const elementConfig = {
    lightning: {
      text: 'text-blue-400',
      bar: 'from-blue-400 to-cyan-300 shadow-[0_0_10px_#60a5fa]',
      icon: 'fa-bolt-lightning'
    },
    fire: {
      text: 'text-orange-500',
      bar: 'from-orange-500 to-red-500 shadow-[0_0_10px_#f97316]',
      icon: 'fa-fire'
    },
    earth: {
      text: 'text-emerald-500',
      bar: 'from-emerald-600 to-green-900 shadow-[0_0_10px_#10b981]',
      icon: 'fa-leaf'
    }
  };

  // Fallback to fire if the type is not found
  const config = elementConfig[skill.type] || elementConfig.fire;

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 font-bold">
        <span className="text-white flex items-center gap-2">
          <i className={`fa-solid ${config.icon} ${config.text} text-xs`}></i>
          {skill.name}
        </span>
        <span className={config.text}>
          {skill.level}
        </span>
      </div>
      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${config.bar}`}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900 relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="brush-font text-4xl text-center text-white mb-16">
          <span className="text-blue-400">術</span> Jutsu Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {SHINOBI_DATA.skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;