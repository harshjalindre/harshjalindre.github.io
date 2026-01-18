import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0f172a] min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div key="content">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <footer className="py-8 bg-slate-900 text-center border-t border-slate-800">
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                © 2026 Harsh Jalindre • Built with Chakra & Tailwind
              </p>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;