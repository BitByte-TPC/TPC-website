import React from "react";
import styles from "./style.module.css";
import NavLinks from "../navLinks";

const HomeNav: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a href="#about">
          <span className={styles.navBtn}>About Us</span>
        </a>
        <a href="#contact">
          <span className={styles.navBtn}>Meet the Team</span>
        </a>
      </div>
      <ul className={styles.nav}>
        <NavLinks />
      </ul>
      <img
        className={styles.vector}
        src="/images/ComponentTMP_0-image7.png"
        alt=""
      />
    </div>
  );
};

export default HomeNav;
