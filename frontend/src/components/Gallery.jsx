import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Vite specific way to get all images from a directory dynamically.
    // If photos are inside public, they aren't part of the module graph.
    // However, if we know some standard names or if we use import.meta.glob from src, it works.
    // For public folder dynamic reading without backend, we can just preset some placeholders
    // or simulate it, because browser JS can't read OS directories directly without help.
    // Let's create a predefined list for demonstration, and instruct user how to add them.
    const demoImages = [
       { src: '/assets/certificates/nptel_llm.png', title: 'Introduction to LLMs - NPTEL' },
       { src: '/assets/certificates/code_a_haunt.png', title: 'Code-A-Haunt Hackathon' },
       { src: '/assets/certificates/dsa_training.jpg', title: 'DSA Summer Bootcamp' },
       { src: '/assets/certificates/Automata.png', title: 'Automata Theory Certification' },
       { src: '/assets/certificates/Generative Ai.png', title: 'Generative AI Masterclass' },
       { src: '/assets/certificates/Promt Engineering.png', title: 'Prompt Engineering' },
       { src: '/assets/photos/profile.jpg', title: 'Profile Snapshot' },
    ];
    setImages(demoImages);
  }, []);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://source.unsplash.com/random/800x600/?technology,developer';
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#0a0a0f] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Gallery</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A glimpse into my hackathons, events, certificates, and personal developer journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className={`relative overflow-hidden group rounded-xl cursor-pointer ${idx % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                <Maximize2 className="text-white absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" size={24} />
                <h4 className="text-white font-bold text-lg md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 md:-top-0 text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 text-white rounded-full backdrop-blur-md z-50"
              >
                <X size={32} />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-auto max-h-[85vh] object-contain rounded-lg border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                onError={handleImageError}
              />
              <h3 className="text-xl md:text-2xl font-semibold text-white mt-4">{selectedImage.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
