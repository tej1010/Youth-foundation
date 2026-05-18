/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { GraduationCap } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/10 selection:text-primary">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-primary mb-4"
            >
              <GraduationCap size={64} />
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              className="h-1 bg-gray-100 rounded-full overflow-hidden"
            >
              <motion.div 
                animate={{ x: [-200, 200] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-1/2 h-full bg-primary"
              />
            </motion.div>
            <p className="mt-4 font-display font-bold text-gray-400 tracking-widest text-xs uppercase">
              Youth Foundation
            </p>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Courses />
            
            {/* CTA Section (Join Now) */}
            <section className="py-20 bg-primary overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-8">
                  Start Your Preparation With <br /> Youth Foundation Today
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                    Join Now
                  </button>
                  <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                    Download Syllabus
                  </button>
                </div>
              </div>
            </section>

            <WhyChooseUs />
            
            {/* Results Counters Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                   {[
                     { label: 'Selections', value: '1,200+' },
                     { label: 'Mock Tests', value: '50,000+' },
                     { label: 'Success Rate', value: '94%' },
                     { label: 'Happy Students', value: '5,000+' },
                   ].map((stat, i) => (
                     <div key={i} className="text-center group p-8 rounded-3xl bg-white shadow-sm border border-gray-100 hover:border-primary/20 transition-all">
                        <div className="text-3xl lg:text-5xl font-display font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                          {stat.value}
                        </div>
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                          {stat.label}
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            <Testimonials />
            <Gallery />
            <FAQ />
            <Contact />
            <Footer />
            <WhatsAppButton />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

