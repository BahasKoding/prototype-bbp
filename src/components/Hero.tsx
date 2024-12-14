import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Star, CircleDashed } from 'lucide-react';
import { scrollToSection } from '../utils/scrollHelper';

export default function Hero() {
  const scrollToNextSection = () => {
    scrollToSection('tentang');
  };

  return (
    <section id="beranda" className="relative min-h-screen flex flex-col justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95" />
      </div>

      {/* Unique Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute hidden md:block
              ${i === 0 ? 'top-[15%] left-[10%]' : ''}
              ${i === 1 ? 'top-[25%] right-[15%]' : ''}
              ${i === 2 ? 'bottom-[30%] left-[20%]' : ''}
              ${i === 3 ? 'top-[45%] right-[25%]' : ''}
              ${i === 4 ? 'bottom-[20%] right-[10%]' : ''}
            `}
          >
            <Star className={`w-${4 + i} h-${4 + i} text-secondary/30`} />
          </motion.div>
        ))}

        {/* Circular Patterns */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-20 w-40 h-40 hidden md:block"
        >
          <CircleDashed className="w-full h-full text-secondary/20" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.05, 0.95, 1.05]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-20 w-40 h-40 hidden md:block"
        >
          <CircleDashed className="w-full h-full text-secondary/20" />
        </motion.div>

        {/* Sparkle Animations */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            animate={{ 
              y: [-20, 0, -20],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute hidden md:block
              ${i === 0 ? 'top-[30%] left-[30%]' : ''}
              ${i === 1 ? 'top-[60%] right-[35%]' : ''}
              ${i === 2 ? 'bottom-[40%] left-[25%]' : ''}
            `}
          >
            <Sparkles className="w-5 h-5 text-white/20" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Temukan Keajaiban
              <br />
              <span className="text-secondary relative inline-block">
                Membaca Bersama
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed"
          >
            Bergabung dengan komunitas pembaca yang aktif
            <br className="hidden md:block" /> dan seru di Bogor
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 mt-16"
      >
        <motion.button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center space-y-2 mx-auto cursor-pointer"
          whileHover={{ y: 5 }}
        >
          <span className="text-white/60 text-sm uppercase tracking-widest group-hover:text-secondary transition-colors">
            Jelajahi Lebih Lanjut
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <ChevronDown className="w-6 h-6 text-secondary relative z-10" />
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-secondary/20 rounded-full -z-10"
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}