import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-bold uppercase tracking-wider mb-4">Contact Us</h2>
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-8">Let's Discuss Your Career Goals</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="bg-blue-50 p-4 rounded-2xl text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Our Location</h4>
                  <p className="text-gray-600">Plot No. 12, Main Road, Tonk Phatak, Jaipur, Rajasthan - 302015</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-yellow-50 p-4 rounded-2xl text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 96104 23100 / +91 0141 223344</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-red-50 p-4 rounded-2xl text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600">contact@youthfoundation.in</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-inner bg-gray-100 h-64 grayscale contrast-125">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.30325852925!2d75.71391512461099!3d26.848622152862846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db61238304983%3A0x666b6c2262abb31!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1715930000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Interested Course</label>
                <select className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all appearance-none cursor-pointer">
                  <option>Select Course</option>
                  <option>SSC</option>
                  <option>Bank</option>
                  <option>Railway</option>
                  <option>Steno</option>
                  <option>Delhi Police</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea rows={4} placeholder="I'd like to know more about..." className="w-full px-4 py-4 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold hover:bg-blue-800 shadow-lg shadow-blue-100 transition-all">
                Send Enquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
