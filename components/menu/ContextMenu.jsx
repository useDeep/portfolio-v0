import { constextMenuItems } from "./contextMenuItems";
import styles from "./contextmenu.module.scss";
import Image from "next/image";

const ContextMenu = ({ contextMenuPosition }) => {
  const items = constextMenuItems.map((item, index) => (
    <div key={index}>
      {item.name && (
        <div className={styles.menu_item}>
          <span
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: item.name }}
          ></span>
          <span>
            {item.options && (
              <Image
                className={styles.right_icon}
                src="/windowsIcons/right-icon.svg"
                alt="options"
                height={32}
                width={32}
              />
            )}
          </span>
        </div>
      )}
      {item.line && <div className={styles.line}></div>}
    </div>
  ));
  return (
    <div
      style={{
        width: "16rem",
        position: "absolute",
        top: contextMenuPosition.top + "px",
        left: contextMenuPosition.left + "px",
        display: "inline-flex",
        padding: "0.125rem 0.25rem 0.25rem 0.1875rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--mono-100, #C3C3C3)",
        boxShadow:
          "-4px -4px 0px 0px #7E7E7E inset, 2px 2px 0px 0px #F0F0F0 inset, -2px -2px 0px 0px #262626 inset",
      }}
    >
      {items}
    </div>
  );
};

export default ContextMenu;
