import React from "react";
import styles from "./style.module.css";
import NavLinks from "../navLinks";

const HomeNav: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <NavLinks />
      </ul>
    </div>
  );
};

export default HomeNav;
