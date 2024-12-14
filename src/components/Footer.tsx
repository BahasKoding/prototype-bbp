import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Twitter, CircleDot, Waves, Sparkles } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-primary text-white py-16 relative overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q10 15, 20 20 T40 20" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dots Pattern */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute hidden md:block
              ${i === 0 ? 'top-12 left-[10%]' : ''}
              ${i === 1 ? 'bottom-24 right-[15%]' : ''}
              ${i === 2 ? 'top-1/2 left-[85%]' : ''}
            `}
          >
            <CircleDot className="w-4 h-4 text-secondary/30" />
          </motion.div>
        ))}

        {/* Wave Lines */}
        <div className="absolute -left-10 top-0 w-32 h-32 opacity-10">
          <Waves className="w-full h-full text-secondary" />
        </div>
        <div className="absolute -right-10 bottom-0 w-32 h-32 opacity-10 rotate-180">
          <Waves className="w-full h-full text-secondary" />
        </div>

        {/* Sparkle Effects */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute hidden md:block
              ${i === 0 ? 'top-1/4 right-[20%]' : 'bottom-1/4 left-[20%]'}
            `}
          >
            <Sparkles className="w-5 h-5 text-secondary/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 relative inline-block">
              IBP Bogor
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-secondary/50 absolute -bottom-2 left-0"
              />
            </h3>
            <p className="text-white/80 mb-6">
              Komunitas pembaca yang aktif dan seru di Bogor. Bergabunglah bersama kami
              untuk pengalaman membaca yang lebih bermakna.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Kontak</h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:info@ibpbogor.com"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-white/80 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@ibpbogor.com</span>
              </motion.a>
              <motion.a
                href="tel:+6281234567890"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-white/80 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+62 812-3456-7890</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Media Sosial</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-white/60"
        >
          <p>© 2024 IBP Bogor. Semua Hak Dilindungi.</p>
        </motion.div>
      </div>
    </footer>
  );
}