"use client";

import { WindowProvider } from "@/components/desktop/WindowManager";
import Desktop from "@/components/desktop/Desktop";
// We omit existing background animation as Vista has its own wallpaper
// import BackgroundAnimation from "@/components/BackgroundAnimation";
// import MouseFollower from "@/components/MouseFollower";

export default function Home() {
  return (
    <main>
      <WindowProvider>
        <Desktop />
      </WindowProvider>
    </main>
  );
}
