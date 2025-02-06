import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/10 rounded-full border border-white/20 p-2">
          <ul className="flex justify-center space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`px-4 py-2 rounded-full transition-all duration-300 inline-block relative ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}