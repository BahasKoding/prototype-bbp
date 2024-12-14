import { motion } from 'framer-motion';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1530538987395-032d1800fdd4?ixlib=rb-4.0.3',
    title: 'Diskusi Buku Agustus 2023',
    description: 'Membahas Buku "Laskar Pelangi"'
  },
  {
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3',
    title: 'Workshop Menulis',
    description: 'Bersama Penulis Best Seller'
  },
  {
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3',
    title: 'Tukar Buku',
    description: 'Event Tukar Buku Triwulan'
  },
  {
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3',
    title: 'Reading Club',
    description: 'Sesi Membaca Bersama'
  }
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[linear-gradient(45deg,#1b3c35_0.5px,transparent_0.5px),linear-gradient(-45deg,#1b3c35_0.5px,transparent_0.5px)] bg-[length:24px_24px] opacity-[0.02]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 border-2 border-dashed border-secondary/20 rounded-full"
        />
      </div>

      <div className="absolute bottom-10 left-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-1"
        >
          <div className="w-16 h-[2px] bg-secondary/20 rounded-full transform rotate-45" />
          <div className="w-16 h-[2px] bg-secondary/20 rounded-full transform -rotate-45" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Momen Berharga Kami
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-secondary mx-auto"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-4 h-4 bg-secondary/10 rounded-bl-xl" />
              </div>

              <div className="relative h-64 sm:h-56 md:h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-white font-bold text-lg mb-2"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/90 text-sm"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 space-y-2 hidden lg:block">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-secondary/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
}