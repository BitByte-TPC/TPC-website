import React from "react";
import styles from "./style.module.css";

const Mission: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading + " " + styles.break}>Mission</h1>
        <p className={styles.para}>
          We, including students from freshman year to final year, aim to create
          a thriving coding environment for developers like you to ensure
          community learning.
        </p>
      </div>
      <div className={styles.vectors}>
        <img
          className={styles.aboutImg}
          src="/images/home/mission.png"
          alt="code"
        />
      </div>
    </div>
  );
};

export default Mission;
