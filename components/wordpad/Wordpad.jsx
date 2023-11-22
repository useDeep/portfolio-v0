"use client";
import { useState } from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import styles from "./wordpad.module.scss";

const Wordpad = ({ data, activeWordpad, setActiveWordpad }) => {
  const [maximizeWindow, setmaximizeWindow] = useState(false);

  const handleClose = () => {
    setActiveWordpad(
      activeWordpad.filter((modal) => modal.item.id !== data.id)
    );
  };

  const handleMaximize = () => {
    setmaximizeWindow((prev) => !prev);
  };

  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      <div
        className={`${styles.wordpad} ${
          maximizeWindow && styles.maximizeWindow
        }`}
      >
        <div className={`${styles.titlebar} handle`}>
          <div className={styles.label}>
            <Image
              className={styles.icon}
              alt="wordpad"
              src="/windowsIcons/wordpad.svg"
              height={50}
              width={50}
            />
            <h2 className={styles.title}>{data.name} - Wordpad</h2>
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
                onClick={handleMaximize}
                src="/windowsIcons/maximize.svg"
                alt="maximize"
                height={50}
                width={50}
              />
            </button>
            <button className={styles.button} onClick={() => handleClose(data)}>
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
        <div className={styles.tools}>
          <div className={styles.menu}>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Insert</span>
            <span>Format</span>
            <span>Help</span>
          </div>
          <div className={styles.hrDivider}>
            <div></div>
            <div></div>
          </div>

          <div className={styles.toolbar}>
            <div className={styles.toolbar_items}>
              <div>
                <span>
                  <Image
                    className={styles.toolbarIcon}
                    src="/windowsIcons/wordpad/new.svg"
                    alt="New"
                    height={50}
                    width={50}
                  />
                </span>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/open.svg"
                    className={styles.toolbarIcon}
                    alt="Open"
                    height={50}
                    width={50}
                  />
                </span>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/save.svg"
                    className={styles.toolbarIcon}
                    alt="Save"
                    height={50}
                    width={50}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/print.svg"
                    className={styles.toolbarIcon}
                    alt="Print"
                    height={50}
                    width={50}
                  />
                </span>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/printPreview.svg"
                    className={styles.toolbarIcon}
                    alt="Print Preview"
                    height={50}
                    width={50}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/find.svg"
                    className={styles.toolbarIcon}
                    alt="Find"
                    height={50}
                    width={50}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/save.svg"
                    className={styles.toolbarIcon}
                    alt="Save"
                    height={50}
                    width={50}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/cut.svg"
                    className={styles.toolbarIcon}
                    alt="Cut"
                    height={50}
                    width={50}
                  />
                </span>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/copy.svg"
                    className={styles.toolbarIcon}
                    alt="Copy"
                    height={50}
                    width={50}
                  />
                </span>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/paste.svg"
                    className={styles.toolbarIcon}
                    alt="Paste"
                    height={50}
                    width={50}
                  />
                </span>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/undo.svg"
                    className={styles.toolbarIcon}
                    alt="Undo"
                    height={50}
                    width={50}
                  />
                </span>
              </div>
              <div>
                <span>
                  <Image
                    src="/windowsIcons/wordpad/date&time.svg"
                    className={styles.toolbarIcon}
                    alt="Date and Time"
                    height={50}
                    width={50}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ruler}>
          <div className={styles.rulerGrip}>
            <Image
              className={styles.rulerGripImg}
              src="/windowsIcons/wordpad/rulerGrip.svg"
              alt="change indent"
              width={20}
              height={20}
            />
          </div>
          <Image
            className={styles.rulerImg}
            src="/windowsIcons/wordpad/ruler2.svg"
            alt="ruler"
            width={600}
            height={20}
          />
        </div>
        <div className={styles.textarea}>
          <div className={styles.content}>{data.content}</div>
        </div>
        <div className={styles.statusbar}>
          <p>For Help, press F1</p>
          <div className={styles.statusbar_right}>
            <div className={styles.statusbar_block}></div>
            <div className={styles.statusbar_block}> </div>
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
  );
};

export default Wordpad;
