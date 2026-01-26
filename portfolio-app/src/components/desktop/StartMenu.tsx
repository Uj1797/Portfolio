import React from 'react';
import { useWindow } from './WindowManager';
import styles from './StartMenu.module.css';
import {
    FaRocket, FaUserAstronaut, FaCodeBranch, FaBrain,
    FaCompass, FaGraduationCap, FaAward, FaPaperPlane
} from 'react-icons/fa';

export default function StartMenu() {
    const { openWindow, toggleStartMenu } = useWindow();

    const handleLaunch = (id: string, title: string) => {
        // We will map these IDs to actual components in page.tsx later
        // For now we just open a placeholder or a window with that ID
        // We might need a registry of components, or pass a component?
        // In WindowManager, openWindow takes a ReactNode.
        // Ideally page.tsx handles the launching logic or we import components here.
        // For separation of concerns, StartMenu should emit an event or call a function that knows about components.
        // But since this is a small app, we can import components here if we convert them to export properly.
        // HOWEVER, to avoid circular deps or complexity, let's assume openWindow can accept a component instance we create here
        // OR we pass a "launcher" function to StartMenu.

        // For now, let's keep it simple: We'll use a custom event or just assume the parent handles it?
        // Actually, simpler: StartMenu will just be UI, but it needs to open specific apps.
        // I'll make a helper to get component by ID in page.tsx and pass it down?
        // No, I'll direct import the components here. It's fine.

        // BUT, the components (Projects, About) are in ../../components/.
        toggleStartMenu();
        // We will emit a custom event to request opening an app, handled by page.tsx? 
        // OR more simply, we use a global registry.
        // Let's implement a simple registry in a separate file or just map here.

        // Actually, I can't import Projects/About yet efficiently without refactoring active page.tsx content.
        // I'll leave the actual component launching logic for the integration step.
        // For now, I'll just emit an event on window object? No that's hacky.
        // I'll dispatch a custom event "launch-app".

        window.dispatchEvent(new CustomEvent('launch-app', { detail: { id, title } }));
    };

    return (
        <div className={styles.startMenu}>
            <div className={styles.leftPane}>
                <div className={styles.userItem}>
                    <div className={styles.userIcon}></div>
                    <span>Ujjwal Sharma</span>
                </div>
                <div className={styles.separator} />
                <ul className={styles.programsList}>
                    <li onClick={() => handleLaunch('projects', 'Project Explorer')}>
                        <FaCodeBranch className={styles.menuIcon} style={{ color: '#00D4FF' }} /> Projects
                    </li>
                    <li onClick={() => handleLaunch('about', 'About Me')}>
                        <FaUserAstronaut className={styles.menuIcon} style={{ color: '#A855F7' }} /> About Me
                    </li>
                    <li onClick={() => handleLaunch('experience', 'Professional Experience')}>
                        <FaCompass className={styles.menuIcon} style={{ color: '#FBCC05' }} /> Experience
                    </li>
                    <li onClick={() => handleLaunch('skills', 'System Performance')}>
                        <FaBrain className={styles.menuIcon} style={{ color: '#00FF88' }} /> Skills
                    </li>
                    <li onClick={() => handleLaunch('contact', 'Contact Support')}>
                        <FaPaperPlane className={styles.menuIcon} style={{ color: '#60A5FA' }} /> Contact
                    </li>
                </ul>
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Start Search" />
                    <button>🔍</button>
                </div>
            </div>
            <div className={styles.rightPane}>
                <ul>
                    <li onClick={() => handleLaunch('about', 'My Documents')}>My Documents (About)</li>
                    <li onClick={() => handleLaunch('projects', 'Recent Projects')}>Recent Projects</li>
                    <li onClick={() => handleLaunch('certificates', 'Certificates')}>Certificates</li>
                    <div className={styles.separator} />
                    <li>Control Panel</li>
                    <li>Printers</li>
                    <div className={styles.separator} />
                    <li>Run...</li>
                </ul>
            </div>
        </div>
    );
}
