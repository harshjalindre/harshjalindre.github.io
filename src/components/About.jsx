import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24 px-6 scroll-bg text-slate-900 relative"
    >
      <div className="absolute top-0 left-10 -translate-y-1/2 text-4xl text-slate-800 rotate-45">
        <i className="fa-solid fa-diamond"></i>
      </div>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="brush-font text-4xl text-center mb-12 flex justify-center items-center">
          <span className="text-orange-700 mr-4">忍道</span> My Nindō (Ninja Way)
        </h2>
        <div className="text-lg font-medium leading-relaxed space-y-6">
          <p>
            I am a Technical Software Engineer with 4+ years of experience, specializing in high-performance architectures. 
            Like a ninja honing their craft, I focus on building scalable, event-driven microservices in 
            <strong className="text-orange-700 px-1">Go</strong> and architecting robust core systems.
          </p>
          <p>
            My mission is to deliver complex frontend ecosystems with 
            <strong className="text-orange-700 px-1">React</strong>, supported by cloud-native infrastructure on 
            <strong className="text-red-700 px-1">AWS</strong>. I focus on optimizing system concurrency and minimizing latency.
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 right-10 translate-y-1/2 text-4xl text-slate-800 rotate-45">
        <i className="fa-solid fa-diamond"></i>
      </div>
    </motion.section>
  );
};

export default About;