import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Users, Trophy, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] rounded-full bg-blue-50 blur-3xl opacity-60" />
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[50%] rounded-full bg-yellow-50 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Best Coaching in Jaipur</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-gray-900 leading-tight mb-6">
              Build Your <span className="text-primary italic">Government</span> Career With <span className="text-gradient">Youth Foundation</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Best Coaching Institute in Jaipur for SSC, Bank, Railway, Steno & Delhi Police Preparation. Achieve your dreams with expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contact"
                className="flex items-center justify-center bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-800 hover:-translate-y-1 transition-all group"
              >
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-display font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-500">Students</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gray-900">1200+</div>
                <div className="text-sm text-gray-500">Selections</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-500">Years Exp.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Students studying"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Absolute Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 lg:top-10 lg:-right-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                <Trophy size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">Top Rated</div>
                <div className="text-xs text-gray-500">In Rajasthan</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">Guaranteed</div>
                <div className="text-xs text-gray-500">Preparation</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
