import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Users, Clock, BookOpen, Lightbulb } from 'lucide-react';

const features = [
  { icon: GraduationCap, title: 'Expert Faculty', text: 'Learn from Jaipur\'s most experienced educators.' },
  { icon: Clock, title: 'Daily Mock Tests', text: 'Rigorous assessment to track your progress.' },
  { icon: Users, title: 'Doubt Solving', text: 'Personalized interactive sessions for every student.' },
  { icon: BookOpen, title: 'Study Material', text: 'Curated and updated content for latest patterns.' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Institute building"
              className="rounded-3xl shadow-lg w-full aspect-[4/5] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-4">About Youth Foundation</h2>
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
              A Legacy of Excellence in Competitive Exams
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Youth Foundation is Jaipur's premier coaching institute dedicated to shaping the careers of government job aspirants. With over 8 years of experience, we have developed a result-oriented methodology that has helped thousands of students secure positions in SSC, Banking, Railways, and more.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="bg-blue-100 p-2 h-fit rounded-lg text-primary">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl shadow-blue-100">
               <div className="flex items-center gap-4">
                 <div className="bg-white/20 p-3 rounded-full">
                    <Lightbulb size={28} />
                 </div>
                 <div>
                   <p className="font-semibold italic">"Our mission is to provide quality education and accessible preparation to every deserving student in Rajasthan."</p>
                   <p className="text-sm text-blue-200 mt-2">— Founder, Youth Foundation</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
