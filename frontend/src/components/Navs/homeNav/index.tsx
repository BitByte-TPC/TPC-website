import React from "react";
import styles from "./style.module.css";
import NavLinks from "../navLinks";

const HomeNav: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <NavLinks />
      </ul>
      <img
        className={styles.vector}
        src="/webix.iiitdmj.ac.in/images/ComponentTMP_0-image7.png"
        alt=""
      />
    </div>
  );
};

export default HomeNav;
