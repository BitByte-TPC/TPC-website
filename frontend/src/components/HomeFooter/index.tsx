import { Email, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import styles from "./style.module.css";

const HomeFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.instagram.com/bitbyte.tpc/" target="_blank">
        <Instagram className={styles.icon} />
      </a>
      <a href="mailto:theprogclub@iiitdmj.ac.in" target="_blank">
        <Email className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/company/bitbyte-tpc/about/"
        target="_blank"
      >
        <LinkedIn className={styles.icon} />
      </a>
      <a href="https://github.com/BitByte-TPC" target="_blank">
        <GitHub className={styles.icon} />
      </a>
    </div>
  );
};

export default HomeFooter;
