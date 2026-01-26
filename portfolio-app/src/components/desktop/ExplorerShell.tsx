import React from 'react';
import styles from './ExplorerShell.module.css';
import { FaFolder, FaHome, FaClock, FaFileAlt, FaImage, FaMusic } from 'react-icons/fa';

interface ExplorerShellProps {
    title: string;
    children: React.ReactNode;
}

export default function ExplorerShell({ title, children }: ExplorerShellProps) {
    return (
        <div className={styles.explorer}>
            <div className={styles.toolbar}>
                <div className={styles.navButtons}>
                    <button className={styles.backBtn}>←</button>
                    <button className={styles.forwardBtn}>→</button>
                </div>
                <div className={styles.addressBar}>
                    <FaFolder className={styles.addressIcon} style={{ color: '#FBCC05' }} />
                    <span className={styles.breadcrumb}>Computer ▸ {title}</span>
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder={`Search ${title}`} />
                </div>
            </div>
            <div className={styles.mainArea}>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarSection}>
                        <h3>Favorite Links</h3>
                        <ul>
                            <li><FaHome className={styles.sideIcon} style={{ color: '#3B82F6' }} /> Desktop</li>
                            <li><FaClock className={styles.sideIcon} style={{ color: '#A855F7' }} /> Recent Items</li>
                        </ul>
                    </div>
                    <div className={styles.sidebarSection}>
                        <h3>Folders</h3>
                        <ul>
                            <li><FaFileAlt className={styles.sideIcon} style={{ color: '#94A3B8' }} /> Documents</li>
                            <li><FaImage className={styles.sideIcon} style={{ color: '#EC4899' }} /> Pictures</li>
                            <li><FaMusic className={styles.sideIcon} style={{ color: '#10B981' }} /> Music</li>
                        </ul>
                    </div>
                </aside>
                <div className={styles.contentBody}>
                    {children}
                </div>
            </div>
            <footer className={styles.statusbar}>
                <span>{React.Children.count(children)} items</span>
            </footer>
        </div>
    );
}
