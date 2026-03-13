import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science Engineering",
    score: "CGPA: 6.97",
    year: "Present",
    color: "purple",
  },
  {
    institution: "Narayana BDVM",
    degree: "Intermediate",
    score: "83%",
    year: "Completed",
    color: "blue",
  },
  {
    institution: "VBR Residential School",
    degree: "Matriculation",
    score: "99.3%",
    year: "Completed",
    color: "indigo",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#050505] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Education</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="relative border-l-2 border-purple-500/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-indigo-500/50 -translate-x-1/2" />

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? '-50px' : '50px' }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-12 last:mb-0 group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="absolute left-[-41px] md:static md:left-auto md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#101015] border-4 border-purple-500 z-10 shadow-[0_0_20px_rgba(147,51,234,0.5)] group-hover:scale-110 transition-transform">
                <GraduationCap className={`text-${edu.color}-400 w-5 h-5 md:w-8 md:h-8`} />
              </div>

              <div className={`w-full md:w-[45%] glass-card p-8 rounded-2xl border border-white/5 hover:border-${edu.color}-500/50 transition-colors shadow-lg relative group overflow-hidden`}>
                {/* Glow Background */}
                <div className={`absolute inset-0 bg-${edu.color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10">{edu.institution}</h3>
                <h4 className={`text-sm md:text-base font-medium text-${edu.color}-400 mb-4 relative z-10`}>{edu.degree}</h4>
                
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="flex items-center text-sm text-gray-400">
                    <Award size={16} className={`mr-2 text-${edu.color}-400`} /> 
                    <span className="font-semibold text-gray-200">{edu.score}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin size={16} className={`mr-2 text-${edu.color}-400`} /> 
                    {edu.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
