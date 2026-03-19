import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';

const projects = [
  {
    title: "Farmer Portal – Scheme Eligibility System",
    description: "A web application helping farmers instantly check eligibility for government welfare schemes with simple UI for rural users.",
    image: "assets/photos/farmer_portal.jpg",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    category: "Full Stack",
    github: "https://github.com/tejagadugreat/farmer_portel.git",
    live: "#",
    features: ["Scheme matching logic", "Farmer data processing", "Simple UI"],
  },
  {
    title: "Mitai Garage – Sweets E-Commerce",
    description: "Full stack e-commerce platform for a sweets business allowing online ordering and secure payments.",
    image: "assets/photos/mitai_garage.png",
    tags: ["Node.js", "Express.js", "JavaScript", "HTML/CSS", "Payment"],
    category: "Full Stack",
    github: "https://github.com/tejagadugreat/sweets-ecom.git",
    live: "#",
    features: ["Product browsing", "Online ordering", "Secure payments", "REST APIs"],
  },
  {
    title: "Crave \u2013 Food Delivery Platform",
    description: "A premium food delivery web application built for a recurring client. Features intuitive restaurant browsing, cart management, and a sleek modern UI.",
    image: "assets/photos/crave_delivery.jpg",
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
    <section id="projects" className="py-24 relative bg-white dark:bg-[#050505] min-h-screen transition-colors duration-500">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Featured <span className="text-peach">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-peach mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-peach/10 text-peach border-peach/50 shadow-lg"
                  : "bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10"
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
                className="glass-card rounded-[40px] overflow-hidden group border border-gray-100 dark:border-white/10 hover:border-peach/50 transition-all duration-300 shadow-sm hover:shadow-2xl"
              >
                {/* Image Handle */}
                <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-100 dark:border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover origin-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(project.title) + '&background=fb923c&color=fff&size=512'; }}
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                    <div className="flex gap-4">
                      <a href={project.github} className="p-4 bg-white/20 hover:bg-peach rounded-full text-white transition-all hover:scale-110">
                        <Github size={24} />
                      </a>
                      <a href={project.live} className="p-4 bg-white/20 hover:bg-peach rounded-full text-white transition-all hover:scale-110">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-10 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-peach transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-8 space-y-3">
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center">
                      <Activity size={18} className="mr-2 text-peach" /> Key Highlights
                    </h4>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 font-bold space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                           <div className="w-1.5 h-1.5 bg-peach rounded-full" />
                           <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t border-gray-100 dark:border-white/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 bg-gray-50 dark:bg-peach/10 text-gray-400 dark:text-peach rounded-full border border-gray-100 dark:border-peach/20 group-hover:bg-peach group-hover:text-white transition-all"
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
