import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Atom, Database, Wrench, Fingerprint, Layers, Cpu, Code2, CheckSquare, Terminal
} from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "C++", level: 90, icon: <Atom /> },
      { name: "JavaScript", level: 85, icon: <Code /> },
      { name: "C", level: 80, icon: <Cpu /> },
      { name: "PHP", level: 75, icon: <Code2 /> },
    ],
  },
  {
    category: "Frameworks & Web",
    items: [
      { name: "React.js", level: 85, icon: <Atom /> },
      { name: "Node.js", level: 80, icon: <Layers /> },
      { name: "HTML & CSS", level: 95, icon: <Code /> },
      { name: "Bootstrap", level: 85, icon: <Layers /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", level: 80, icon: <Database /> },
      { name: "MySQL", level: 85, icon: <Database /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", level: 90, icon: <Terminal /> },
      { name: "VS Code", level: 95, icon: <Code /> },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", level: 95, icon: <CheckSquare /> },
      { name: "Adaptability", level: 90, icon: <Fingerprint /> },
      { name: "Creativity", level: 85, icon: <Wrench /> },
      { name: "Client Handling", level: 80, icon: <CheckSquare /> },
    ],
  },
];

const SkillCard = ({ skill, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="glass-card flex items-center p-4 rounded-xl hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300 group"
  >
    <div className="text-purple-400 p-2 bg-[#1a1a24] rounded-lg mr-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
      {skill.icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
        <span className="text-sm font-medium text-purple-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full relative group-hover:shadow-[0_0_10px_#c084fc]"
        />
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, languages, and professional abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#101015]/80 p-6 rounded-2xl border border-white/5 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, idx) => (
                  <SkillCard key={idx} skill={skill} idx={idx} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
