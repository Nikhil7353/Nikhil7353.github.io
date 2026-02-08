import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            variant="dark"
            fixed="top"
            className={scrolled ? 'navbar scrolled' : 'navbar'}
        >
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-4" style={{ fontFamily: 'Outfit, sans-serif' }} aria-label="Nikhil Chavhan - Home">
                    <span className="text-gradient">Nikhil.dev</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <Nav.Link href="#home" aria-label="Navigate to Home section">Home</Nav.Link>
                        <Nav.Link href="#about" aria-label="Navigate to About section">About</Nav.Link>
                        <Nav.Link href="#skills" aria-label="Navigate to Skills section">Skills</Nav.Link>
                        <Nav.Link href="#projects" aria-label="Navigate to Projects section">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="btn-custom text-white px-4 py-2 mt-2 mt-lg-0" aria-label="Navigate to Contact section">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
