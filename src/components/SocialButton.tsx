import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface SocialButtonProps {
  platform: string;
  color: string;
  delay: number;
}

export default function SocialButton({ platform, color, delay }: SocialButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${color} text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl hover:opacity-90 transition-all duration-300 flex items-center space-x-3 transform hover:-translate-y-1`}
    >
      <MessageCircle className="w-6 h-6" />
      <span>Join {platform}</span>
    </motion.button>
  );
}