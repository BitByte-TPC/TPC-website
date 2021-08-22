import React from "react";
import styles from "./style.module.css";

const Vision: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading + " " + styles.break}>Vision</h1>
        <p className={styles.para}>
          We focus on covering a wide spectrum of technologies to constantly
          expand the scope of the club so that each one of you feels included.
        </p>
      </div>
      <div className={styles.vectors}>
        <img
          className={styles.aboutImg}
          src="/images/home/vision.png"
          alt="code"
        />
      </div>
    </div>
  );
};

export default Vision;
