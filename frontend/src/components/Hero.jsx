import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Code } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#c084fc"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const texts = [
  "Web Developer",
  "Problem Solver",
  "AI Enthusiast",
  "Full Stack Developer"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Profile Photo Wrapper */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-yellow-400 p-1 mb-8 shadow-[0_0_40px_rgba(250,204,21,0.6)]"
        >
          <div className="w-full h-full rounded-full bg-gray-800 flex justify-center items-center overflow-hidden">
            <img src="/assets/photos/profile.jpg" alt="Teja Reddy" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Teja+Reddy&background=random&size=200'; }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white">
            Hi 👋 I'm <span className="text-gradient">Teja Reddy</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-4">
            Full Stack Developer | MERN Stack Enthusiast
          </h2>
        </motion.div>

        {/* Animated Text Cycling */}
        <div className="h-10 my-4 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h3
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-purple-400"
            >
              {texts[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Typing Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="max-w-2xl mx-auto text-gray-300 mt-6 md:text-lg mb-10"
        >
          Computer Science Engineering student at Lovely Professional University,
          passionate about building scalable web applications and solving real-world problems.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex space-x-6 mb-10"
        >
          <a href="https://github.com/tejagadugreat" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 bg-white/5 p-3 rounded-full hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            <Github size={28} />
          </a>
          <a href="https://leetcode.com/u/krishana_teja_123/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-400 hover:scale-110 transition-all duration-300 bg-white/5 p-3 rounded-full hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]">
            <Code size={28} />
          </a>
          <a href="https://www.linkedin.com/in/k-venkata-krishana-teja-baab48287/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] hover:scale-110 transition-all duration-300 bg-white/5 p-3 rounded-full hover:shadow-[0_0_15px_rgba(0,119,181,0.5)]">
            <Linkedin size={28} />
          </a>
          <a href="mailto:kteja0816@gmail.com" className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 bg-white/5 p-3 rounded-full hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]">
            <Mail size={28} />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/assets/cv/teja_cv.pdf"
            download
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </a>
          
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-transparent border-2 border-purple-500 rounded-full hover:bg-purple-500/10"
          >
            View Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center px-8 py-3 font-semibold text-gray-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10"
          >
            Contact Me
          </button>
        </motion.div>
        
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
