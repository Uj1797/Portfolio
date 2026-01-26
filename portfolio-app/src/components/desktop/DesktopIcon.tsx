import React from 'react';
import styles from './DesktopIcon.module.css';

interface DesktopIconProps {
    title: string;
    icon?: string;
    onDoubleClick: () => void;
}

export default function DesktopIcon({ title, icon, onDoubleClick }: DesktopIconProps) {
    return (
        <div className={styles.iconContainer} onDoubleClick={onDoubleClick}>
            <div className={styles.iconImage}>
                {/* Placeholder for now if no icon provided */}
                {icon || '📁'}
            </div>
            <div className={styles.iconTitle}>
                {title}
            </div>
        </div>
    );
}
