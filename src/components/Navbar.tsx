import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '技能', href: '#skills' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-600/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#hero"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-mono font-bold text-lg">AC</span>
            </div>
            <span className="font-mono font-semibold text-xl text-white group-hover:text-gradient transition-all">
              Alex Chen
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-dark-100 hover:text-white hover:bg-dark-500/50 transition-all text-sm font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://github.com/alexchen"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 p-2 rounded-lg bg-dark-500/50 hover:bg-primary-500/20 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-primary-500" />
            </motion.a>
            <motion.a
              href="#contact"
              className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-primary-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              联系我
              <ChevronDown className="inline w-4 h-4 ml-1" />
            </motion.a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-dark-100 hover:bg-dark-500/50 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-600/95 backdrop-blur-lg border-t border-dark-500"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-dark-100 hover:text-white hover:bg-dark-500/50 transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-dark-500 flex space-x-3">
                <a
                  href="https://github.com/alexchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-500/50 hover:bg-primary-500/20 transition-all"
                >
                  <Github className="w-5 h-5 text-primary-500" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
