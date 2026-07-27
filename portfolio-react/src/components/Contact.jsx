import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const MotionDiv = motion.div;

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setStatus('sending');

        try {
            const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xnnoenal';
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <Container>
                <Row className="align-items-center g-5">
                    <Col lg={5}>
                        <MotionDiv
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                        >
                            <p className="eyebrow mb-3">Contact</p>
                            <h2 className="section-title contact-title mb-4">Have a build, role, or collaboration in mind?</h2>
                            <p className="section-copy mx-0 mb-4">
                                Send a quick message and I will get back to you. I am especially interested in full-stack,
                                dashboard, productivity, and AI-assisted web projects.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="mailto:nikhilchavan063@gmail.com" className="social-icon" style={{ background: 'var(--ink)' }} aria-label="Email Nikhil">
                                    <FaEnvelope />
                                </a>
                                <a href="https://github.com/Nikhil7353" target="_blank" rel="noreferrer" className="social-icon" style={{ background: 'var(--ink)' }} aria-label="Nikhil on GitHub">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/nikhil-chavhan" target="_blank" rel="noreferrer" className="social-icon" style={{ background: 'var(--ink)' }} aria-label="Nikhil on LinkedIn">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </MotionDiv>
                    </Col>
                    <Col lg={7}>
                        <MotionDiv
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.08 }}
                            className="form-shell"
                        >
                            <Form onSubmit={handleSubmit}>
                                {status === 'success' && <Alert variant="success">Message sent successfully.</Alert>}
                                {status === 'error' && <Alert variant="danger">Something went wrong. Please try again.</Alert>}

                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold small">Name</Form.Label>
                                            <Form.Control type="text" name="name" placeholder="Your name" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold small">Email</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="you@example.com" required />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold small">Message</Form.Label>
                                            <Form.Control as="textarea" rows={5} name="message" placeholder="Tell me what you are building..." required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button type="submit" className="btn-custom mt-4 w-100" disabled={status === 'sending'}>
                                    {status === 'sending' ? <Spinner animation="border" size="sm" /> : 'Send Message'}
                                </Button>
                            </Form>
                        </MotionDiv>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
