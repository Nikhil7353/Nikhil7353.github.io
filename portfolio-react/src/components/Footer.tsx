import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Sun, Moon, Monitor } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '@/context/ThemeContext';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Nikhil7353', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nikhil-chavhan', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com/nikhilchavhan', icon: Twitter },
  { label: 'Email', href: 'mailto:nikhilchavan063@gmail.com', icon: Mail },
];

const footerLinks = {
  Product: [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Resume', href: '/Nikhil_Chavhan.pdf' },
    { label: 'GitHub', href: 'https://github.com/Nikhil7353' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nikhil-chavhan' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

export function Footer() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  return (
    <footer className="relative border-t border-line" id="footer">
      <div className="container-custom py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-4 gap-12 lg:gap-16 mb-16"
        >
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-ink flex items-center justify-center">
                <span className="text-surface font-extrabold text-lg">N</span>
              </div>
              <span className="font-extrabold text-xl text-ink">Nikhil Chavhan</span>
            </div>
            <p className="text-ink-muted max-w-md mb-8 leading-relaxed">
              Full-stack developer crafting scalable web applications with React, Spring Boot, Django, 
              and modern cloud infrastructure. Passionate about clean architecture and developer experience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-3 rounded-xl bg-surface border border-line hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-ink-muted group-hover:text-brand transition-colors" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-ink mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerLinks.Product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-ink-muted hover:text-brand transition-colors text-sm">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-ink mb-4">Resources</h4>
            <nav aria-label="Footer resources">
              <ul className="space-y-3">
                {footerLinks.Resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-brand transition-colors text-sm">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-line"
        >
          <p className="text-ink-muted text-sm">
            © {new Date().getFullYear()} Nikhil Chavhan. Built with React, TypeScript, Tailwind CSS & Framer Motion.
          </p>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="gap-2"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
            >
              {resolvedTheme === 'dark' ? <Moon className="w-4 h-4" /> : theme === 'light' ? <Sun className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
              <span className="hidden sm:inline text-sm capitalize">{theme === 'system' ? 'system' : theme}</span>
            </Button>

            <motion.a
              href="#home"
              initial={{ opacity: 0, rotate: -90 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-3 rounded-xl bg-surface border border-line hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-ink-muted" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}