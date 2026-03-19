import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Star, Sparkles, Send, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] pt-20 transition-colors duration-500">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100/50 dark:bg-peach/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Intro */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm mb-8"
            >
              <span className="text-gray-600 dark:text-gray-400 font-medium">Hello there!</span>
              <Sparkles size={16} className="text-orange-400" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tight mb-4"
            >
              I'm <span className="text-peach">Teja Reddy,</span><br />
              Full Stack <span className="relative">
                Developer
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C118.957 4.47226 235.483 2.02084 355 9" stroke="#fb923c" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium mt-6 mb-12 mx-auto md:mx-0"
            >
              Building exceptional digital experiences that combine innovative design with robust engineering. Specialized in MERN Stack and AI applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6 z-20"
            >
              <button 
                 onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                 className="px-10 py-5 bg-gray-900 dark:bg-white dark:text-black text-white rounded-full font-bold text-lg flex items-center space-x-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105 shadow-xl"
              >
                <span>View My Work</span>
                <MousePointer2 size={20} />
              </button>
              
              <div className="flex items-center space-x-6">
                <button 
                   onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                   className="text-gray-900 dark:text-white font-bold text-lg flex items-center space-x-2 group"
                >
                  <span>Hire me</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <a 
                   href="assets/cv/teja_cv.pdf" 
                   download
                   className="text-gray-900 dark:text-white font-bold text-lg flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <span>CV</span>
                  <Download size={20} />
                </a>
              </div>
            </motion.div>
          </div>


          {/* Right Side: Photo Section */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
            {/* Circular Background */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-peach rounded-full opacity-80"
            />
            
            {/* Floating Badges */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-4 bottom-1/4 z-20 bg-white p-4 rounded-2xl shadow-2xl hidden lg:block text-left"
            >
              <div className="flex items-center space-x-1 text-orange-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xl font-bold text-gray-900">2 Years</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Industry Exp.</p>
            </motion.div>


            {/* Profile Image */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10 w-64 h-80 md:w-96 md:h-[480px] shadow-[0_30px_100px_rgba(0,0,0,0.2)] rounded-[60px] overflow-hidden bg-gray-100"
            >
              <img 
                src="assets/photos/profile.jpg" 
                alt="Teja Reddy" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Teja+Reddy&background=fb923c&color=fff&size=512'; }}
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}


