import React from 'react';
import { motion } from 'motion/react';
import { Book, Landmark, Train, PenTool, Shield, ChevronRight } from 'lucide-react';

const courses = [
  {
    title: 'SSC Coaching',
    icon: Book,
    desc: 'Comprehensive preparation for CGL, CHSL, MTS, and CPO.',
    features: ['Regular Mock Tests', 'Arithmetic & Advanced Math', 'Updated General Awareness'],
    duration: '6-8 Months',
    color: 'bg-blue-600',
  },
  {
    title: 'Bank Coaching',
    icon: Landmark,
    desc: 'Targeted coaching for IBPS PO/Clerk, SBI, and RRB.',
    features: ['Speed Math Tricks', 'Reasoning Special', 'Banking Awareness'],
    duration: '4-6 Months',
    color: 'bg-emerald-600',
  },
  {
    title: 'Railway Coaching',
    icon: Train,
    desc: 'Complete syllabus coverage for NTPC, Group D, and ALP.',
    features: ['Science Special Focus', 'Static GK', 'Previous Year Papers'],
    duration: '3-5 Months',
    color: 'bg-orange-600',
  },
  {
    title: 'Steno Coaching',
    icon: PenTool,
    desc: 'Expert Shorthand training for all government departments.',
    features: ['Hindi/English Shorthand', 'Typing Test Prep', 'Dictation Classes'],
    duration: '12 Months',
    color: 'bg-purple-600',
  },
  {
    title: 'Delhi Police',
    icon: Shield,
    desc: 'Physical and written exam preparation for Constable/SI.',
    features: ['Physical Test Tips', 'GK Specialist', 'CSAT Prep'],
    duration: '4 Months',
    color: 'bg-red-600',
  },
];

interface CourseCardProps {
  course: typeof courses[0];
  index: number;
  key?: React.Key;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className={`${course.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
        <course.icon size={28} />
      </div>
      
      <span className="inline-block px-3 py-1 bg-gray-50 text-gray-500 text-xs font-bold rounded-full mb-4 border border-gray-100">
        {course.duration}
      </span>
      
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{course.title}</h3>
      <p className="text-gray-500 mb-6 line-clamp-2">{course.desc}</p>
      
      <ul className="space-y-3 mb-8">
        {course.features.map((feat, i) => (
          <li key={i} className="flex items-center text-sm text-gray-600">
            <div className={`${course.color} w-1.5 h-1.5 rounded-full mr-2`} />
            {feat}
          </li>
        ))}
      </ul>
      
      <button className="flex items-center text-primary font-bold group-hover:gap-2 transition-all">
        Learn More <ChevronRight size={18} />
      </button>
    </motion.div>
  );
};

export const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-wider mb-4">Our Programs</h2>
          <h3 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Elite Prep for Every Exam
          </h3>
          <p className="text-gray-600">
            Choose from our specialized programs designed by toppers and veteran faculty. We provide the edge you need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 bg-blue-600 text-white flex flex-col justify-center items-center text-center space-y-6"
          >
            <h3 className="text-2xl font-bold italic">Want to Customise Your Prep?</h3>
            <p className="text-blue-100">Talk to our career counselors today for a personalized roadmap.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Get Free Counseling
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
