import { motion } from 'framer-motion';
import { Users, BookOpen, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern - Visible on all devices */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Dots */}
        <div className="absolute right-4 md:right-8 top-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex space-x-1"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/20" />
          </motion.div>
        </div>

        {/* Bottom Left Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute left-4 md:left-8 bottom-12 w-16 h-[2px] bg-gradient-to-r from-secondary/30 to-transparent origin-left"
        />

        {/* Subtle Corner Accents */}
        <div className="absolute left-0 top-0 w-20 h-20">
          <div className="absolute left-4 top-4 w-[1px] h-12 bg-gradient-to-b from-secondary/20 to-transparent" />
          <div className="absolute left-4 top-4 w-12 h-[1px] bg-gradient-to-r from-secondary/20 to-transparent" />
        </div>
        
        <div className="absolute right-0 bottom-0 w-20 h-20">
          <div className="absolute right-4 bottom-4 w-[1px] h-12 bg-gradient-to-t from-secondary/20 to-transparent" />
          <div className="absolute right-4 bottom-4 w-12 h-[1px] bg-gradient-to-l from-secondary/20 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="relative">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Menghubungkan Pembaca, Menciptakan Cerita
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "96px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-secondary mt-2"
              />
            </h2>
            <p className="text-neutral-dark text-lg mb-6">
              Bogor Book Party adalah komunitas yang menghidupkan budaya membaca melalui
              kegiatan sosial yang menyenangkan. Kami percaya bahwa membaca lebih bermakna
              ketika dibagikan bersama.
            </p>
            <div className="space-y-4">
              {[
                { icon: Users, text: 'Komunitas Aktif' },
                { icon: BookOpen, text: 'Diskusi Buku Mingguan' },
                { icon: Heart, text: 'Suasana Yang Hangat' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-neutral-dark font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Grid remains the same */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px] relative"
          >
            {/* Images remain the same */}
            <div className="col-span-8 row-span-4 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
                alt="Book Collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-4 row-span-2 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6"
                alt="Reading Corner"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-4 row-span-4 col-start-9 row-start-3 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
                alt="Reading Together"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-8 row-span-2 row-start-5 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Book Discussion"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}