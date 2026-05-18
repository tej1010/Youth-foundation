import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919610423100"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-semibold text-sm whitespace-nowrap">
        Chat with Us
      </span>
    </motion.a>
  );
};
