"use client";
import styles from "./page.module.scss";
import HomeFooter from "@/components/footers/HomeFooter";
import { useState, useEffect } from "react";
import StartMenu from "@/components/menu/StartMenu";
import ContextMenu from "@/components/menu/ContextMenu";
import MainInterface from "@/components/interfaces/MainInterface";
import MobileWarning from "@/components/popups/MobileWarning";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const detectMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    detectMobile();
    window.addEventListener('resize', detectMobile);

    return () => {
      window.removeEventListener('resize', detectMobile);
    };
  }, []);
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault()
    setContextMenuPosition({ top: e.clientY, left: e.clientX })
    setShowContextMenu(true)
  }
  const handleBackdrop = () => {
    if (showStartMenu) {
      setShowStartMenu(false);
    }
    if (showContextMenu) {
      setShowContextMenu(false);
    }
  }

  return (
    <div>
      <div
        className={styles.backdrop}
        onClick={handleBackdrop}
        onContextMenu={handleContextMenu}>

        <MainInterface />
        {showContextMenu && (
          <ContextMenu
            contextMenuPosition={contextMenuPosition}
          />)}
      </div>
      {isMobile ? <MobileWarning setIsMobile= {setIsMobile} /> : null}

      {showStartMenu && <StartMenu />}
      <HomeFooter
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
      />
    </div>
  );
}
