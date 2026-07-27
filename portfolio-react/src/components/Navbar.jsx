import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar expand="lg" fixed="top" className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <Container>
                <Navbar.Brand href="#home" className="brand-mark" aria-label="Nikhil Chavhan home">
                    <span className="brand-glyph">N</span>
                    <span>Nikhil Chavhan</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="portfolio-navigation" className="border-0 shadow-none" />
                <Navbar.Collapse id="portfolio-navigation">
                    <Nav className="ms-auto align-items-lg-center gap-lg-3">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Stack</Nav.Link>
                        <Nav.Link href="#projects">Work</Nav.Link>
                        <Nav.Link href="#case-study">Case Study</Nav.Link>
                        <Nav.Link href="#contact" className="nav-cta mt-2 mt-lg-0">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
