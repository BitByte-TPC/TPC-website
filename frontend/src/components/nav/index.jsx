import styles from './style.module.css';


function Nav() {
  return (
    <div className={styles.container}>
        <div className={styles.buttons}>
        <span className={styles.navBtn}>About Us</span>
        <span className={styles.navBtn}>Contact Us</span>
        </div>
        <ul className={styles.nav}>
          <li className={styles.first}>Club Registrations</li>
          <li className={styles.sec}>Leaderboard</li>
          <li className={styles.third}>Events</li>
          <li className={styles.fourth}>Sessions</li>
          <li className={styles.fifth}>Domains</li>
          <li className={styles.sixth}>Projects</li>
        </ul>
        <img className={styles.vector} src="./ComponentTMP_0-image7.png" alt=""/>
    </div>
  );
}

export default Nav;