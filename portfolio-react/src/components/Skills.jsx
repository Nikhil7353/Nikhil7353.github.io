import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaJava, FaCode, FaDatabase, FaHtml5, FaJsSquare, FaReact, FaCss3Alt, FaPython, FaBrain } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiRedux, SiMysql, SiHibernate } from 'react-icons/si';
import { skills } from '../data/skills';

const iconMap = {
    FaJava: <FaJava className="skill-icon" style={{ color: '#f89820' }} />,
    FaCode: <FaCode className="skill-icon" style={{ color: '#6db33f' }} />,
    FaDatabase: <FaDatabase className="skill-icon" style={{ color: '#336791' }} />,
    FaHtml5: <FaHtml5 className="skill-icon" style={{ color: '#e34c26' }} />,
    FaJsSquare: <FaJsSquare className="skill-icon" style={{ color: '#f7df1e' }} />,
    FaReact: <FaReact className="skill-icon" style={{ color: '#61dafb' }} />,
    FaCss3Alt: <FaCss3Alt className="skill-icon" style={{ color: '#38bdf8' }} />,
    FaPython: <FaPython className="skill-icon" style={{ color: '#3776ab' }} />,
    FaBrain: <FaBrain className="skill-icon" style={{ color: '#eada5e' }} />,
    SiDjango: <SiDjango className="skill-icon" style={{ color: '#092e20' }} />,
    SiFastapi: <SiFastapi className="skill-icon" style={{ color: '#009688' }} />,
    SiMysql: <SiMysql className="skill-icon" style={{ color: '#4479a1' }} />,
    SiRedux: <SiRedux className="skill-icon" style={{ color: '#764abc' }} />,
    SiHibernate: <SiHibernate className="skill-icon" style={{ color: '#59666c' }} />
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { 
        opacity: 0, 
        y: 50, 
        scale: 0.8,
        rotateY: -15
    },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotateY: 0,
        transition: { 
            duration: 0.8, 
            type: "spring", 
            stiffness: 80,
            damping: 12
        } 
    }
};

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const categories = ['All', 'Frontend', 'Backend', 'Database', 'AI/ML'];
    
    const filteredSkills = activeFilter === 'All' 
        ? skills 
        : skills.filter(skill => skill.category === activeFilter.toLowerCase());

    return (
        <section id="skills" className="py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-5"
                >
                    <h2 className="fw-bold text-gradient">Tech Stack</h2>
                    <p className="text-secondary">Technologies I work with</p>
                </motion.div>

                <div className="d-flex justify-content-center mb-5 flex-wrap gap-3">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`btn ${activeFilter === category ? 'btn-custom' : 'btn-outline-custom'} px-4 py-2 rounded-pill`}
                            style={{ minWidth: '100px' }}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="row g-4"
                >
                    {filteredSkills.map((skill, index) => (
                        <Col key={skill.id} md={4} sm={6}>
                            <motion.div 
                                variants={itemVariants} 
                                whileHover={{ 
                                    y: -12, 
                                    scale: 1.08,
                                    rotateY: 5,
                                    transition: { duration: 0.4, type: "spring", stiffness: 300 }
                                }}
                                whileTap={{ 
                                    scale: 0.95,
                                    transition: { duration: 0.1 }
                                }}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                            >
                                <Card className="text-center h-100 border-0 skill-card">
                                    <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
                                        <motion.div 
                                            className="skill-icon-wrapper mb-3"
                                            whileHover={{
                                                rotate: 360,
                                                scale: 1.15,
                                                transition: { duration: 0.6, type: "spring", stiffness: 200 }
                                            }}
                                        >
                                            {iconMap[skill.icon]}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                        >
                                            <Card.Title className="fw-bold text-white mb-2">{skill.name}</Card.Title>
                                            <Card.Text className="skill-description">{skill.description}</Card.Text>
                                        </motion.div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default Skills;
