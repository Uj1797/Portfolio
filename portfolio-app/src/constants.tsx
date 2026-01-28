import React from 'react';
import {
    FaRocket, FaUserAstronaut, FaCodeBranch, FaBrain,
    FaCompass, FaGraduationCap, FaAward, FaPaperPlane
} from 'react-icons/fa';

// Import all sections
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';

export const APPS = [
    { id: 'welcome', title: 'Welcome Center', icon: <FaRocket style={{ color: '#FF7E5F' }} />, component: <Hero /> },
    { id: 'about', title: 'About Me', icon: <FaUserAstronaut style={{ color: '#A855F7' }} />, component: <About /> },
    { id: 'projects', title: 'Projects', icon: <FaCodeBranch style={{ color: '#00D4FF' }} />, component: <Projects /> },
    { id: 'skills', title: 'Skills', icon: <FaBrain style={{ color: '#00FF88' }} />, component: <Skills /> },
    { id: 'experience', title: 'Experience', icon: <FaCompass style={{ color: '#FBCC05' }} />, component: <Experience /> },
    { id: 'education', title: 'Education', icon: <FaGraduationCap style={{ color: '#3B82F6' }} />, component: <Education /> },
    { id: 'certificates', title: 'Certificates', icon: <FaAward style={{ color: '#F59E0B' }} />, component: <Certificates /> },
    { id: 'contact', title: 'Contact', icon: <FaPaperPlane style={{ color: '#60A5FA' }} />, component: <Contact /> },
];
