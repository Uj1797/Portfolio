import React, { useRef, useState, useEffect } from 'react';
import { useWindow } from './WindowManager';
import { motion, useDragControls } from 'framer-motion';
import styles from './WindowFrame.module.css';

interface WindowFrameProps {
    id: string;
    title: string;
    children: React.ReactNode;
    zIndex: number;
    isActive: boolean;
    isMaximized: boolean;
    isMinimized: boolean;
    initialPosition?: { x: number; y: number };
    initialSize?: { width: number; height: number };
}

import ExplorerShell from './ExplorerShell';

export default function WindowFrame({
    id,
    title,
    children,
    zIndex,
    isActive,
    isMaximized,
    isMinimized,
    initialPosition = { x: 100, y: 50 },
    initialSize = { width: 800, height: 600 }
}: WindowFrameProps) {
    const { closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useWindow();
    const dragControls = useDragControls();

    if (isMinimized) return null;

    return (
        <motion.div
            className={`${styles.window} ${isActive ? styles.active : ''} ${isMaximized ? styles.maximized : ''}`}
            style={{ zIndex }}
            initial={isMaximized ? false : { x: initialPosition.x, y: initialPosition.y, width: initialSize.width, height: initialSize.height }}
            animate={isMaximized
                ? { x: 0, y: 0, width: '100vw', height: 'calc(100vh - 48px)' }
                : { width: initialSize.width, height: initialSize.height }
            }
            drag={!isMaximized}
            dragMomentum={false}
            dragListener={false}
            dragControls={dragControls}
            onPointerDown={() => focusWindow(id)}
        >
            <div
                className={styles.titleBar}
                onPointerDown={(e) => {
                    focusWindow(id);
                    dragControls.start(e);
                }}
            >
                <div className={styles.titleText}>{title}</div>
                <div className={styles.controls}>
                    <button onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }} className={styles.minimize}>–</button>
                    <button onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }} className={styles.maximize}>□</button>
                    <button onClick={(e) => { e.stopPropagation(); closeWindow(id); }} className={styles.close}>✕</button>
                </div>
            </div>
            <div className={styles.content}>
                <ExplorerShell title={title}>
                    {children}
                </ExplorerShell>
            </div>
        </motion.div>
    );
}
