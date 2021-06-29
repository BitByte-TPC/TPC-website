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
        <a
          href="https://www.instagram.com/bitbyte.tpc/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.logo}
            src="/images/other/ComponentTMP_0-image4.png"
            alt="instagram"
          />
        </a>
        <a
          href="https://www.codechef.com/ratings/all?filterBy=Institution%3DIndian%20Institute%20of%20Information%20Technology%2C%20Design%20and%20Manufacturing%2C%20Jabalpur&order=asc&sortBy=global_rank"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.logo}
            src="/images/other/codechef.png"
            alt="gfg"
          />
        </a>
        <a
          href="https://codeforces.com/ratings/organization/2582"
          target="_blank"
          rel="noreferrer"
        >
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
