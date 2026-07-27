import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaSearchPlus } from 'react-icons/fa';
import { projects } from '../data/projects';
import LazyImage from './LazyImage';

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const categories = ['All', ...new Set(projects.map(item => item.category))];
    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
    const currentProject = projects.find(project => project.caseStudy);

    return (
        <>
            <section id="projects" className="work-section">
                <Container>
                    <div className="section-heading mb-5">
                        <p className="eyebrow mb-3">Selected Work</p>
                        <h2 className="section-title mb-3">Projects with product thinking behind them.</h2>
                        <p className="section-copy mb-0" style={{ maxWidth: '560px' }}>
                            Each card highlights the build, the stack, and the type of problem the project solves.
                        </p>
                    </div>

                    <div className="d-flex justify-content-center justify-content-lg-start filter-wrap">
                        <div className="filter-group" role="group" aria-label="Filter projects">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={filter === cat ? 'filter-button active' : 'filter-button'}
                                    aria-pressed={filter === cat}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <MotionDiv layout>
                        <Row className="g-4">
                            <AnimatePresence>
                                {filteredProjects.map((project) => (
                                    <Col key={project.id} lg={6}>
                                        <MotionArticle
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.28 }}
                                            className="project-card overflow-hidden"
                                        >
                                            <div
                                                className="project-media"
                                                onClick={() => setSelectedImage(project.image)}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.preventDefault();
                                                        setSelectedImage(project.image);
                                                    }
                                                }}
                                            >
                                                {project.status === 'In Development' && (
                                                    <span className="status-badge">In development</span>
                                                )}
                                                <LazyImage src={project.image} alt={project.title} />
                                            </div>
                                            <div className="project-content">
                                                <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                                                    <span className="eyebrow">{project.category}</span>
                                                    <FaSearchPlus className="text-muted" />
                                                </div>
                                                <h3 className="h2 fw-bold mb-3">{project.title}</h3>
                                                <p className="text-muted mb-4">{project.description}</p>
                                                <div className="tag-row mb-4">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="tag">{tag}</span>
                                                    ))}
                                                </div>
                                                <Button
                                                    href={project.github}
                                                    target="_blank"
                                                    className={project.github === '#' ? 'btn-outline-custom disabled' : 'btn-outline-custom'}
                                                    onClick={(e) => project.github === '#' && e.preventDefault()}
                                                >
                                                    <FaGithub className="me-2" />
                                                    {project.github === '#' ? 'Source coming soon' : 'View Source'}
                                                </Button>
                                            </div>
                                        </MotionArticle>
                                    </Col>
                                ))}
                            </AnimatePresence>
                        </Row>
                    </MotionDiv>
                </Container>
            </section>

            {currentProject && (
                <section id="case-study" className="case-section">
                    <Container>
                        <div className="case-study">
                            <Row className="g-0 align-items-stretch">
                                <Col lg={5}>
                                    <img src={currentProject.image} alt={`${currentProject.title} preview`} />
                                </Col>
                                <Col lg={7}>
                                    <div className="case-content">
                                        <p className="eyebrow mb-3" style={{ color: 'var(--amber)' }}>Case study in progress</p>
                                        <h2 className="section-title text-white mb-4">{currentProject.title}</h2>
                                        <p className="mb-4" style={{ color: 'rgba(255, 250, 240, 0.72)', lineHeight: 1.8 }}>
                                            This is the current project that can become a detailed case study later with problem framing,
                                            wireframes, architecture notes, UI screens, and final outcomes.
                                        </p>
                                        <Row className="g-3 mb-4">
                                            <Col md={4}>
                                                <span className="pill">Problem</span>
                                                <p className="small mt-3 mb-0" style={{ color: 'rgba(255, 250, 240, 0.72)' }}>{currentProject.problem}</p>
                                            </Col>
                                            <Col md={4}>
                                                <span className="pill">Approach</span>
                                                <p className="small mt-3 mb-0" style={{ color: 'rgba(255, 250, 240, 0.72)' }}>{currentProject.approach}</p>
                                            </Col>
                                            <Col md={4}>
                                                <span className="pill">Next</span>
                                                <p className="small mt-3 mb-0" style={{ color: 'rgba(255, 250, 240, 0.72)' }}>{currentProject.outcome}</p>
                                            </Col>
                                        </Row>
                                        <Button href="#contact" className="btn-custom" style={{ background: 'var(--surface)' }}>
                                            Discuss this build <FaArrowRight className="ms-2" />
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            )}

            <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered size="xl" contentClassName="bg-transparent border-0">
                <Modal.Body className="p-0 position-relative text-center">
                    <Button onClick={() => setSelectedImage(null)} className="modal-close position-absolute top-0 end-0 m-3">
                        x
                    </Button>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Project preview"
                            className="img-fluid shadow-lg"
                            style={{ maxHeight: '90vh', borderRadius: 8 }}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Projects;
