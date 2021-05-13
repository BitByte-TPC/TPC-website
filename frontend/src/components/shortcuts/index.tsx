import React from "react";
import styles from "./style.module.css";

const Shortcuts: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <a
          href="https://github.com/BitByte-TPC"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.logo}
            src="/images/other/ComponentTMP_0-image2.png"
            alt="github"
          />
        </a>
        <a
          href="https://www.facebook.com/geeks.IIITJ/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.logo}
            src="/images/other/ComponentTMP_0-image3.png"
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img
            className={styles.logo}
            src="/images/other/ComponentTMP_0-image4.png"
            alt="instagram"
          />
        </a>
        <a
          href="https://www.geeksforgeeks.org"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.logo}
            src="/images/other/ComponentTMP_0-image5.png"
            alt="gfg"
          />
        </a>
        <a href="https://www.codeforces.com" target="_blank" rel="noreferrer">
          <img
            className={styles.logo}
            src="/images/other/ComponentTMP_0-image6.png"
            alt="codeforces"
          />
        </a>
      </div>
    </div>
  );
};

export default Shortcuts;
