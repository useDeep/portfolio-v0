"use client";
import styles from "./page.module.scss";
import HomeFooter from "@/components/footers/HomeFooter";
import { useState } from "react";
import StartMenu from "@/components/menu/StartMenu";
import ContextMenu from "@/components/menu/ContextMenu";
import MainInterface from "@/components/interfaces/MainInterface";

export default function Home() {
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

      {showStartMenu && <StartMenu />}
      <HomeFooter
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
      />
    </div>
  );
}
