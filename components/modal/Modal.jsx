import Draggable from "react-draggable";
import styles from "./modal.module.scss";
import Image from "next/image";

const Modal = ({ data, activeModals, setActiveModals }) => {
  const handleClose = () => {
    setActiveModals(activeModals.filter((modal) => modal.item.id !== data.id));
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
                src={data.icon}
                className={styles.mainIconImg}
                alt={data.name}
                height={10}
                width={10}
              />
            </span>
            <span className={styles.title}>{data.name}</span>
          </div>
          <button className={styles.close} onClick={() => handleClose(data)}>
            <Image
              className={styles.closeIcon}
              src="/windowsIcons/close.svg"
              alt="close"
              width={10}
              height={10}
            />
          </button>
        </div>
        <p className={styles.text}>{data.content}</p>
        <button className={styles.action} onClick={() => handleClose(data)}>
          <p>OK</p>
        </button>
      </div>
    </Draggable>
  );
};

export default Modal;
