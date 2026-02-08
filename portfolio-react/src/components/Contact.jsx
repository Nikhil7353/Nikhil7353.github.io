import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setStatus('sending');

        try {
            const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/xnnoenal";
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-gradient">Get In Touch</h2>
                        <p className="text-secondary">Have a project in mind? Let's work together.</p>
                    </div>

                    <Row className="justify-content-center">
                        <Col md={8} lg={6}>
                            <div className="p-5 glass-card">
                                <Form onSubmit={handleSubmit}>
                                    {status === 'success' && <Alert variant="success" className="bg-success text-white border-0">✅ Message sent successfully!</Alert>}
                                    {status === 'error' && <Alert variant="danger" className="bg-danger text-white border-0">❌ Something went wrong. Please try again.</Alert>}

                                    <Form.Group className="mb-4">
                                        <Form.Label className="text-white small fw-bold text-uppercase ls-1" style={{ letterSpacing: '1px' }}>Your Name</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="John Doe" required className="bg-transparent text-white border-secondary shadow-none" style={{ borderColor: 'rgba(255,255,255,0.1)', padding: '12px' }} />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="text-white small fw-bold text-uppercase ls-1" style={{ letterSpacing: '1px' }}>Your Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="john@example.com" required className="bg-transparent text-white border-secondary shadow-none" style={{ borderColor: 'rgba(255,255,255,0.1)', padding: '12px' }} />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="text-white small fw-bold text-uppercase ls-1" style={{ letterSpacing: '1px' }}>Your Message</Form.Label>
                                        <Form.Control as="textarea" rows={5} name="message" placeholder="Hello..." required className="bg-transparent text-white border-secondary shadow-none" style={{ borderColor: 'rgba(255,255,255,0.1)', padding: '12px' }} />
                                    </Form.Group>

                                    <Button type="submit" className="btn-custom w-100 py-3 mt-2" disabled={status === 'sending'}>
                                        {status === 'sending' ? <Spinner animation="border" size="sm" /> : 'Send Message'}
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
            <style>{`
                .form-control:focus {
                    background-color: rgba(255,255,255,0.05);
                    border-color: var(--primary-color) !important;
                    box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.25);
                    color: white;
                }
                .form-control::placeholder {
                    color: rgba(255,255,255,0.3);
                }
            `}</style>
        </section>
    );
};

export default Contact;
