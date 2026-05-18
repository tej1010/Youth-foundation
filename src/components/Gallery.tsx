import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=2187&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=2069&auto=format&fit=crop',
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-wider mb-4">Our Gallery</h2>
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">Sneak Peek Into Our World</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl group cursor-zoom-in ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover aspect-video hover:brightness-75 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                    <Plus size={24} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
