import { useEffect } from "react";
import styles from "./blueScreen.module.scss";

const BlueScreen = ({ setShowBlueScreen }) => {
  useEffect(() => {
    const handleKeyDown = () => {
      setShowBlueScreen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className={styles.bluescreenContainer}>
      <img src="/misc/blueScreen.png" alt="blue screen" className={`${styles.blueScreen}`} />
    </div>
  );
};

export default BlueScreen;
