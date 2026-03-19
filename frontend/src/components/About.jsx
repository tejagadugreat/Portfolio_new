import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Code2, Brain, CheckCircle, Trophy, BookOpen, User } from 'lucide-react';

const Counter = ({ to, label, icon: Icon }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate: (value) => setVal(Math.floor(value)),
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [to, inView]);

  return (
    <div ref={ref} className="bg-white p-6 flex flex-col items-center justify-center rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-peach mb-3 bg-orange-50 p-3 rounded-2xl">
        <Icon size={24} />
      </div>
      <h3 className="text-3xl font-black text-gray-900 mb-1">{val}+</h3>
      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500 border-t border-gray-100 dark:border-white/5">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-5/12 relative"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl dark:shadow-peach/10 rotate-3 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="assets/photos/profile.jpg" 
                 alt="Teja Reddy" 
                 className="w-full aspect-[4/5] object-cover"
                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Teja+Reddy&background=fb923c&color=fff&size=512'; }}
               />
            </div>
            {/* Decorative background circle */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-peach rounded-full opacity-10 blur-3xl" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="md:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-1 bg-peach rounded-full" />
                <span className="text-peach font-black uppercase tracking-[0.3em] text-sm">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
                Building Digital Products with <span className="text-gray-400">Passion & Purpose.</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
                I'm a Computer Science Engineering student at Lovely Professional University with a deep obsession for full-stack development. I combine technical precision with creative problem-solving to build applications that don't just work—they excel.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                 <Counter to={15} label="Projects" icon={Code2} />
                 <Counter to={90} label="DSA Problems" icon={Brain} />
                 <Counter to={5} label="Certificates" icon={Trophy} />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12 p-8 bg-gray-50 dark:bg-white/5 rounded-[32px] border border-gray-100 dark:border-white/10 flex items-start space-x-6 shadow-sm"
              >
                <div className="w-14 h-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center text-peach shadow-sm shrink-0">
                  <User size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">My Philosophy</h4>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    I believe that every line of code should contribute to a seamless user experience. My goal is to bridge the gap between complex backend logic and intuitive frontend design.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
}

