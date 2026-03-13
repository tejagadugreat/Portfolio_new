import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';

const projects = [
  {
    title: "Farmer Portal \u2013 Scheme Eligibility System",
    description: "A web application helping farmers instantly check eligibility for government welfare schemes with simple UI for rural users.",
    image: "/assets/photos/farmer_portal.jpg",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    category: "Full Stack",
    github: "#",
    live: "#",
    features: ["Scheme matching logic", "Farmer data processing", "Simple UI"],
  },
  {
    title: "Mitai Garage \u2013 Sweets E-Commerce",
    description: "Full stack e-commerce platform for a sweets business allowing online ordering and secure payments.",
    image: "/assets/photos/mitai_garage.png",
    tags: ["Node.js", "Express.js", "JavaScript", "HTML/CSS", "Payment"],
    category: "Full Stack",
    github: "#",
    live: "#",
    features: ["Product browsing", "Online ordering", "Secure payments", "REST APIs"],
  },
  {
    title: "Crave \u2013 Food Delivery Platform",
    description: "A premium food delivery web application built for a recurring client. Features intuitive restaurant browsing, cart management, and a sleek modern UI.",
    image: "/assets/photos/crave_delivery.jpg",
    tags: ["React.js", "TailwindCSS", "Node.js", "Express.js", "Stripe"],
    category: "Full Stack",
    github: "#",
    live: "#",
    features: ["On-demand delivery tracking", "Secure payments", "Restaurant dashboard"],
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 relative bg-[#050505] min-h-screen">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-purple-600/20 text-purple-400 border-purple-500/50 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl overflow-hidden group border border-white/10 hover:border-purple-500/50"
              >
                {/* Image Handle */}
                <div className="relative h-64 overflow-hidden bg-gray-900 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover origin-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://source.unsplash.com/random/800x600/?coding,technology'; }}
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                    <div className="flex gap-4">
                      <a href={project.github} className="p-3 bg-white/10 hover:bg-purple-600 rounded-full text-white transition-colors">
                        <Github size={24} />
                      </a>
                      <a href={project.live} className="p-3 bg-white/10 hover:bg-blue-600 rounded-full text-white transition-colors">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    <h4 className="text-sm font-semibold text-gray-200 flex items-center">
                      <Activity size={16} className="mr-2 text-purple-400" /> Key Features
                    </h4>
                    <ul className="text-sm text-gray-400 list-disc list-inside px-2">
                      {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 mt-12 text-lg">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
