import styles from "./startmenu.module.scss";
import Image from "next/image";
import { startmenuItems } from "./startmenuItems";
import { useState } from "react";
import BlueScreen from "../misc/BlueScreen";

const StartMenu = () => {
  const [showBlueScreen, setShowBlueScreen] = useState(false);

  const handleShutDown = () => {
    setShowBlueScreen(true);
  };

  return (
    <>
      <div className={styles.menu_card}>
        {startmenuItems.map((item) => (
          <div key={item.id} className={styles.menu_item}>
            <span>
              <Image
                className={styles.item_img}
                src={item.icon}
                alt={item.name}
                height={50}
                width={50}
              />
              <span className={styles.item_name}>
                <span className={styles.first_letter}>
                  {item.name.charAt(0)}
                </span>
                {item.name.slice(1)}
              </span>
            </span>
            {item.options && (
              <Image
                className={styles.right_icon}
                src="/windowsIcons/right-icon.svg"
                alt="po"
                height={32}
                width={32}
              />
            )}
          </div>
        ))}
        <div className={styles.line}></div>
        <div className={styles.menu_item}>
          <span onClick={handleShutDown}>
            <Image
              className={styles.item_img}
              src="/windowsIcons/shutdown.svg"
              alt="Shutdown"
              height={50}
              width={50}
            />
            <span className={styles.item_name}>Shut Down</span>
          </span>
        </div>
      </div>
      {showBlueScreen && <BlueScreen setShowBlueScreen={setShowBlueScreen} />}
    </>
  );
};

export default StartMenu;
