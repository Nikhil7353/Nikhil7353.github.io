import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer py-5">
            <Container>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
                    <div>
                        <h2 className="h4 fw-bold mb-2">Nikhil Chavhan</h2>
                        <p className="mb-0" style={{ color: 'rgba(255, 250, 240, 0.62)' }}>
                            Full stack developer building practical, user-focused web products.
                        </p>
                    </div>
                    <div className="d-flex gap-3">
                        <a href="https://www.linkedin.com/in/nikhil-chavhan" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Nikhil7353" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="mailto:nikhilchavan063@gmail.com" className="social-icon" aria-label="Email">
                            <FaEnvelope />
                        </a>
                        <a href="https://twitter.com/nikhilchavhan" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <div className="pt-4 mt-4 border-top" style={{ borderColor: 'rgba(255, 250, 240, 0.12)' }}>
                    <p className="small mb-0" style={{ color: 'rgba(255, 250, 240, 0.5)' }}>
                        (c) 2026 Nikhil Chavhan. Built with React and Vite.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
