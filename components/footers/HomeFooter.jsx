"use client";
import { useState, useEffect } from "react";
import styles from "./homefooter.module.scss";
import Image from "next/image";

const HomeFooter = ({ showStartMenu, setShowStartMenu }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, "0") % 12 || 12;
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const ampm = currentTime.getHours() >= 12 ? "PM" : "AM";

  const handleStartMenu = () => {
    setShowStartMenu((prev) => !prev);
  };

  return (
    <div className={styles.home_footer}>
      <div
        className={
          !showStartMenu
            ? styles.start_button_deactive
            : styles.start_button_active
        }
        onClick={handleStartMenu}
      >
        <Image
          className={styles.windows_icon}
          src="/windowsIcons/windows-small.svg"
          alt="Windows Start"
          width={32}
          height={32}
        />
        <p className={styles.start}>Start</p>
      </div>
      {/* <div>

            </div> */}
      <div className={styles.right_corner}>
        <Image
          className={styles.volume}
          src="/windowsIcons/volume-small.svg"
          alt="volume"
          height={32}
          width={32}
        />
        <div className={styles.time}>{`${hours}:${minutes} ${ampm}`}</div>
      </div>
    </div>
  );
};

export default HomeFooter;
