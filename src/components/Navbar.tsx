import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollHelper';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const navLinks = [
    { name: 'Beranda', id: 'beranda' },
    { name: 'Tentang', id: 'tentang' },
    { name: 'Fitur', id: 'fitur' },
    { name: 'Galeri', id: 'galeri' },
    { name: 'Agenda', id: 'agenda' },
    { name: 'Testimoni', id: 'testimoni' },
  ];

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 1)', 'rgb(27, 60, 53)']
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ['rgba(27, 60, 53, 0)', 'rgba(27, 60, 53, 0.1)']
  );

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.nav
      style={{ 
        backgroundColor,
        borderBottom: useTransform(borderOpacity, (opacity) => `1px solid ${opacity}`)
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('beranda')}
          >
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <motion.span style={{ color: textColor }} className="text-2xl font-bold">
              IBP Bogor
            </motion.span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavClick(link.id)}
                style={{ color: textColor }}
                whileHover={{ scale: 1.05 }}
                className="font-medium"
              >
                {link.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNavClick('join')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-primary font-bold px-6 py-2 rounded-full"
            >
              Join Community
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: textColor }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
            >
              <motion.div className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="px-4"
                  >
                    <motion.button
                      onClick={() => handleNavClick(link.id)}
                      className="w-full text-left py-3 text-primary hover:text-secondary transition-colors"
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.name}
                    </motion.button>
                  </motion.div>
                ))}
                <motion.div
                  variants={itemVariants}
                  className="px-4 pt-2"
                >
                  <motion.button
                    onClick={() => handleNavClick('join')}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-secondary text-primary font-bold px-6 py-3 rounded-full"
                  >
                    Join Community
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}