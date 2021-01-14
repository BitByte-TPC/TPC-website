import styles from './style.module.css';
import SvgBackground from '../svgbackground';
import HomeNav from "../homeNav";

function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
          <span className={styles.heading}>The Programming Club IIITDMJ</span>
          <img src="./ComponentTMP_0-image.png" alt="The Programming Club"/>
          <span className={styles.text}>An Open Coding Community to explore and do a lot more with your friends and members.</span>
          <button className={styles.primaryBtn}>Explore Now</button>
          <SvgBackground />
      </div>
      <HomeNav />
    </div>
  );
}

export default HomePage;
