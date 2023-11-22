import { useEffect } from "react";
import Image from "next/image";
import styles from "./rickRoll.module.scss";

const MessageCard = () => {
  return (
    <marquee className={styles.message}>
      🎣 Press any key or I'll show your browser history to your parents 🎣
    </marquee>
  );
};

const RickRoll = ({ setIsRickRolled }) => {
  useEffect(() => {
    const handleKeyDown = () => {
      setIsRickRolled(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <div className={styles.vidContainer}>
        <Image
          src="/misc/rick-rolled.gif"
          className={`${styles.rickRoll}`}
          alt="rick roll"
          width={50}
          height={50}
        />
      </div>
      <MessageCard />
    </>
  );
};

export default RickRoll;
