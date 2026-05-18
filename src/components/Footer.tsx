import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-2xl font-display font-bold text-primary tracking-tight">
              YOUTH<span className="text-accent">FOUNDATION</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering the youth of Rajasthan with world-class coaching for government and competitive exams. Our result-oriented approach makes dreams come true.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 underline decoration-primary underline-offset-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> Success Stories</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> Career Counseling</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> Blog & Articles</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} /> Join as Faculty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 underline decoration-accent underline-offset-8">Popular Courses</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">SSC CGL / CHSL</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Bank PO / Clerk</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Railway NTPC / Group D</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Steno Hindi / English</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">Delhi Police Constable</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 underline decoration-blue-600 underline-offset-8">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm">
                <span className="font-bold block text-gray-900 mb-1">Call Support:</span>
                +91 96104 23100
              </li>
              <li className="text-gray-500 text-sm">
                <span className="font-bold block text-gray-900 mb-1">Email:</span>
                admission@youthfoundation.in
              </li>
              <li className="text-gray-500 text-sm">
                <span className="font-bold block text-gray-900 mb-1">Address:</span>
                Tonk Phatak, Jaipur, <br /> Rajasthan - 302015
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Youth Foundation Jaipur. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
