import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaDownload, FaCode } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="d-flex align-items-center text-center position-relative overflow-hidden min-vh-100">
            {/* Enhanced Floating Background Elements */}
            <motion.div
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="position-absolute rounded-circle"
                style={{ width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)', top: '-15%', left: '-15%', zIndex: 0 }}
            />
            <motion.div
                animate={{ y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="position-absolute rounded-circle"
                style={{ width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)', bottom: '-25%', right: '-15%', zIndex: 0 }}
            />
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="position-absolute"
                style={{ width: '200px', height: '200px', top: '20%', right: '10%', zIndex: 0 }}
            >
                <div className="w-100 h-100 rounded-circle" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)' }}></div>
            </motion.div>

            <Container className="position-relative" style={{ zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                >
                    <motion.div 
                        className="p-2 rounded-circle bg-gradient-primary d-inline-block mb-4 position-relative"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/images/profile.jpg"
                            alt="Nikhil Chavhan"
                            className="rounded-circle"
                            width="200"
                            height="200"
                            style={{ border: '5px solid rgba(255,255,255,0.2)', objectFit: 'cover' }}
                        />
                        <div className="position-absolute w-100 h-100 rounded-circle" style={{ 
                            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                            animation: 'shimmer 3s ease-in-out infinite'
                        }}></div>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                    className="display-3 fw-bold mb-4"
                >
                    Hi, I'm <span className="text-gradient">Nikhil Chavhan</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h3 mb-4 text-light"
                    style={{ minHeight: '50px', fontWeight: 300, letterSpacing: '1px' }}
                >
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'Java & Spring Boot Expert',
                            2000,
                            'React & Python Specialist',
                            2000,
                            'Machine Learning Enthusiast',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-gradient"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="lead mb-5"
                    style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}
                >
                    Passionate about building <strong className="text-white">scalable web applications</strong> and <strong className="text-white">AI-powered solutions</strong>. 
                    Specializing in <strong className="text-accent">Java Spring Boot</strong>, <strong className="text-accent">Python Django</strong>, and <strong className="text-accent">React</strong> to create innovative digital experiences.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="d-flex flex-wrap justify-content-center gap-3"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button href="#projects" className="btn-custom px-4 py-3">
                            <FaCode className="me-2" />
                            View Projects
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button href="/Nikhil_Chavhan.pdf" target="_blank" className="btn-outline-custom px-4 py-3">
                            <FaDownload className="me-2" />
                            Download CV
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button href="https://github.com/Nikhil7353/" target="_blank" className="btn-outline-custom px-4 py-3">
                            <FaGithub className="me-2" />
                            GitHub
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
