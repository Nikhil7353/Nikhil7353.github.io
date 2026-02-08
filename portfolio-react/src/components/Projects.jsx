import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import LazyImage from './LazyImage';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const categories = ['All', ...new Set(projects.map(item => item.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-5"
                >
                    <h2 className="fw-bold text-gradient">Featured Projects</h2>
                    <p className="text-secondary">Explore my recent work</p>
                </motion.div>

                <div className="d-flex justify-content-center mb-5 flex-wrap gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`btn ${filter === cat ? 'btn-custom' : 'btn-outline-custom'} px-4 py-2 rounded-pill`}
                            style={{ minWidth: '100px' }}
                            aria-label={`Filter projects by ${cat}`}
                            aria-pressed={filter === cat}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="row g-4 justify-content-center">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <Col key={project.id} md={4} sm={6} xs={12}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-100"
                                >
                                    <div className="h-100 glass-card border-0 overflow-hidden text-white d-flex flex-column position-relative project-card" style={{ borderRadius: '12px', minHeight: '380px' }}>
                                        <div
                                            className="overflow-hidden position-relative flex-shrink-0"
                                            style={{ cursor: 'pointer', height: '180px' }}
                                            onClick={() => setSelectedImage(project.image)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    setSelectedImage(project.image);
                                                }
                                            }}
                                            aria-label={`View ${project.title} project image`}
                                        >
                                            <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(to bottom, transparent, rgba(15,23,42,0.9))', zIndex: 1, pointerEvents: 'none' }}></div>
                                            {/* Status Badge */}
                                            {project.status === 'In Development' && (
                                                <div className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded-pill bg-warning text-dark fw-bold small shadow" style={{ zIndex: 2, fontSize: '0.7rem' }}>
                                                    🚧 In Development
                                                </div>
                                            )}
                                            <div className="position-absolute top-50 start-50 translate-middle opacity-0 hover-icon" style={{ zIndex: 3, transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
                                                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-circle p-3 d-flex align-items-center justify-content-center shadow-lg" style={{ width: '50px', height: '50px', opacity: 0.95, transform: 'scale(0.8)' }}>
                                                    <FaGithub className="fs-4 text-white" />
                                                </div>
                                            </div>
                                            <LazyImage
                                                src={project.image}
                                                alt={project.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                                                className="project-img"
                                            />
                                        </div>
                                        <div className="p-4 d-flex flex-column flex-grow-1">
                                            <h5 className="fw-bold mb-2 text-white" style={{ fontSize: '1.2rem', lineHeight: '1.3' }}>{project.title}</h5>
                                            <p className="small mb-3 flex-grow-1" style={{ color: '#e2e8f0', fontSize: '0.85rem', lineHeight: '1.5' }}>{project.description}</p>
                                            <div className="mt-auto">
                                                <div className="mb-3 d-flex flex-wrap gap-1">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="badge fw-medium py-1 px-2" style={{ 
                                                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.25))', 
                                                            color: '#e0e7ff', 
                                                            border: '1px solid rgba(99, 102, 241, 0.4)',
                                                            fontSize: '0.7rem',
                                                            borderRadius: '6px',
                                                            backdropFilter: 'blur(10px)'
                                                        }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                <Button
                                                    href={project.github}
                                                    target="_blank"
                                                    className={`btn-outline-custom w-100 py-2 ${project.github === '#' ? 'disabled' : ''}`}
                                                    style={{ 
                                                        opacity: project.github === '#' ? 0.6 : 1, 
                                                        cursor: project.github === '#' ? 'not-allowed' : 'pointer',
                                                        borderRadius: '8px',
                                                        fontWeight: '600',
                                                        fontSize: '0.85rem',
                                                        letterSpacing: '0.3px',
                                                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                                    }}
                                                    onClick={(e) => project.github === '#' && e.preventDefault()}
                                                    aria-label={`View source code for ${project.title}`}
                                                >
                                                    <FaGithub className="me-2" />
                                                    {project.github === '#' ? 'Coming Soon' : 'View Source Code'}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>

            {/* Image Preview Modal */}
            <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered size="xl" contentClassName="bg-transparent border-0">
                <Modal.Body className="p-0 position-relative text-center d-flex align-items-center justify-content-center">
                    <Button
                        variant="secondary"
                        onClick={() => setSelectedImage(null)}
                        className="position-absolute top-0 end-0 m-3 rounded-circle"
                        style={{ zIndex: 10, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', border: 'none' }}
                    >
                        ✕
                    </Button>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Project Preview"
                            className="img-fluid rounded shadow-lg"
                            style={{ maxHeight: '90vh', maxWidth: '100%', border: '1px solid rgba(255,255,255,0.1)' }}
                        />
                    )}
                </Modal.Body>
            </Modal>

            <style>{`
                .project-card {
                    transition: all 0.4s ease;
                }
                .project-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.3);
                    border-color: rgba(99, 102, 241, 0.5) !important;
                }
                .project-card:hover .project-img {
                    transform: scale(1.1);
                }
                .project-card:hover .hover-icon {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;
