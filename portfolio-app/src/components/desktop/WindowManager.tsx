"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface WindowState {
    id: string;
    title: string;
    icon?: string;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
    component: ReactNode;
    defaultSize?: { width: number; height: number };
    defaultPosition?: { x: number; y: number };
}

interface WindowContextType {
    windows: WindowState[];
    activeWindowId: string | null;
    openWindow: (id: string, title: string, component: ReactNode, icon?: string) => void;
    closeWindow: (id: string) => void;
    minimizeWindow: (id: string) => void;
    maximizeWindow: (id: string) => void;
    focusWindow: (id: string) => void;
    toggleStartMenu: () => void;
    isStartMenuOpen: boolean;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export function WindowProvider({ children }: { children: ReactNode }) {
    const [windows, setWindows] = useState<WindowState[]>([]);
    const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const [highestZIndex, setHighestZIndex] = useState(10);

    const focusWindow = (id: string) => {
        setActiveWindowId(id);
        setWindows(prev => prev.map(w => {
            if (w.id === id) {
                return { ...w, zIndex: highestZIndex + 1, isMinimized: false };
            }
            return w;
        }));
        setHighestZIndex(prev => prev + 1);
        setIsStartMenuOpen(false); // Close start menu when clicking a window
    };

    const openWindow = (id: string, title: string, component: ReactNode, icon?: string) => {
        setWindows(prev => {
            const existing = prev.find(w => w.id === id);
            if (existing) {
                focusWindow(id);
                return prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false } : w);
            }
            const newWindow: WindowState = {
                id,
                title,
                component,
                icon,
                isOpen: true,
                isMinimized: false,
                isMaximized: false,
                zIndex: highestZIndex + 1,
                defaultSize: { width: 800, height: 600 },
                defaultPosition: { x: 100 + (prev.length * 20), y: 50 + (prev.length * 20) } // Cascade effect
            };
            setHighestZIndex(prevZ => prevZ + 1);
            setActiveWindowId(id);
            return [...prev, newWindow];
        });
    };

    const closeWindow = (id: string) => {
        setWindows(prev => prev.filter(w => w.id !== id));
        if (activeWindowId === id) {
            setActiveWindowId(null);
        }
    };

    const minimizeWindow = (id: string) => {
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
        if (activeWindowId === id) {
            setActiveWindowId(null);
        }
    };

    const maximizeWindow = (id: string) => {
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
        focusWindow(id);
    };

    const toggleStartMenu = () => {
        setIsStartMenuOpen(prev => !prev);
    };

    return (
        <WindowContext.Provider value={{
            windows,
            activeWindowId,
            openWindow,
            closeWindow,
            minimizeWindow,
            maximizeWindow,
            focusWindow,
            toggleStartMenu,
            isStartMenuOpen
        }}>
            {children}
        </WindowContext.Provider>
    );
}

export function useWindow() {
    const context = useContext(WindowContext);
    if (context === undefined) {
        throw new Error('useWindow must be used within a WindowProvider');
    }
    return context;
}
