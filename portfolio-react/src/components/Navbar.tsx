import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor, Code2, Server, Database, Brain, Zap, User } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { scrollY } = useScroll();
  const navbarRef = useRef<HTMLNavElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const themeIcons = { light: Sun, dark: Moon, system: Monitor };
  const ThemeIcon = themeIcons[theme];

  return (
    <>
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-surface/80 backdrop-blur-xl border-b border-line shadow-lg shadow-ink/5' 
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.a
              href="#home"
              className="flex items-center gap-3 font-extrabold text-xl text-ink"
              aria-label="Nikhil Chavhan - Home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-xl bg-ink flex items-center justify-center">
                <span className="text-surface font-extrabold">N</span>
              </div>
              <span className="hidden sm:block">Nikhil Chavhan</span>
            </motion.a>

            <nav className="hidden lg:flex items-center gap-6" aria-label="Main menu">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative font-semibold text-sm transition-colors ${
                    activeSection === link.href ? 'text-brand' : 'text-ink-muted hover:text-ink'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                  <motion.div
                    layoutId="underline"
                    className={`absolute bottom-[-6px] left-0 h-0.5 rounded-full bg-brand ${
                      activeSection === link.href ? 'w-full' : 'w-0'
                    }`}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hidden sm:flex gap-2"
                aria-label={`Theme: ${theme}. Click to cycle.`}
              >
                <ThemeIcon className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm capitalize hidden md:inline">{theme === 'system' ? 'auto' : theme}</span>
              </Button>

              <Button asChild size="sm" variant="primary" className="hidden lg:inline-flex">
                <a href="#contact">Get in Touch</a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="lg:hidden overflow-hidden bg-surface border-t border-line"
          >
            <div className="container-custom py-6 space-y-4">
              <nav className="flex flex-col gap-2" aria-label="Mobile menu">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`font-semibold text-base transition-colors ${
                      activeSection === link.href ? 'text-brand' : 'text-ink hover:text-brand'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="pt-4 border-t border-line flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={toggleTheme} className="gap-2">
                  <ThemeIcon className="w-4 h-4" aria-hidden="true" />
                  <span className="capitalize">{theme === 'system' ? 'auto' : theme}</span>
                </Button>
                <Button asChild variant="primary" size="sm">
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <div className="h-16 lg:h-20" aria-hidden="true" />
    </>
  );
}