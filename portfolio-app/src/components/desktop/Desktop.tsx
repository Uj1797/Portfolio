"use client";

import React, { useEffect } from 'react';
import VistaLayout from './VistaLayout';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import WindowFrame from './WindowFrame';
import { useWindow } from './WindowManager';

// Import all sections
import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';
import Experience from '../Experience';
import Education from '../Education';
import Certificates from '../Certificates';

const APPS = [
    { id: 'welcome', title: 'Welcome Center', icon: '👋', component: <Hero /> },
    { id: 'about', title: 'About Me', icon: '👤', component: <About /> },
    { id: 'projects', title: 'Projects', icon: '📁', component: <Projects /> },
    { id: 'skills', title: 'Skills', icon: '📊', component: <Skills /> },
    { id: 'experience', title: 'Experience', icon: '💼', component: <Experience /> },
    { id: 'education', title: 'Education', icon: '🎓', component: <Education /> },
    { id: 'certificates', title: 'Certificates', icon: '📜', component: <Certificates /> },
    { id: 'contact', title: 'Contact', icon: '📧', component: <Contact /> },
];

export default function Desktop() {
    const { windows, openWindow, activeWindowId } = useWindow();

    useEffect(() => {
        // Open Welcome Center on load if no windows open
        if (windows.length === 0) {
            const welcome = APPS.find(a => a.id === 'welcome');
            if (welcome) openWindow(welcome.id, welcome.title, welcome.component, welcome.icon);
        }
    }, []); // Run once on mount

    useEffect(() => {
        // Listen for launch events from StartMenu
        const handleLaunch = (e: any) => {
            const { id } = e.detail;
            const app = APPS.find(a => a.id === id);
            if (app) {
                openWindow(app.id, app.title, app.component, app.icon);
            }
        };
        window.addEventListener('launch-app', handleLaunch);
        return () => window.removeEventListener('launch-app', handleLaunch);
    }, [openWindow]);

    return (
        <VistaLayout>
            {/* Desktop Icons */}
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '100%', gap: '10px', alignContent: 'flex-start' }}>
                {APPS.map(app => (
                    <DesktopIcon
                        key={app.id}
                        title={app.title}
                        icon={app.icon}
                        onDoubleClick={() => openWindow(app.id, app.title, app.component, app.icon)}
                    />
                ))}
            </div>

            {/* Windows */}
            {windows.map(win => (
                <WindowFrame
                    key={win.id}
                    id={win.id}
                    title={win.title}
                    zIndex={win.zIndex}
                    isActive={activeWindowId === win.id}
                    isMaximized={win.isMaximized}
                    isMinimized={win.isMinimized}
                    initialPosition={win.defaultPosition}
                    initialSize={win.defaultSize}
                >
                    {win.component}
                </WindowFrame>
            ))}

            <Taskbar />
        </VistaLayout>
    );
}
