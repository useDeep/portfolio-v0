import Draggable from "react-draggable";
import styles from "./gallery.module.scss";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ fileInfo, topic, currentFile, setOpenGallery }) => {
  const [pointer, setPointer] = useState(Number(currentFile));
  const handleClose = () => {
    setOpenGallery(false);
  };

  const handlebefore = () => {
    if (pointer > 1) return setPointer((prev) => prev - 1);
  };
  const handleNext = () => {
    if (pointer <= fileInfo.content.length - 1)
      return setPointer((prev) => prev + 1);
  };

  const content = (
    <div
      key={pointer}
      className={styles.content}
      onDoubleClick={() => handleOpenFile(file)}
    >
      <Image
        src={`/${topic}/${fileInfo.target} (${pointer}).jpeg`}
        className={styles.fileImg}
        alt={fileInfo.tag}
        height={500}
        width={500}
      />
    </div>
  );

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
                src={fileInfo.icon}
                className={styles.mainIconImg}
                alt={fileInfo.name}
                height={10}
                width={10}
              />
            </span>
            <span className={styles.title}>{fileInfo.name}</span>
          </div>
          <button className={styles.close} onClick={handleClose}>
            <Image
              className={styles.closeIcon}
              src="/windowsIcons/close.svg"
              alt="close"
              width={10}
              height={10}
            />
          </button>
        </div>
        <div className={styles.contentArea}>
          <button className={styles.action} onClick={handlebefore}>
            <Image
              src="/windowsIcons/left-icon.svg"
              alt="move right"
              height={20}
              width={20}
            />
          </button>
          {content}
          <button className={styles.action} onClick={handleNext}>
            <Image
              src="/windowsIcons/right-icon.svg"
              alt="move right"
              height={20}
              width={20}
            />
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default Gallery;
