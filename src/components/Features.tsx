import { motion } from 'framer-motion';
import { BookOpen, Users, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Piknik Membaca',
    description: 'Lokasi piknik terbaik untuk pengalaman membaca yang santai'
  },
  {
    icon: Users,
    title: 'Diskusi Buku',
    description: 'Bertukar pandangan dengan komunitas tentang buku favorit'
  },
  {
    icon: MessageCircle,
    title: 'Grup Online',
    description: 'Aktif di WhatsApp, Telegram, dan Discord'
  }
];

export default function Features() {
  return (
    <section id="fitur" className="py-20 bg-neutral-light relative overflow-hidden">
      {/* Background Pattern - Honeycomb pattern dari CTA */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFiM2MzNSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] bg-center" />
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-primary/10 rounded-tl-3xl"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-primary/10 rounded-br-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Kenapa Bogor Book Party?
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-secondary mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-lg relative group"
            >
              {/* Card Corner Accent */}
              <div className="absolute top-0 right-0">
                <div className="w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-4 h-4 bg-secondary/5 rounded-bl-xl" />
                </div>
              </div>

              {/* Icon Container with Animation */}
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/10 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-neutral-dark text-center">
                  {feature.description}
                </p>

                {/* Subtle Bottom Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -bottom-4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-2 space-y-2 hidden lg:block">
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