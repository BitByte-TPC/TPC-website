import styles from './style.module.css';


function NavLinks() {
  return (
    <>
        <li className={styles.first}>Club Registrations</li>
        <li className={styles.sec}>Leaderboard</li>
        <li className={styles.third}>Events</li>
        <li className={styles.fourth}>Sessions</li>
        <li className={styles.fifth}>Domains</li>
        <li className={styles.sixth}>Projects</li>
    </>
  );
}

export default NavLinks;