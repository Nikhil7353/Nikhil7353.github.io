import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Star, Code2, Database, Server, Cpu, Zap, Layers, Shield } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'UnifiedTeamOS',
    description: 'A unified collaboration platform combining chat, tasks, documents, video/voice calls, and email. Features real-time WebSocket updates, a unified inbox, and robust task management.',
    longDescription: 'UnifiedTeamOS is a comprehensive team collaboration platform that brings together all essential workplace communication tools in one seamless interface. Built with a microservices architecture, it handles real-time messaging, document collaboration, video conferencing, and email integration. The platform supports 500+ concurrent users with sub-100ms latency for real-time features.',
    image: '/images/unified-teamos.png',
    tags: ['React', 'Redux', 'Python', 'FastAPI', 'PostgreSQL', 'Tailwind', 'WebSockets', 'Docker'],
    category: 'Full Stack',
    github: 'https://github.com/Nikhil7353/UnifiedTeamOS',
    demo: '#',
    status: 'In Development',
    featured: true,
    metrics: { users: '500+', uptime: '99.9%', latency: '<100ms' },
  },
  {
    id: 2,
    title: 'Spice Detection AI',
    description: 'A Python/Django web app using Machine Learning (SVM, Random Forest) and OpenCV to identify Indian spices like Clove, Cardamom, and Cinnamon from images, providing nutritional info.',
    longDescription: 'An AI-powered spice recognition system that uses computer vision and machine learning to identify over 20 Indian spices from images. The system achieves 94% accuracy using an ensemble of SVM and Random Forest classifiers with feature extraction via OpenCV. Includes nutritional information and recipe suggestions for each detected spice.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Python', 'Django', 'OpenCV', 'Scikit-Learn', 'Machine Learning'],
    category: 'AI/ML',
    github: 'https://github.com/Nikhil7353/Spice_Classification',
    demo: '#',
    status: 'Completed',
    featured: true,
    metrics: { accuracy: '94%', spices: '20+', model: 'Ensemble' },
  },
  {
    id: 3,
    title: 'Student Management System',
    description: 'A Java Full Stack web app using Spring Boot, PostgreSQL, and HTML/CSS to manage student data efficiently.',
    longDescription: 'A comprehensive student management system built with Java Spring Boot and PostgreSQL. Features include student enrollment, course management, grade tracking, attendance monitoring, and role-based access control for administrators, teachers, and students. Built with clean architecture principles and comprehensive test coverage.',
    image: '/images/project2.jpg',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'HTML/CSS', 'JPA'],
    category: 'Full Stack',
    github: 'https://github.com/Nikhil7353/student-management-system',
    demo: '#',
    status: 'Completed',
    featured: false,
    metrics: { users: '1000+', modules: '8', coverage: '85%' },
  },
  {
    id: 4,
    title: 'Bus Ticket Reservation System',
    description: 'A full-stack Bus Ticket Reservation Management System built with Spring Boot, React, and MySQL. Features secure login, role-based access, seat booking, and a comprehensive admin dashboard.',
    longDescription: 'A complete bus ticket reservation platform with real-time seat availability, secure payment integration, role-based access control, and comprehensive admin dashboard. Built with Spring Boot backend and React frontend, featuring JWT authentication, WebSocket notifications for booking confirmations, and PDF ticket generation.',
    image: '/images/bus-ticket-system.png',
    tags: ['Java', 'Spring Boot', 'Hibernate', 'React', 'MySQL', 'JWT', 'REST API', 'Admin Dashboard'],
    category: 'Full Stack',
    github: 'https://github.com/Nikhil7353/Bus-Ticket-Reservation-System',
    demo: '#',
    status: 'Completed',
    featured: true,
    metrics: { bookings: '10K+', routes: '150+', uptime: '99.5%' },
  },
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Backend', 'Frontend'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollY = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="section relative" id="projects">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-header max-w-3xl mx-auto text-center mb-12"
        >
          <div className="eyebrow inline-flex mb-4">Featured Work</div>
          <h2 className="section-title">Projects I've <span className="gradient-text">built</span></h2>
          <p className="section-subtitle mt-4">
            A selection of projects showcasing my experience across full-stack development, AI/ML, and system architecture.
            Each project represents a unique challenge solved with clean code and modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="filter-group flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="whitespace-nowrap"
                aria-pressed={activeCategory === cat}
              >
                {cat}
                <span className="text-sm font-normal text-ink-muted">
                  ({cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length})
                </span>
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
          role="list"
          aria-label={`${activeCategory} projects`}
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.08, 
                duration: 0.5, 
                ease: [0.175, 0.885, 0.32, 1.275] 
              }}
              className="group"
              role="listitem"
            >
              <Card className="overflow-hidden h-full group-hover:border-brand/30 group-hover:shadow-xl group-hover:shadow-brand/10 transition-all duration-500 cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">{project.category}</Badge>
                      {project.featured && <Badge variant="brand" className="text-xs">Featured</Badge>}
                      <Badge 
                        variant={project.status === 'In Development' ? 'brand' : 'success'} 
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProjectClick(project)}
                      className="w-full bg-surface/90 backdrop-blur border border-line rounded-xl px-6 py-4 flex items-center justify-center gap-3 text-ink font-semibold transition-all duration-300 hover:bg-surface hover:border-brand/30"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-ink-muted text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 5).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                    {project.tags.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 5} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-line">
                    <Button asChild variant="ghost" size="sm" className="gap-1.5">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" aria-hidden="true" />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    </Button>
                    {project.demo !== '#' && (
                      <Button asChild variant="ghost" size="sm" className="gap-1.5">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          <span className="hidden sm:inline">Demo</span>
                        </a>
                      </Button>
                    )}
                    <div className="flex-1" />
                    <Badge variant="outline" className="text-xs">
                      {project.metrics && Object.values(project.metrics)[0] ? Object.entries(project.metrics)[0][1] : ''}
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-ink-muted">No projects found in this category.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface/60 backdrop-blur-xl border border-line">
            <Code2 className="w-5 h-5 text-brand" aria-hidden="true" />
            <span className="text-sm font-semibold text-ink">
              Want to see more? <a href="https://github.com/Nikhil7353" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-bold ml-2">View all on GitHub</a>
            </span>
          </div>
        </motion.div>
      </div>

      {isModalOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative bg-surface border border-line rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="p-2 rounded-full bg-surface/80 backdrop-blur border border-line hover:bg-surface hover:border-brand/30 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-ink" aria-hidden="true" />
              </motion.button>
            </div>

            <div className="relative aspect-video overflow-hidden flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-surface">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{selectedProject.category}</Badge>
                  {selectedProject.featured && <Badge variant="brand">Featured</Badge>}
                  <Badge variant={selectedProject.status === 'In Development' ? 'brand' : 'success'}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <h2 id="modal-title" className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              <p className="text-ink-muted mb-6 leading-relaxed">{selectedProject.longDescription}</p>

              {selectedProject.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-xl bg-surface border border-line text-center">
                      <div className="text-2xl md:text-3xl font-extrabold text-brand">{value}</div>
                      <div className="text-xs text-ink-muted uppercase tracking-wider">{key}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-6">
                <h4 className="font-bold text-ink mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-line">
                <Button asChild variant="primary" size="lg" className="gap-2">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" aria-hidden="true" />
                    View Source Code
                  </a>
                </Button>
                {selectedProject.demo !== '#' && (
                  <Button asChild variant="secondary" size="lg" className="gap-2">
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}