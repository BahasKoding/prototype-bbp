import { motion } from 'framer-motion';
import { Send, Sparkles, MessageSquareHeart, Zap } from 'lucide-react';

const socialPlatforms = [
  {
    name: 'WhatsApp Community',
    href: 'https://chat.whatsapp.com/xxx',
    color: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    description: 'Grup diskusi utama dan info kegiatan'
  },
  {
    name: 'Telegram Channel',
    href: 'https://t.me/xxx',
    color: 'bg-gradient-to-br from-blue-500 to-blue-700',
    description: 'Update jadwal dan rekomendasi buku'
  },
  {
    name: 'Discord Server',
    href: 'https://discord.gg/xxx',
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    description: 'Voice chat dan diskusi mendalam'
  }
];

export default function CallToAction() {
  return (
    <section id="join" className="py-32 bg-neutral-light relative overflow-hidden">
      {/* Background Pattern - Unique honeycomb pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFiM2MzNSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] bg-center" />
      </div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sparkle Effects */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`sparkle-${index}`}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute hidden md:block
              ${index === 0 ? 'top-1/4 left-[10%]' : ''}
              ${index === 1 ? 'top-1/3 right-[15%]' : ''}
              ${index === 2 ? 'bottom-1/4 left-[20%]' : ''}
              ${index === 3 ? 'top-2/3 right-[25%]' : ''}
              ${index === 4 ? 'bottom-1/3 left-[85%]' : ''}
            `}
          >
            <Sparkles className="w-6 h-6 text-secondary" />
          </motion.div>
        ))}

        {/* Energy Lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-secondary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Social Platforms */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-primary">
              Bergabung dengan Komunitas
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-secondary mt-2"
              />
            </h2>
            
            <p className="text-primary/80 text-lg">
              Pilih platform favoritmu dan mulai berinteraksi dengan 500+ pembaca aktif
            </p>

            <div className="space-y-4">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`${platform.color} p-4 rounded-xl flex items-center gap-4 shadow-lg`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageSquareHeart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{platform.name}</h3>
                    <p className="text-white/80 text-sm">{platform.description}</p>
                  </div>
                  <Zap className="w-5 h-5 text-white/80 ml-auto" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl relative"
          >
            <div className="absolute top-0 right-0 w-20 h-20">
              <div className="absolute top-4 right-4 w-12 h-[1px] bg-gradient-to-l from-secondary/40 to-transparent" />
              <div className="absolute top-4 right-4 w-[1px] h-12 bg-gradient-to-b from-secondary/40 to-transparent" />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6">
              Kritik & Saran
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">
                  Instansi
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                  placeholder="Nama instansi (opsional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2">
                  Kritik & Saran
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                  placeholder="Berikan masukan untuk kami"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <Send className="w-5 h-5" />
                Kirim Masukan
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}