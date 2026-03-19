import React from 'react';
import { motion } from 'framer-motion';
import { 
  AppWindow, Server, Cpu, BrainCircuit, Globe, Code2 
} from 'lucide-react';

const services = [
  {
    title: "Frontend Development",
    description: "Creating stunning, responsive, and user-centric interfaces using modern frameworks like React and Next.js.",
    icon: <AppWindow size={40} />,
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"]
  },
  {
    title: "Backend Solutions",
    description: "Building robust, scalable server-side architectures and efficient database systems to power your apps.",
    icon: <Server size={40} />,
    tags: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"]
  },
  {
    title: "Full Stack Systems",
    description: "Seamlessly integrating frontend and backend to deliver complete, high-performance web applications.",
    icon: <Globe size={40} />,
    tags: ["MERN Stack", "Auth", "State Management", "Deployment"]
  },
  {
    title: "AI/ML Integration",
    description: "Implementing intelligent features and data models to enhance application logic and user experience.",
    icon: <BrainCircuit size={40} />,
    tags: ["Python", "NIDS", "Data Visualization", "ML Models"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-peach/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="md:w-1/2">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-peach font-black uppercase tracking-[0.3em] text-sm mb-4"
            >
              My expertise
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight"
            >
              Services <br />
              <span className="text-gray-400">& Skills</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/3 text-gray-500 dark:text-gray-400 font-medium leading-relaxed"
          >
            I specialize in building modular, high-performance web applications with a focus on clean code and exceptional user experience.
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-[40px] group relative overflow-hidden flex flex-col items-start text-left cursor-default"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-peach/5 dark:bg-peach/10 rounded-bl-[80px] group-hover:bg-peach/10 dark:group-hover:bg-peach/20 transition-all duration-500" />
              
              <div className="w-20 h-20 bg-orange-50 dark:bg-gray-900 border border-orange-100 dark:border-white/10 rounded-2xl flex items-center justify-center text-peach mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-peach transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-white/10 w-full">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-3 py-1 bg-gray-50 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/5 group-hover:border-peach/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

