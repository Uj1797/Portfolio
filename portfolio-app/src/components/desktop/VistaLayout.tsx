import React, { useState } from 'react';
import styles from './Vista.module.css';

interface VistaLayoutProps {
    children: React.ReactNode;
}

export default function VistaLayout({ children }: VistaLayoutProps) {
    return (
        <div className={styles.desktop}>
            <div className={styles.wallpaper} />
            <div className={styles.desktopContent}>
                {children}
            </div>
        </div>
    );
}
