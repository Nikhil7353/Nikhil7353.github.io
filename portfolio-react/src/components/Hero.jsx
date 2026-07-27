import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaGithub } from 'react-icons/fa';

const MotionDiv = motion.div;

const Hero = () => {
    return (
        <section id="home" className="hero-section d-flex align-items-center">
            <Container>
                <Row className="align-items-center g-5">
                    <Col lg={7} xl={7}>
                        <MotionDiv
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="hero-kicker mb-4">
                                <span className="live-dot" />
                                <span className="eyebrow">Available for product-focused builds</span>
                            </div>
                            <h1 className="hero-title mb-4">
                                Full stack developer crafting <span>usable products.</span>
                            </h1>
                            <p className="hero-copy mb-4">
                                I build clean, scalable web applications with React, Java Spring Boot, Django, FastAPI,
                                and databases. My work sits where backend logic, thoughtful UI, and real user flows meet.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mb-3 hero-actions">
                                <Button href="#projects" className="btn-custom">
                                    View Work <FaArrowRight className="ms-2" />
                                </Button>
                                <Button href="/Nikhil_Chavhan.pdf" target="_blank" className="btn-outline-custom">
                                    <FaDownload className="me-2" /> Resume
                                </Button>
                                <Button href="https://github.com/Nikhil7353/" target="_blank" className="btn-outline-custom">
                                    <FaGithub className="me-2" /> GitHub
                                </Button>
                            </div>
                            <div className="tag-row">
                                <span className="pill">React</span>
                                <span className="pill">Java / Spring Boot</span>
                                <span className="pill">Python / Django</span>
                                <span className="pill">DevOps</span>
                            </div>
                        </MotionDiv>
                    </Col>
                    <Col lg={5} xl={5}>
                        <MotionDiv
                            initial={{ opacity: 0, y: 34, rotate: 1.5 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="hero-panel"
                        >
                            <div className="hero-panel-top">
                                <div className="window-dots">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <span className="small fw-bold">portfolio.jsx</span>
                            </div>
                            <div className="profile-card">
                                <img src="/images/profile.jpg" alt="Nikhil Chavhan" className="profile-shot" />
                                <div>
                                    <p className="eyebrow mb-2">Developer Profile</p>
                                    <h2 className="h3 fw-bold mb-2">Nikhil Chavhan</h2>
                                    <p className="text-muted mb-0">
                                        Designing practical interfaces, resilient APIs, and project systems that feel easy to use.
                                    </p>
                                </div>
                            </div>
                        </MotionDiv>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
