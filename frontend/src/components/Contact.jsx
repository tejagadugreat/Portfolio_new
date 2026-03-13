import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Github, Code } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending...');

    // Simulate API call to backend
    // Uncomment when backend is hosted
    /*
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if(result.success) {
        setStatus('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch(err) {
      setStatus('Error sending message.');
    }
    */
    setTimeout(() => {
      setStatus('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050505] min-h-screen flex items-center">
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="glass-card p-10 rounded-3xl border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <h3 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors group/item cursor-pointer">
                  <div className="w-14 h-14 bg-[#101015] border border-white/10 rounded-full flex items-center justify-center mr-6 group-hover/item:border-purple-500 transition-colors shadow-lg">
                    <Mail className="text-purple-400 group-hover/item:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                    <a href="mailto:kteja0816@gmail.com" className="text-lg font-semibold">kteja0816@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center text-gray-300 hover:text-white transition-colors group/item cursor-pointer">
                  <div className="w-14 h-14 bg-[#101015] border border-white/10 rounded-full flex items-center justify-center mr-6 group-hover/item:border-blue-500 transition-colors shadow-lg">
                    <Phone className="text-blue-400 group-hover/item:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Call Me</p>
                    <a href="tel:+917569211719" className="text-lg font-semibold">+91 7569211719</a>
                  </div>
                </div>

                <div className="flex items-center text-gray-300 hover:text-white transition-colors group/item">
                  <div className="w-14 h-14 bg-[#101015] border border-white/10 rounded-full flex items-center justify-center mr-6 group-hover/item:border-purple-500 transition-colors shadow-lg">
                    <MapPin className="text-purple-400 group-hover/item:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                    <span className="text-lg font-semibold">Lovely Professional University</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex space-x-4 border-t border-white/10 pt-8">
                <a href="https://www.linkedin.com/in/k-venkata-krishana-teja-baab48287/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-purple-600/20 hover:border-purple-500 hover:text-purple-400 transition-all text-gray-400">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/tejagadugreat" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-purple-600/20 hover:border-purple-500 hover:text-purple-400 transition-all text-gray-400">
                  <Github size={20} />
                </a>
                <a href="https://leetcode.com/u/krishana_teja_123/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-orange-500/20 hover:border-orange-500 hover:text-orange-400 transition-all text-gray-400">
                  <Code size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl border border-white/5 relative group backdrop-blur-xl hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] transition-all duration-300">

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none" />

              <div className="mb-8 flex items-center text-2xl font-bold text-white relative z-10">
                <MessageSquare className="mr-3 text-purple-400" /> Send a Message
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#101015] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#101015] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="bg-[#101015] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending...'}
                  className="w-full flex items-center justify-center py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" size={20} />
                  {status === 'sending...' ? 'Sending...' : 'Send Message'}
                </button>

                {status && status !== 'sending...' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mt-4 p-4 text-center rounded-xl font-medium border ${status.includes('Successfully') ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}
                  >
                    {status}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
