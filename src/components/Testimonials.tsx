import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Selected as SSC CGL Inspector',
    review: 'Youth Foundation provided the best environment for my preparation. The faculty specifically helped me overcome my fear of Advanced Mathematics.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=rahul',
  },
  {
    name: 'Priya Verma',
    role: 'Bank PO, SBI',
    review: 'The Shortcut tricks taught in the classes were a game-changer for me. Weekly mock tests analyzed my weak areas perfectly.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=priya',
  },
  {
    name: 'Ankit Gupta',
    role: 'Railway NTPC Selection',
    review: 'Amazing study material and very supportive teachers. The Doubt sessions are actually helpful, unlike other institutes.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=ankit',
  },
  {
    name: 'Sneha Jain',
    role: 'Steno Grade C Selection',
    review: 'Youth Foundation is the only place in Jaipur where you get genuine shorthand training. I cleared my skill test in the first attempt.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=sneha',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold uppercase tracking-wider mb-4">Success Stories</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">What Our Achievers Say</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-3xl border border-gray-700 relative hover:bg-gray-800 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-blue-500/20" size={40} />
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">"{item.review}"</p>
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-base">{item.name}</h4>
                  <p className="text-xs text-blue-400 font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
