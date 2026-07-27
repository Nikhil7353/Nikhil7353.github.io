'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Sparkles, Terminal, Code, Database, Cpu } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

const statItems = [
  { value: '4+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '8+', label: 'Technologies' },
  { value: '100%', label: 'Client Satisfaction' },
];

const techPills = [
  { icon: Code, label: 'React / Next.js', color: 'brand' },
  { icon: Terminal, label: 'Java / Spring Boot', color: 'coral' },
  { icon: Cpu, label: 'Python / Django', color: 'amber' },
  { icon: Database, label: 'PostgreSQL / Redis', color: 'emerald' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <HeroCanvas />
      
      <div className="relative z-10 container-custom px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-xl border border-line mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-coral"
                animate={{ scale: [1, 1.3, 1], boxShadow: ['0 0 0 0px rgba(231,111,81,0.4)', '0 0 0 8px rgba(231,111,81,0)', '0 0 0 0px rgba(231,111,81,0.4)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Available for freelance & full-time</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] text-ink tracking-tight"
            >
              Building <span className="gradient-text">usable products</span>{' '}
              <br />
              <span className="text-brand font-extrabold">with clean code</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="mt-6 text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed"
            >
              Full-stack developer crafting scalable web applications with React, Spring Boot, Django, and modern cloud infrastructure. 
              Passionate about clean architecture, developer experience, and solving real problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <a href="#projects">
                  View Work
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="secondary" asChild size="lg">
                <a href="/Nikhil_Chavhan.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" aria-hidden="true" />
                  Resume
                </a>
              </Button>
              <Button variant="ghost" asChild size="lg">
                <a href="https://github.com/Nikhil7353" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {techPills.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/60 backdrop-blur-xl border border-line hover:border-brand/30 transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full bg-${tech.color}/10 text-${tech.color}`}
                  >
                    <tech.icon className="w-4 h-4" aria-hidden="true" />
                  </motion.div>
                  <span className="text-sm font-semibold text-ink">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 border-2 border-brand/20 rounded-2xl blur-lg opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 border-1 border-coral/10 rounded-2xl blur-xl opacity-30"
              />
              
              <div className="relative bg-surface/80 backdrop-blur-xl border border-line rounded-2xl p-1 shadow-2xl">
                <div className="bg-surface-strong rounded-xl border border-line p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-coral" />
                      <div className="w-3 h-3 rounded-full bg-amber" />
                      <div className="w-3 h-3 rounded-full bg-emerald" />
                    </div>
                    <span className="text-xs font-mono text-ink-muted px-3 py-1 bg-surface rounded-full border border-line">portfolio.jsx</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {statItems.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
                        className="p-4 rounded-xl bg-surface border border-line text-center hover:border-brand/30 transition-colors"
                      >
                        <motion.div
                          className="text-3xl md:text-4xl font-extrabold text-ink leading-none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="mt-6 pt-6 border-t border-line"
                  >
                    <div className="flex items-center gap-3 text-sm text-ink-muted mb-4">
                      <Sparkles className="w-4 h-4 text-coral" aria-hidden="true" />
                      <span className="font-semibold text-ink">Currently exploring: Rust, WebGPU, AI Agents</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {['Rust', 'WebGPU', 'AI Agents', 'Kubernetes', 'TypeScript'].map((tag) => (
                        <Badge key={tag} variant="brand" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-ink-muted"
          >
            <span className="text-xs font-semibold uppercase tracking-wider">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}