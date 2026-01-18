import React from 'react';
import { motion } from 'framer-motion';
import { SHINOBI_DATA } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="brush-font text-4xl text-center text-white mb-16">
          <span className="text-red-500">秘伝</span> Secret Scrolls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SHINOBI_DATA.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className={`group bg-slate-800 rounded-3xl overflow-hidden relative border-t-4 ${project.color === 'orange' ? 'border-orange-500' : 'border-blue-500'}`}
            >
              {project.forbidden && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/60 flex items-center justify-center z-20 transition-opacity duration-500"
                >
                  <span className="brush-font text-3xl text-orange-500/50 -rotate-12 border-4 border-orange-500/50 p-4">FORBIDDEN</span>
                </motion.div>
              )}
              <div className="p-8">
                <h3 className={`brush-font text-2xl mb-4 ${project.color === 'orange' ? 'text-orange-500' : 'text-blue-400'}`}>
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;