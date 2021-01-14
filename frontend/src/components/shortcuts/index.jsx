import styles from './style.module.css';


function Shortcuts() {
  
  return (
    <div className={styles.container}>
        <div className={styles.logos}>
          <a href="https://www.github.com"><img className={styles.logo}  src="./ComponentTMP_0-image2.png" alt="github"/></a>
          <a href="https://www.facebook.com"><img className={styles.logo} src="./ComponentTMP_0-image3.png" alt="facebook"/></a>
          <a href="https://www.instagram.com"><img className={styles.logo} src="./ComponentTMP_0-image4.png" alt="instagram"/></a>
          <a href="https://www.geeksforgeeks.org"><img className={styles.logo} src="./ComponentTMP_0-image5.png" alt="gfg"/></a>
          <a href="https://www.codeforces.com"><img className={styles.logo} src="./ComponentTMP_0-image6.png" alt="codeforces"/></a>
        </div>
    </div>
  );
}

export default Shortcuts;

