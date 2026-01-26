import React from 'react';
import styles from './DesktopIcon.module.css';

interface DesktopIconProps {
    title: string;
    icon?: string;
    onDoubleClick: () => void;
}

export default function DesktopIcon({ title, icon, onDoubleClick }: DesktopIconProps) {
    // Default to the generated folder icon
    const iconPath = icon || '/icons/folder.png';

    return (
        <div className={styles.iconContainer} onDoubleClick={onDoubleClick}>
            <div className={styles.iconWrapper}>
                <img src={iconPath} alt={title} className={styles.iconImage} />
            </div>
            <div className={styles.iconTitle}>
                {title}
            </div>
        </div>
    );
}
