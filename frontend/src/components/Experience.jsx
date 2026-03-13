import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, IndianRupee, Code, Server, CreditCard } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#0a0a0f] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Experience</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative border-l-2 border-purple-500/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-purple-500/30 -translate-x-1/2" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:odd:flex-row-reverse group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-41px] md:static md:left-auto md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#101015] border-4 border-purple-500 z-10 shadow-[0_0_20px_rgba(147,51,234,0.5)] group-hover:scale-110 transition-transform">
              <Briefcase className="text-purple-400 w-5 h-5 md:w-8 md:h-8" />
            </div>

            {/* Content Box */}
            <div className="w-full md:w-[45%] glass-card p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-colors shadow-xl">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-colors">
                <img 
                  src="/assets/photos/crave_delivery.jpg" 
                  alt="Freelance Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Freelance Developer</h3>
                  <p className="text-purple-400 font-medium">Independent</p>
                </div>
                <div className="bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 text-purple-300 text-sm font-semibold flex items-center shadow-[0_0_10px_rgba(147,51,234,0.2)]">
                  <IndianRupee size={14} className="mr-1" /> 5,000
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Designed and developed a robust full-stack web application for a small business. Overcame complex architectural challenges to deliver a seamless user experience from the UI to backend order processing.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <Code size={16} className="text-blue-400 mr-3" />
                  <span>Built interactive Frontend UI</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Server size={16} className="text-purple-400 mr-3" />
                  <span>Developed secure Backend APIs</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CreditCard size={16} className="text-green-400 mr-3" />
                  <span>Integrated secure Payment Gateway</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
