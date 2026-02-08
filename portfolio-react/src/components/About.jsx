import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card p-5">
                        <Row className="align-items-center">
                            <Col md={5} className="text-center mb-4 mb-md-0">
                                <div className="position-relative d-inline-block">
                                    <div className="position-absolute w-100 h-100 rounded-circle" style={{ background: 'var(--primary-color)', filter: 'blur(20px)', opacity: 0.5, zIndex: 0 }}></div>
                                    <img
                                        src="/images/profile.jpg"
                                        alt="About Nikhil"
                                        className="img-fluid rounded-circle shadow-lg position-relative"
                                        style={{ maxWidth: '280px', border: '5px solid rgba(255,255,255,0.1)', zIndex: 1 }}
                                    />
                                </div>
                            </Col>
                            <Col md={7}>
                                <h2 className="fw-bold mb-3 text-gradient">About Me</h2>
                                <h4 className="fw-light mb-4 text-light">Passionate <span className="text-accent">Full Stack Developer</span></h4>
                                <p className="lead text-secondary-custom" style={{ color: '#94a3b8' }}>
                                    I specialize in building robust, scalable web applications using <strong className="text-white">Java, Spring Boot</strong>, <strong className="text-white">Python, Django</strong>, and modern frontend technologies like <strong className="text-white">React</strong>.
                                </p>
                                <p style={{ color: '#94a3b8' }}>
                                    With expertise in <strong className="text-white">Machine Learning</strong> (OpenCV, Scikit-Learn) and <strong className="text-white">database architecture</strong> (PostgreSQL, MySQL), I build comprehensive solutions from AI-powered applications to enterprise systems. I'm passionate about creating innovative projects that bridge cutting-edge technology with practical user needs.
                                </p>
                                <div className="mt-4">
                                    <Button href="#projects" className="btn-custom me-3">My Work</Button>
                                    <Button href="#contact" className="btn-outline-custom">Let's Talk</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default About;
