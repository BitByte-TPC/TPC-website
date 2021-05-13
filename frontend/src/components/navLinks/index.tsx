import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const NavLinks: React.FC = () => {
  return (
    <>
      <Link to="" className={styles.Link}>
        <li className={styles.first}>Club Registrations</li>
      </Link>
      <Link to="" className={styles.Link}>
        <li className={styles.sec}>Leaderboard</li>
      </Link>
      <Link to="" className={styles.Link}>
        <li className={styles.third}>Events</li>
      </Link>
      <Link to="" className={styles.Link}>
        <li className={styles.fourth}>Sessions</li>
      </Link>
      <Link to="/domains" className={styles.Link}>
        <li className={styles.fifth}>Domains</li>
      </Link>
      <Link to="/projects" className={styles.Link}>
        <li className={styles.sixth}>Projects</li>
      </Link>
    </>
  );
};

export default NavLinks;
