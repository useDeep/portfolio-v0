import Draggable from "react-draggable";
import styles from "./mail.module.scss";
import Image from "next/image";
import MailForm from "./MailForm";

const Mail = ({ setActiveMail }) => {
  const handleClose = () => {
    setActiveMail(false);
  };

  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      <div className={styles.modal}>
        <div className={`${styles.titlebar} handle`}>
          <div className={styles.titleLeft}>
            <span className={styles.mainIcon}>
              <Image
                src="/windowsIcons/chat.png"
                className={styles.mainIconImg}
                alt="Talk to Me"
                height={10}
                width={10}
              />
            </span>
            <span className={styles.title}>Talk to Me</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <Image
                className={styles.buttonIcon}
                alt="minimize"
                src="/windowsIcons/minimize.svg"
                height={50}
                width={50}
              />
            </button>
            {/* <button className={styles.button}>
              <Image
                className={styles.buttonIcon}
                // onClick={handleMaximize}
                src="/windowsIcons/maximize.svg"
                alt="maximize"
                height={50}
                width={50}
              />
            </button> */}
            <button className={styles.button} onClick={handleClose}>
              <Image
                className={styles.buttonIcon}
                src="/windowsIcons/close.svg"
                alt="close"
                height={50}
                width={50}
              />
            </button>
          </div>
        </div>
        <div className={styles.header}>
          <MailForm />
        </div>
      </div>
    </Draggable>
  );
};

export default Mail;
