import styles from "./style.module.css";
import NavLinks from "../navLinks";

function HomeNav() {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a href="#about">
          <span className={styles.navBtn}>About Us</span>
        </a>
        <span className={styles.navBtn}>Contact Us</span>
      </div>
      <ul className={styles.nav}>
        <NavLinks />
      </ul>
      <img className={styles.vector} src="./ComponentTMP_0-image7.png" alt="" />
    </div>
  );
}

export default HomeNav;
