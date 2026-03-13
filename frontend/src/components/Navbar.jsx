import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  'Home', 'About', 'Skills', 'Projects', 'Experience',
  'Certificates', 'Achievements', 'Education', 'Gallery', 'Contact'
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const current = sections.find(section => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 200;
        }
        return false;
      });
      if (current) setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setActive(section);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 cursor-pointer" onClick={() => scrollToSection('Home')}>
          {'<TejaReddy/>'}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {sections.map((item) => (
            <div
              key={item}
              className={`cursor-pointer px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${active === item ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(147,51,234,0.5)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#0a0a10]/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {sections.map((item) => (
                 <div
                 key={item}
                 className={`cursor-pointer text-lg font-medium transition-colors ${active === item ? 'text-purple-400' : 'text-gray-400'}`}
                 onClick={() => scrollToSection(item)}
               >
                 {item}
               </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
