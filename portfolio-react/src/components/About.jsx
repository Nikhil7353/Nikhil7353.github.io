import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const capabilities = [
    {
        title: 'Frontend systems',
        copy: 'Responsive React interfaces with clear hierarchy, reusable components, and polished interaction states.'
    },
    {
        title: 'Backend architecture',
        copy: 'REST APIs, authentication flows, database schemas, and server-side features using Java and Python stacks.'
    }
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <Container>
                <Row className="align-items-start g-5">
                    {/* Left Column: Interactive Code Terminal */}
                    <Col lg={6}>
                        <MotionDiv
                            initial={{ opacity: 0, y: 24, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="terminal-mockup"
                        >
                            <div className="terminal-header">
                                <div className="dots">
                                    <span className="dot dot-red"></span>
                                    <span className="dot dot-yellow"></span>
                                    <span className="dot dot-green"></span>
                                </div>
                                <span className="tab">nikhil.jsx</span>
                                <div style={{ width: '46px' }}></div>
                            </div>
                            <pre className="code-body">
                                <code>
                                    <span className="comment">// 1. The Full Stack Developer Blueprint</span>{"\n"}
                                    <span className="keyword">const</span> <span className="property">developer</span> = <span className="bracket">{"{"}</span>{"\n"}
                                    {"  "}name: <span className="string">'Nikhil Chavhan'</span>,{"\n"}
                                    {"  "}role: <span className="string">'Full Stack Developer'</span>,{"\n"}
                                    {"  "}philosophy: <span className="string">'Shippable product thinking'</span>,{"\n"}
                                    {"  "}{"\n"}
                                    {"  "}stack: <span className="bracket">{"{"}</span>{"\n"}
                                    {"    "}frontend: <span className="bracket">[</span><span className="string">'React'</span>, <span className="string">'Redux'</span>, <span className="string">'Tailwind'</span><span className="bracket">]</span>,{"\n"}
                                    {"    "}backend: <span className="bracket">[</span><span className="string">'Java / Spring'</span>, <span className="string">'Python / Django'</span><span class="bracket">]</span>,{"\n"}
                                    {"    "}persistence: <span className="bracket">[</span><span className="string">'PostgreSQL'</span>, <span className="string">'MySQL'</span>, <span className="string">'Hibernate'</span><span class="bracket">]</span>{"\n"}
                                    {"  "}<span className="bracket">{"}"}</span>,{"\n"}
                                    {"\n"}
                                    {"  "}buildSystem: <span className="keyword">function</span>() <span className="bracket">{"{"}</span>{"\n"}
                                    {"    "}<span className="keyword">return</span> <span className="string">'Resilient APIs + Thoughtful UIs'</span>;{"\n"}
                                    {"  "}<span className="bracket">{"}"}</span>{"\n"}
                                    <span className="bracket">{"}"}</span>;
                                </code>
                            </pre>
                        </MotionDiv>

                        {/* Stats Strip */}
                        <MotionDiv
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="about-stats-strip"
                        >
                            <div className="about-stat">
                                <strong>4+</strong>
                                <span>Projects</span>
                            </div>
                            <div className="about-stat">
                                <strong>10+</strong>
                                <span>Tools</span>
                            </div>
                            <div className="about-stat">
                                <strong>1</strong>
                                <span>Case Study</span>
                            </div>
                        </MotionDiv>
                    </Col>

                    {/* Right Column: Narrative Copy & Stacked Capabilities */}
                    <Col lg={6}>
                        <MotionDiv
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                        >
                            <p className="eyebrow mb-3">About</p>
                            <h2 className="section-title mb-4" style={{ lineHeight: 1.15 }}>
                                I turn technical ideas into clear, shippable web experiences.
                            </h2>
                            <p className="text-muted mb-4" style={{ lineHeight: 1.68 }}>
                                I focus on full-stack projects where the interface, API, and data model need to work together.
                                My portfolio includes collaboration tools, AI-assisted classification, and management dashboards.
                            </p>

                            <div className="capabilities-stack d-flex flex-column gap-3">
                                {capabilities.map((item, index) => (
                                    <div className="capability-card d-flex gap-4 align-items-start p-4" key={item.title}>
                                        <span className="fs-5 fw-bold" style={{ color: 'var(--brand)', minWidth: '24px' }}>
                                            0{index + 1}
                                        </span>
                                        <div>
                                            <h3 className="h6 fw-bold mb-1">{item.title}</h3>
                                            <p className="small text-muted mb-0" style={{ lineHeight: 1.55 }}>
                                                {item.copy}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </MotionDiv>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;

