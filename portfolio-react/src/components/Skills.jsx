import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaBrain,
    FaCss3Alt,
    FaDatabase,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJsSquare,
    FaPython,
    FaReact,
    FaServer
} from 'react-icons/fa';
import {
    SiBootstrap,
    SiDjango,
    SiFastapi,
    SiHibernate,
    SiMysql,
    SiNodedotjs,
    SiOpencv,
    SiPostgresql,
    SiRender,
    SiScikitlearn,
    SiSpringboot,
    SiTailwindcss
} from 'react-icons/si';

const MotionDiv = motion.div;

const capabilities = [
    {
        id: 'frontend',
        number: '01',
        icon: <FaReact />,
        title: 'Frontend Engineering',
        copy: 'Responsive interfaces, dashboards, reusable components, and polished user flows.',
        accent: '#245f4f',
        tools: [
            { name: 'React', icon: <FaReact /> },
            { name: 'JavaScript', icon: <FaJsSquare /> },
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3Alt /> },
            { name: 'Tailwind', icon: <SiTailwindcss /> },
            { name: 'Bootstrap', icon: <SiBootstrap /> }
        ]
    },
    {
        id: 'backend',
        number: '02',
        icon: <FaServer />,
        title: 'Backend Systems',
        copy: 'REST APIs, authentication, role-based features, admin logic, and scalable app structure.',
        accent: '#e76f51',
        tools: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'Spring Boot', icon: <SiSpringboot /> },
            { name: 'Python', icon: <FaPython /> },
            { name: 'Django', icon: <SiDjango /> },
            { name: 'FastAPI', icon: <SiFastapi /> },
            { name: 'Node.js', icon: <SiNodedotjs /> }
        ]
    },
    {
        id: 'data',
        number: '03',
        icon: <FaDatabase />,
        title: 'Data & Persistence',
        copy: 'Relational schema design, database queries, ORM workflows, and production-ready data models.',
        accent: '#3d8bfd',
        tools: [
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'Hibernate', icon: <SiHibernate /> },
            { name: 'Database Design', icon: <FaDatabase /> }
        ]
    },
    {
        id: 'ml-deploy',
        number: '04',
        icon: <FaBrain />,
        title: 'AI/ML & Deployment',
        copy: 'Machine learning features, computer vision workflows, and deployed web applications.',
        accent: '#f1b84b',
        tools: [
            { name: 'OpenCV', icon: <SiOpencv /> },
            { name: 'Scikit-Learn', icon: <SiScikitlearn /> },
            { name: 'Machine Learning', icon: <FaBrain /> },
            { name: 'Render', icon: <SiRender /> },
            { name: 'GitHub Pages', icon: <FaGithub /> }
        ]
    }
];

const proofItems = [
    { value: 'Full Stack', label: 'Frontend + backend systems' },
    { value: 'Client Work', label: 'Stock advisory platform' },
    { value: 'Deployed', label: 'Render and GitHub Pages' },
    { value: 'AI/ML', label: 'OpenCV and classification' }
];

const Skills = () => {
    return (
        <section id="skills" className="stack-section">
            <Container>
                <div className="section-heading mb-5">
                    <p className="eyebrow mb-3">Stack &amp; Capabilities</p>
                    <h2 className="section-title mb-3">Skills shown as systems I can build.</h2>
                    <p className="section-copy mb-0" style={{ maxWidth: '560px' }}>
                        A modern view of the tools I use across frontend, backend, databases, AI/ML, and deployment.
                    </p>
                </div>

                <Row className="g-4">
                    {capabilities.map((capability, index) => (
                        <Col key={capability.id} lg={6}>
                            <MotionDiv
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.35 }}
                                className="capability-stack-card"
                                style={{ '--accent': capability.accent }}
                            >
                                <div className="capability-stack-top">
                                    <div className="capability-stack-icon">{capability.icon}</div>
                                    <span className="capability-number">{capability.number}</span>
                                </div>
                                <h3 className="h3 fw-bold mb-3">{capability.title}</h3>
                                <p className="skill-description mb-4">{capability.copy}</p>
                                <div className="tool-chip-row">
                                    {capability.tools.map((tool) => (
                                        <span className="tool-chip" key={tool.name}>
                                            <span className="tool-chip-icon">{tool.icon}</span>
                                            {tool.name}
                                        </span>
                                    ))}
                                </div>
                            </MotionDiv>
                        </Col>
                    ))}
                </Row>

                <Row className="g-3 stack-proof-row">
                    {proofItems.map((item) => (
                        <Col key={item.value} md={3} sm={6}>
                            <div className="stack-proof">
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
