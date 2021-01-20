import styles from "./style.module.css";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <Link to="" style={{ textDecoration: "none" }}>
        <li className={styles.first}>Club Registrations</li>
      </Link>
      <Link to="" style={{ textDecoration: "none" }}>
        <li className={styles.sec}>Leaderboard</li>
      </Link>
      <Link to="" style={{ textDecoration: "none" }}>
        <li className={styles.third}>Events</li>
      </Link>
      <Link to="" style={{ textDecoration: "none" }}>
        <li className={styles.fourth}>Sessions</li>
      </Link>
      <Link to="" style={{ textDecoration: "none" }}>
        <li className={styles.fifth}>Domains</li>
      </Link>
      <Link to="" style={{ textDecoration: "none" }}>
        <li className={styles.sixth}>Projects</li>
      </Link>
    </>
  );
}

export default NavLinks;
