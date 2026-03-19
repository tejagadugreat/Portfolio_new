import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ThemePuller() {
  const [isDark, setIsDark] = useState(false);
  const dragY = useMotionValue(0);
  
  // Controls the string length and bulb movement
  const stringHeight = useTransform(dragY, [0, 60], [100, 160]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="fixed top-0 right-12 z-[60] pointer-events-none select-none">
      {/* The String */}
      <motion.div 
        style={{ height: stringHeight }}
        className="w-1 bg-gray-400 dark:bg-peach mx-auto origin-top relative"
      />
      
      {/* The Bulb Puller */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 60 }}
        dragElastic={0.4}
        onDragEnd={(event, info) => {
          if (info.offset.y > 20) {
            toggleTheme();
          }
        }}
        onClick={toggleTheme}
        style={{ y: dragY }}
        className="pointer-events-auto cursor-ns-resize group -mt-1"
      >
        {/* Bulb Shape */}
        <div className="relative flex flex-col items-center">
            {/* Base of the bulb */}
            <div className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${isDark ? 'bg-yellow-300 border-yellow-200 shadow-[0_0_40px_rgba(253,224,71,0.8)] scale-110' : 'bg-gray-200 border-gray-400 opacity-60'}`} />
            
            {/* Pull handle */}
            <div className="w-1.5 h-6 bg-gray-600 rounded-full mt-[-2px] border border-gray-500" />
            <div className="w-4 h-4 bg-gray-700 rounded-full mt-[-2px] shadow-lg flex items-center justify-center">
                <div className="w-1 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Glowing label */}
            <div className="absolute -left-20 top-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black text-white text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-widest shadow-xl">
                {isDark ? 'Pull for Light' : 'Pull for Dark'}
            </div>
        </div>
      </motion.div>
    </div>

  );
}
