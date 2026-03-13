import React from 'react';
import { motion } from 'framer-motion';
import { Star, Code, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: Star,
    title: "HackerRank",
    description: "5-star C++ rating",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Code,
    title: "LeetCode",
    description: "Solved 90+ problems",
    color: "from-orange-400 to-red-600",
    link: "https://leetcode.com/u/krishana_teja_123/",
  },
  {
    icon: Trophy,
    title: "Tech India Hackathon",
    description: "Qualified Round 2",
    color: "from-blue-400 to-indigo-600",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Achievements</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group p-[2px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-blue-500/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity rounded-3xl blur-xl" style={{ backgroundImage: `linear-gradient(to right, ${item.color.replace('from-', '').replace('to-', '')})` }} />
              
              <div className="bg-[#101015] h-full rounded-[23px] p-8 flex flex-col items-center justify-center text-center relative z-10 glass-card">
                
                {/* Glowing Icon Badge */}
                <div className={`relative mb-6 p-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg shadow-${item.color.split(' ')[0].replace('from-', '')}/50 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={36} className="text-white drop-shadow-md" />
                  
                  {/* Outer Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-md opacity-50 rounded-full`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-medium mb-4">{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center px-5 py-2 bg-white/5 hover:bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold transition-all duration-300 border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                    View Profile
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
