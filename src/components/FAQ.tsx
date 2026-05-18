import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is the duration of SSC CGL coaching?',
    a: 'The comprehensive course duration is 6 to 8 months, covering tier-1 and tier-2 syllabi with regular practice sessions.',
  },
  {
    q: 'Do you provide online classes?',
    a: 'Yes, we offer Hybrid mode. Students can attend offline classes and also get access to recorded lectures and online test series.',
  },
  {
    q: 'What is the fee structure for Bank exams?',
    a: 'Our fee structure is very competitive. It varies based on dependencies (only PO, only Clerk, or Combo). Contact us for current scholarships and offers.',
  },
  {
    q: 'Are there separate batches for working professionals?',
    a: 'Yes, we have Early Morning (7 AM) and Late Evening (6 PM) batches specifically designed for working students.',
  },
  {
    q: 'Do you provide study material?',
    a: 'Absolutely. We provide complete printed modules for Math, Reasoning, English, and GA, updated every quarter for new exam patterns.',
  },
];

export const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-wider mb-4">FAQs</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">Common Doubts</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl overflow-hidden border transition-all ${
                active === index ? 'border-primary ring-1 ring-primary/10' : 'border-gray-100'
              }`}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center gap-4"
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                <div className={`transition-transform duration-300 ${active === index ? 'rotate-180' : ''}`}>
                   {active === index ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-gray-400" />}
                </div>
              </button>
              
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
