"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const follower = followerRef.current;
        if (!follower) return;

        const handleMouseMove = (e: MouseEvent) => {
            follower.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={followerRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "200px",
                height: "200px",
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 5,
                transition: "transform 0.15s ease-out",
                filter: "blur(40px)",
            }}
        />
    );
}
