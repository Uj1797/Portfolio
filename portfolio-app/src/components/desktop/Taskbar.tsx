import React, { useState, useEffect } from 'react';
import { useWindow } from './WindowManager';
import StartMenu from './StartMenu';
import styles from './Taskbar.module.css';

export default function Taskbar() {
    const { windows, activeWindowId, minimizeWindow, focusWindow, toggleStartMenu, isStartMenuOpen } = useWindow();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Determine start time to sync with seconds
        const now = new Date();
        const delay = 1000 - now.getMilliseconds();
        const timeout = setTimeout(() => {
            setCurrentTime(new Date());
            const timer = setInterval(() => setCurrentTime(new Date()), 1000);
            return () => clearInterval(timer);
        }, delay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.taskbarContainer}>
            {isStartMenuOpen && <StartMenu />}
            <div className={styles.taskbar}>
                <button
                    className={`${styles.startBtn} ${isStartMenuOpen ? styles.startBtnActive : ''}`}
                    onClick={toggleStartMenu}
                >
                    <div className={styles.orb}>
                        <div className={styles.orbInner}></div>
                    </div>
                </button>

                <div className={styles.tasks}>
                    {windows.map(win => (
                        <button
                            key={win.id}
                            className={`${styles.taskBtn} ${activeWindowId === win.id && !win.isMinimized ? styles.activeTask : ''}`}
                            onClick={() => {
                                if (activeWindowId === win.id && !win.isMinimized) {
                                    minimizeWindow(win.id);
                                } else {
                                    focusWindow(win.id);
                                }
                            }}
                        >
                            <span className={styles.taskIcon}>{/* Icon placeholder */}</span>
                            <span className={styles.taskTitle}>{win.title}</span>
                        </button>
                    ))}
                </div>

                <div className={styles.tray}>
                    <div className={styles.clock}>
                        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                </div>
            </div>
        </div>
    );
}
