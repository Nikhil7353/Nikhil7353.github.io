import { FaJava, FaCode, FaDatabase, FaHtml5, FaJsSquare, FaReact, FaCss3Alt, FaPython, FaBrain } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiRedux, SiMysql, SiHibernate } from 'react-icons/si';

export const skills = [
  {
    id: 1,
    name: "Java",
    description: "Core Java, OOP, Collections",
    icon: "FaJava",
    category: "backend"
  },
  {
    id: 2,
    name: "Spring Boot",
    description: "REST APIs, Microservices",
    icon: "FaCode",
    category: "backend"
  },
  {
    id: 3,
    name: "PostgreSQL",
    description: "Database Design, Queries",
    icon: "FaDatabase",
    category: "database"
  },
  {
    id: 4,
    name: "React",
    description: "Hooks, Redux, Context API",
    icon: "FaReact",
    category: "frontend"
  },
  {
    id: 5,
    name: "Tailwind CSS",
    description: "Utility-first CSS Framework",
    icon: "FaCss3Alt", // Using CSS3 icon as proxy for Tailwind
    category: "frontend"
  },
  {
    id: 6,
    name: "JavaScript",
    description: "ES6+, Async/Await, DOM",
    icon: "FaJsSquare",
    category: "frontend"
  },
  {
    id: 7,
    name: "HTML/CSS",
    description: "Responsive Design, Bootstrap",
    icon: "FaHtml5",
    category: "frontend"
  },
  {
    id: 8,
    name: "Python",
    description: "Django, FastAPI, Scripting",
    icon: "FaPython",
    category: "backend"
  },
  {
    id: 9,
    name: "Django",
    description: "Backend Web Framework",
    icon: "SiDjango",
    category: "backend"
  },
  {
    id: 10,
    name: "FastAPI",
    description: "High-performance API Framework",
    icon: "SiFastapi",
    category: "backend"
  },
  {
    id: 11,
    name: "Redux",
    description: "State Management",
    icon: "SiRedux",
    category: "frontend"
  },
  {
    id: 12,
    name: "MySQL",
    description: "Relational Database Management",
    icon: "SiMysql",
    category: "database"
  },
  {
    id: 13,
    name: "Hibernate",
    description: "ORM for Java",
    icon: "SiHibernate",
    category: "database"
  },
  {
    id: 14,
    name: "Machine Learning",
    description: "OpenCV, Scikit-Learn, AI",
    icon: "FaBrain",
    category: "ai-ml"
  }
];
