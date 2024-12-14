import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Events />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  );
}