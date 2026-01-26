import React from 'react';
import styles from './DesktopIcon.module.css';

interface DesktopIconProps {
    title: string;
    icon: React.ReactNode;
    onDoubleClick: () => void;
}

export default function DesktopIcon({ title, icon, onDoubleClick }: DesktopIconProps) {
    return (
        <div className={styles.iconContainer} onDoubleClick={onDoubleClick}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.iconTitle} title={title}>
                {title}
            </div>
        </div>
    );
}
