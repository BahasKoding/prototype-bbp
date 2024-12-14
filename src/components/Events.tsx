import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, BookOpen, BookMarked, BookPlus, Library } from 'lucide-react';

const events = [
  {
    title: 'Diskusi Buku Mingguan',
    date: 'Sabtu, 24 Februari 2024',
    time: '10:00 - 12:00',
    location: 'Taman Kencana, Bogor'
  },
  {
    title: 'Book Sharing Session',
    date: 'Minggu, 25 Februari 2024',
    time: '15:00 - 17:00',
    location: 'Kedai Kopi Baca'
  }
];

export default function Events() {
  return (
    <section id="agenda" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03]" />
      </div>

      {/* Floating Book Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Icons */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] hidden md:block"
        >
          <BookOpen size={64} className="text-secondary" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-[10%] hidden md:block"
        >
          <Library size={72} className="text-white" />
        </motion.div>

        {/* Small Icons - Visible on all devices */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, i % 2 === 0 ? 10 : -10, 0],
              x: [0, i % 2 === 0 ? 5 : -5, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute ${
              i === 0 ? 'top-[20%] left-[15%]' :
              i === 1 ? 'top-[30%] right-[20%]' :
              i === 2 ? 'top-[60%] left-[25%]' :
              i === 3 ? 'bottom-[40%] right-[15%]' :
              i === 4 ? 'bottom-[20%] left-[10%]' :
              'bottom-[30%] right-[25%]'
            }`}
          >
            <BookMarked size={32} className={i % 2 === 0 ? "text-secondary" : "text-white"} />
          </motion.div>
        ))}
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-white rounded-tl-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-white rounded-br-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agenda Kami Minggu Ini
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-secondary mx-auto"
          />
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg relative group"
            >
              <h3 className="text-xl font-bold text-primary mb-6">{event.title}</h3>
              <div className="space-y-4">
                {[
                  { Icon: Calendar, text: event.date },
                  { Icon: Clock, text: event.time },
                  { Icon: MapPin, text: event.location }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                      <item.Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-neutral-dark">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-opacity-90 transition-colors"
          >
            Lihat Agenda Lengkap
          </motion.button>
        </div>
      </div>
    </section>
  );
}