import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer py-5 text-center" style={{ background: 'rgba(15, 23, 42, 0.95)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Container>
                <h4 className="text-white mb-4 fw-bold">Let's Connect</h4>
                <div className="d-flex justify-content-center gap-4 mb-4">
                    <a href="https://www.linkedin.com/in/nikhil-chavhan" target="_blank" rel="noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Nikhil7353" target="_blank" rel="noreferrer" className="social-icon">
                        <FaGithub />
                    </a>
                    <a href="mailto:nikhilchavan063@gmail.com" className="social-icon">
                        <FaEnvelope />
                    </a>
                    <a href="https://twitter.com/nikhilchavhan" target="_blank" rel="noreferrer" className="social-icon">
                        <FaTwitter />
                    </a>
                </div>
                <p className="mb-0 small text-white-50">&copy; 2025 Nikhil Chavhan | Built with React & Vite</p>
            </Container>
            <style jsx>{`
                .social-icon {
                    color: rgba(255,255,255,0.7);
                    font-size: 1.8rem;
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    color: #38bdf8;
                    transform: translateY(-5px);
                }
            `}</style>
        </footer>
    );
};

export default Footer;
