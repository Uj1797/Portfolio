import React from 'react';
import styles from './ExplorerShell.module.css';

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
                    <span className={styles.folderIcon}>📁</span>
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
                            <li>🏠 Desktop</li>
                            <li>📁 Recent Items</li>
                        </ul>
                    </div>
                    <div className={styles.sidebarSection}>
                        <h3>Folders</h3>
                        <ul>
                            <li>📂 Documents</li>
                            <li>🖼️ Pictures</li>
                            <li>🎵 Music</li>
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
