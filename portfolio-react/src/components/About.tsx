import { motion } from 'framer-motion';
import { Code2, Server, Database, Brain, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const capabilities = [
  {
    icon: Code2,
    title: 'Frontend Architecture',
    description: 'Building performant, accessible UIs with React, Next.js, and TypeScript. Component-driven development with design systems.',
    technologies: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    accent: 'brand',
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    description: 'Designing scalable APIs and microservices with Java Spring Boot, Python Django/FastAPI, and Node.js.',
    technologies: ['Spring Boot', 'Django', 'FastAPI', 'Node.js', 'GraphQL'],
    accent: 'coral',
  },
  {
    icon: Database,
    title: 'Data & Infrastructure',
    description: 'Database design, optimization, and cloud infrastructure. PostgreSQL, Redis, Docker, and CI/CD pipelines.',
    technologies: ['PostgreSQL', 'Redis', 'Docker', 'AWS', 'GitHub Actions'],
    accent: 'emerald',
  },
  {
    icon: Brain,
    title: 'AI/ML Integration',
    description: 'Integrating ML models into production applications. Computer vision, NLP, and recommendation systems.',
    technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Hugging Face'],
    accent: 'amber',
  },
];

const experience = [
  { period: '2022 — Present', role: 'Senior Full Stack Developer', company: 'Freelance / Contract', description: 'Delivering end-to-end web applications for startups and enterprises.' },
  { period: '2020 — 2022', role: 'Full Stack Developer', company: 'Tech Solutions Inc.', description: 'Built and maintained multiple client projects using Java Spring Boot and React.' },
  { period: '2018 — 2020', role: 'Junior Developer', company: 'Digital Agency', description: 'Developed web applications and learned modern development practices.' },
];

export function About() {
  return (
    <section className="section relative" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header max-w-3xl mx-auto text-center mb-16"
        >
          <div className="eyebrow inline-flex mb-4">About Me</div>
          <h2 className="section-title">Full-stack developer with a <span className="gradient-text">product mindset</span></h2>
          <p className="section-subtitle mt-4">
            I bridge the gap between design and engineering, building applications that are not just functional but delightful to use.
            With 4+ years of experience across the stack, I focus on clean architecture, developer experience, and solving real user problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-ink">What I do</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((cap, i) => (
                  <Card
                    key={cap.title}
                    className="group p-6 hover:border-brand/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className={`p-3 rounded-xl bg-${cap.accent}/10 text-${cap.accent} mb-4 w-fit`}>
                      <cap.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h4 className="text-lg font-bold text-ink mb-2">{cap.title}</h4>
                    <p className="text-ink-muted text-sm mb-4">{cap.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-ink mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-surface border border-line hover:border-brand/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-24 text-right text-sm font-semibold text-brand">
                      {exp.period}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <h4 className="font-bold text-ink">{exp.role}</h4>
                        <span className="text-ink-muted">{exp.company}</span>
                      </div>
                      <p className="text-sm text-ink-muted">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative sticky top-24">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-surface border border-line relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-coral/10" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                
                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-coral" />
                      <div className="w-3 h-3 rounded-full bg-amber" />
                      <div className="w-3 h-3 rounded-full bg-emerald" />
                    </div>
                    <span className="text-xs font-mono text-ink-muted px-2 py-1 bg-surface/80 backdrop-blur rounded-full border border-line">
                      about.tsx
                    </span>
                  </div>
                  
                  <div className="space-y-4 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-brand to-coral flex items-center justify-center"
                    >
                      <Code2 className="w-16 h-16 text-surface" aria-hidden="true" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-ink">Nikhil Chavhan</h3>
                      <p className="text-ink-muted mt-1">Full Stack Developer</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 text-sm text-ink-muted">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald" />
                        <span>Open to opportunities</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber" />
                        <span>Freelance available</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-line">
                    <Button variant="secondary" asChild size="sm" className="flex-1">
                      <a href="#contact">Let's Talk</a>
                    </Button>
                    <Button variant="ghost" asChild size="sm" className="flex-1">
                      <a href="/Nikhil_Chavhan.pdf" target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="w-4 h-4" />
                        Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-brand/20 to-coral/20 blur-2xl"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Clean Code', desc: 'SOLID principles, design patterns, and maintainable architecture' },
              { label: 'Performance First', desc: 'Optimizing Core Web Vitals, bundle size, and runtime performance' },
              { label: 'Accessibility', desc: 'WCAG 2.1 AA compliance, semantic HTML, and inclusive design' },
            ].map((principle, i) => (
              <Card key={principle.label} className="p-6 text-center hover:border-brand/30 transition-colors">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Sparkles className="w-6 h-6" aria-hidden="true" />
                </div>
                <h4 className="font-bold text-ink mb-2">{principle.label}</h4>
                <p className="text-sm text-ink-muted">{principle.desc}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}