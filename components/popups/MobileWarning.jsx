import styles from "./mobileWarning.module.scss";
import Image from "next/image";

const MobileWarning = ({ setIsMobile }) => {
  const closeMessage = () => {
    setIsMobile(false);
  };
  return (
    <div className={styles.popup}>
      <div className={styles.warn}>
        <Image
          src="/misc/steve.png"
          alt="Steve Ballmer developers"
          className={styles.steve}
          width={200}
          height={200}
        />
        <div className={styles.textbox}>
          <p className={styles.message}>
            This website may not appeal you because your
            device doesn't have a keyboard. Which makes it not a very good email
            machine. So, <span>get on your laptop</span> for which this site is
            best optimized for.
          </p>
          <div className={styles.close} onClick={closeMessage}>
            close
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileWarning;
