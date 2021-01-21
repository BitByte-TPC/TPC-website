import styles from './style.module.css';
import SvgBackground from '../svgbackground';
import HomeNav from "../homeNav";
import Shortcuts from "../shortcuts";

function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
          <span className={styles.heading}>The Programming Club IIITDMJ</span>
          <img className={styles.computer} src="./ComponentTMP_0-image.png" alt="The Programming Club"/>
          <span className={styles.text}>An Open Coding Community to explore and do a lot more with your friends and members.</span>
          <button className={styles.primaryBtn}>Explore Now</button>
          <SvgBackground />
      </div>
      <HomeNav />
      <Shortcuts />
    </div>
  );
}

export default HomePage;
