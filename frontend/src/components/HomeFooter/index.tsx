import { Email, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import {
  bitbyteEmail,
  bitbyteGithubUrl,
  bitbyteInstaUrl,
  bitbyteLinkedInUrl,
} from "src/store/global";
import styles from "./style.module.css";

const HomeFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href={bitbyteInstaUrl} target="_blank">
        <Instagram className={styles.icon} />
      </a>
      <a href={"mailto:" + bitbyteEmail} target="_blank">
        <Email className={styles.icon} />
      </a>
      <a href={bitbyteLinkedInUrl} target="_blank">
        <LinkedIn className={styles.icon} />
      </a>
      <a href={bitbyteGithubUrl} target="_blank">
        <GitHub className={styles.icon} />
      </a>
    </div>
  );
};

export default HomeFooter;
