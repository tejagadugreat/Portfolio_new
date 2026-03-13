import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Eye, Download, X } from 'lucide-react';

const certificates = [
  {
    title: "CodeQuest: DSA Summer Bootcamp From Basics to Brilliance",
    provider: "Lovely Professional University",
    image: "/assets/certificates/dsa_training.jpg",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    provider: "Udemy",
    image: "/assets/certificates/Automata.png",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    provider: "Udemy",
    image: "/assets/certificates/Generative Ai.png",
  },
  {
    title: "Prompt Engineering",
    provider: "Udemy",
    image: "/assets/certificates/Promt Engineering.png",
  },
  {
    title: "Code-A-Haunt 24-hour Hackathon Participation",
    provider: "CodingBlocks LPU",
    image: "/assets/certificates/code_a_haunt.png",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Fallback handler if image isn't available
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://source.unsplash.com/random/800x600/?certificate,award';
  };

  return (
    <section id="certificates" className="py-24 relative bg-[#050505] min-h-screen flex items-center">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Certificates</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-gray-900 border-b border-white/10 flex items-center justify-center group">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 blur-sm brightness-75 group-hover:blur-none group-hover:brightness-100"
                  onError={handleImageError}
                />
                
                {/* Floating Overlay Button */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                   <button
                    onClick={() => setSelectedCert(cert)}
                    className="p-4 bg-white/10 hover:bg-purple-600 rounded-full text-white transition-colors"
                  >
                    <Eye size={28} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-purple-400 mb-3 text-sm font-semibold tracking-wider uppercase">
                  <Award size={16} className="mr-2" />
                  {cert.provider}
                </div>
                <h3 className="text-lg font-bold text-white mb-6 leading-snug line-clamp-2" title={cert.title}>
                  {cert.title}
                </h3>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 px-4 py-2 flex items-center justify-center gap-2 bg-purple-600/10 hover:bg-purple-600/30 text-purple-300 rounded-lg transition-colors border border-purple-500/20"
                  >
                    <Eye size={18} /> View
                  </button>
                  <a
                    href={cert.image}
                    download
                    className="flex-1 px-4 py-2 flex items-center justify-center gap-2 bg-blue-600/10 hover:bg-blue-600/30 text-blue-300 rounded-lg transition-colors border border-blue-500/20"
                  >
                    <Download size={18} /> Save
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center gap-4 p-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 md:-right-12 md:-top-4 text-white hover:text-red-500 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md"
              >
                <X size={32} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[80vh] w-auto object-contain rounded-lg border-2 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                onError={handleImageError}
              />
              <div className="text-center">
                 <h3 className="text-xl font-bold text-white mb-1">{selectedCert.title}</h3>
                 <p className="text-purple-400 font-medium">{selectedCert.provider}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
