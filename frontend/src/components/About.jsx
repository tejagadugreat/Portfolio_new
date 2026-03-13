import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Code2, Brain, CheckCircle, Trophy, BookOpen } from 'lucide-react';

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
    <div ref={ref} className="glass-card p-6 flex flex-col items-center justify-center rounded-2xl border-t border-white/10 hover:border-purple-500/50 transition-colors">
      <div className="text-purple-400 mb-3 bg-purple-500/10 p-3 rounded-full">
        <Icon size={28} />
      </div>
      <h3 className="text-4xl font-bold text-white mb-2">{val}+</h3>
      <p className="text-gray-400 text-sm tracking-wide uppercase">{label}</p>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Timeline Style Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500/50 before:to-transparent"
          >
            {[
              { title: "Passion for Web Apps", icon: Code2, desc: "Building scalable and beautiful full-stack web applications." },
              { title: "Problem Solving Mindset", icon: Brain, desc: "Tackling complex challenges with optimized algorithms and logic." },
              { title: "AI Technologies", icon: BookOpen, desc: "Constantly learning and integrating AI tools to enhance development." },
              { title: "Real-World Projects", icon: CheckCircle, desc: "Experience in building production-ready projects for clients." }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mx-auto">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#101015] border-2 border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)] z-10 text-purple-400 group-hover:scale-110 transition-transform">
                  <item.icon size={18} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] lg:w-[calc(100%-4rem)] glass p-5 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors shadow-lg shadow-black/50 ml-6 md:ml-0 md:group-even:mr-auto md:group-odd:ml-auto lg:group-even:mr-0 lg:ml-6">
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Profile Photo (Middle column on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:order-2 flex justify-center"
          >
            <div className="relative group">
               {/* Decorative border */}
               <div className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
               <div className="relative w-64 h-80 md:w-80 md:h-[450px] rounded-3xl overflow-hidden border-2 border-white/10 p-2 glass-card">
                  <img src="/assets/photos/profile.jpg" alt="Teja Reddy Profile" className="w-full h-full object-cover rounded-2xl" onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Teja+Reddy&background=random&size=400'; }} />
               </div>
            </div>
          </motion.div>

          {/* Description & Counters (Right column on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-3 flex flex-col justify-center space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-lg text-gray-300 leading-relaxed font-light relative z-10">
                Hi, I'm <strong className="text-white font-semibold">Teja Reddy</strong>, a Computer Science Engineering student at
                Lovely Professional University. I have a robust interest in building
                dynamic full-stack web applications and solving real-world problems using modern technology.
                My goal is to craft digital experiences that are not just functional, but <span className="text-purple-400 italic">visually stunning</span> and highly efficient.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Counter to={15} label="Projects" icon={Code2} />
              <Counter to={90} label="DSA Problems" icon={Brain} />
              <Counter to={5} label="Certificates" icon={Trophy} />
              <div className="lg:hidden md:block">
                 <Counter to={100} label="Happy Clients" icon={CheckCircle} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
