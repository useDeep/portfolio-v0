"use client";
import { useMemo, useState } from "react";
import Draggable from "react-draggable";
import styles from "./fileManager.module.scss";
import Image from "next/image";
import Gallery from "../gallery/Gallery";

const FileManager = ({ data, showFileManager, setShowFileManager }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [currentFile, setCurrentFile] = useState();
  const topic = data.id;
  const noOfFiles = data.content.length;
  const fileInfo = useMemo(() => {
    return data;
  }, [data]);

  const menuItems = ["File", "Edit", "View", "Insert", "Format", "Help"];

  const handleClose = () => {
    setShowFileManager(
      showFileManager.filter((file) => file.item.id !== data.id)
    );
  };
  const handleOpenFile = (file) => {
    setCurrentFile(file);
    setOpenGallery(true);
  };

  const content = fileInfo.content.map((file) => {
    let path = file?.replace(/^\.\//, `/${topic}/`);
    return (
      <div
        key={file}
        className={styles.fileItem}
        onDoubleClick={() => handleOpenFile(file.match(/\d+/))}
      >
        <Image
          src={path}
          className={styles.fileImg}
          alt="dank memes"
          height={10}
          width={10}
        />
        <span className={styles.fileName}>{file?.replace(/^\.\//, "")}</span>
      </div>
    );
  });

  return (
    <>
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
                  alt="Talk to Me"
                  height={10}
                  width={10}
                />
              </span>
              <span className={styles.title}>{data.name}</span>
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
              <button className={styles.button}>
                <Image
                  className={styles.buttonIcon}
                  // onClick={handleMaximize}
                  src="/windowsIcons/maximize.svg"
                  alt="maximize"
                  height={50}
                  width={50}
                />
              </button>
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
          <div className={styles.menu}>
            <div className={styles.menuList}>
              {menuItems.map((item) => (
                <div className={styles.menuItem} key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contentArea}>
            <div className={styles.content}>{content}</div>
          </div>
          <div className={styles.statusBars}>
            <div>{noOfFiles} object(s)</div>
            <div>
              <Image
                className={styles.sizegrip}
                src="/windowsIcons/wordpad/statusbar-sizegrip.svg"
                alt="resize"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </Draggable>

      {openGallery && (
        <Gallery
          fileInfo={fileInfo}
          currentFile={currentFile}
          topic={topic}
          setOpenGallery={setOpenGallery}
        />
      )}
    </>
  );
};

export default FileManager;
