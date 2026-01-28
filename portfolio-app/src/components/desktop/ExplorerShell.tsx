import React from 'react';
import styles from './ExplorerShell.module.css';
import { FaFolder, FaHome, FaClock } from 'react-icons/fa';
import { useWindow } from './WindowManager';
import { APPS } from '../../constants';

interface ExplorerShellProps {
    title: string;
    children: React.ReactNode;
}

export default function ExplorerShell({ title, children }: ExplorerShellProps) {
    const { openWindow } = useWindow();

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
                            <li onClick={() => {
                                const welcome = APPS.find(a => a.id === 'welcome');
                                if (welcome) openWindow(welcome.id, welcome.title, welcome.component, welcome.icon);
                            }}>
                                <FaHome className={styles.sideIcon} style={{ color: '#3B82F6' }} /> Desktop
                            </li>
                            <li><FaClock className={styles.sideIcon} style={{ color: '#A855F7' }} /> Recent Items</li>
                        </ul>
                    </div>
                    <div className={styles.sidebarSection}>
                        <h3>Portfolio Sections</h3>
                        <ul>
                            {APPS.map(app => (
                                <li key={app.id} onClick={() => openWindow(app.id, app.title, app.component, app.icon)}>
                                    {React.isValidElement(app.icon) && React.cloneElement(app.icon as React.ReactElement, { className: styles.sideIcon })}
                                    {app.title}
                                </li>
                            ))}
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
