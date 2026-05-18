import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, BadgeIndianRupee, Users2, LayoutDashboard, UserCheck, MonitorPlay } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: 'Experienced Teachers', desc: 'Faculty with 10+ years of domain expertise and proven selection records.' },
  { icon: BadgeIndianRupee, title: 'Affordable Fees', desc: 'Premium quality education at the most competitive price in Jaipur.' },
  { icon: Users2, title: 'Small Batch Size', desc: 'Limited students per batch ensuring individual attention to every aspirant.' },
  { icon: LayoutDashboard, title: 'Weekly Mock Tests', desc: 'Exam-like environment tests conducted every Sunday with detailed analysis.' },
  { icon: UserCheck, title: 'Personalized Mentorship', desc: 'One-on-one strategy sessions for performance improvement.' },
  { icon: MonitorPlay, title: 'Smart Classrooms', desc: 'Modern technology integration for better visualization and understanding.' },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-secondary font-bold uppercase tracking-wider mb-4">Why Youth Foundation</h2>
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
              We Don't Just Teach, <br /> We Transform Your Career
            </h3>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our holistic approach combines conceptual clarity, consistent practice, and psychological preparation to ensure you are ready for the D-day.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all group"
            >
              <div className="bg-white p-4 w-fit rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                <reason.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
