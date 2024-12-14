import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, Sparkles, BookHeart, Coffee } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Amalia',
    role: 'Anggota Aktif',
    text: 'Bogor Book Party mengubah cara saya menikmati buku. Diskusi-diskusi yang menarik dan teman-teman yang supportif!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3'
  },
  {
    name: 'Budi Santoso',
    role: 'Pembaca Antusias',
    text: 'Komunitas yang luar biasa! Saya menemukan banyak inspirasi dan teman-teman yang sepaham di sini.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'
  },
  {
    name: 'Dian Kusuma',
    role: 'Book Club Leader',
    text: 'Sebagai pemimpin klub buku, saya sangat senang melihat antusiasme anggota dalam setiap diskusi.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
  },
  {
    name: 'Reza Pratama',
    role: 'Penulis Muda',
    text: 'Forum yang tepat untuk berbagi passion menulis dan membaca. Banyak insight berharga yang saya dapatkan.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3'
  },
  {
    name: 'Maya Indah',
    role: 'Pengajar Literasi',
    text: 'Komunitas ini memberikan dampak positif bagi perkembangan literasi di Bogor. Sangat menginspirasi!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <section id="testimoni" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern - Menggunakan pattern yang berbeda */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[linear-gradient(135deg,#1b3c35_0.8px,transparent_0.8px)] bg-[length:30px_30px] opacity-[0.02]" />
      </div>

      {/* Floating Decorations - Menggunakan dekorasi yang berbeda */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars Decoration */}
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={`star-${index}`}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute hidden md:block
              ${index === 0 ? 'top-20 left-[15%]' : ''}
              ${index === 1 ? 'top-40 right-[20%]' : ''}
              ${index === 2 ? 'bottom-32 left-[25%]' : ''}
              ${index === 3 ? 'bottom-24 right-[18%]' : ''}
            `}
          >
            <Star className="w-6 h-6 text-secondary" />
          </motion.div>
        ))}

        {/* Coffee & Book Decorations */}
        <motion.div
          animate={{ 
            rotate: [0, 10, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-[10%] hidden md:block"
        >
          <Coffee className="w-8 h-8 text-primary/20" />
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, -8, 0],
            y: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-[12%] hidden md:block"
        >
          <BookHeart className="w-10 h-10 text-primary/20" />
        </motion.div>

        {/* Sparkles Animation */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={`sparkle-${index}`}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute hidden md:block
              ${index === 0 ? 'top-1/3 left-[30%]' : ''}
              ${index === 1 ? 'top-2/3 right-[25%]' : ''}
              ${index === 2 ? 'bottom-1/3 left-[20%]' : ''}
            `}
          >
            <Sparkles className="w-5 h-5 text-secondary/40" />
          </motion.div>
        ))}
      </div>

      {/* Corner Decorations - Style yang berbeda */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="absolute top-6 left-6 w-12 h-[1px] bg-gradient-to-r from-secondary to-transparent" />
          <div className="absolute top-6 left-6 w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-0 right-0 w-full h-full"
        >
          <div className="absolute bottom-6 right-6 w-12 h-[1px] bg-gradient-to-l from-secondary to-transparent" />
          <div className="absolute bottom-6 right-6 w-[1px] h-12 bg-gradient-to-t from-secondary to-transparent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Apa Kata Anggota Kami?
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-secondary mx-auto mt-4"
            />
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-full"
              >
                <motion.div 
                  className="bg-neutral-light p-6 md:p-8 rounded-xl shadow-lg relative"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  whileHover={{ y: -5 }}
                >
                  {/* Card Corner Accent */}
                  <div className="absolute top-0 right-0">
                    <div className="w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 right-0 w-4 h-4 bg-secondary/5 rounded-bl-xl" />
                    </div>
                  </div>

                  <Quote className="w-10 h-10 md:w-12 md:h-12 text-secondary mb-4" />
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    <motion.img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-secondary/20"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="text-center md:text-left flex-1">
                      <p className="text-neutral-dark text-base md:text-lg mb-4 italic">
                        "{testimonials[currentIndex].text}"
                      </p>
                      <h3 className="font-bold text-primary text-lg">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-neutral-dark text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-secondary' : 'bg-neutral-dark/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}