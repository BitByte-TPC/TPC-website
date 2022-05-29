import React from "react";
import styles from "./style.module.css";

const AboutUs: React.FC = () => {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content + " " + styles.topGap}>
        <h1 className={styles.heading}>About</h1>
        <h1 className={styles.heading2}>About</h1>
        <h1 className={styles.heading + " " + styles.break}>About</h1>
        <p className={styles.para}>
          Bitbyte-TPC is a peer-learning community filled with tech-enthusiasts
          just like YOU!
        </p>
        <p className={styles.para}>
          We intend to keep your interest kindled with regular thought-provoking
          sessions on Competitive coding , web, app, and game development, open
          source contributions, AI and ML (basically anything and everything
          that involves coding). aim to help students and as a community we want
          to grow as much as possible in many domains of coding and development,
          be it Competitive Programming, Android, Web, Open Source, AI/ML,
          Ethical Hacking.
        </p>
        <p className={styles.para}>
          You also get a chance to exhibit your skills and win prizes in events
          like Jamboree, NewBie, Commix and many more organised every now and
          then.
        </p>
      </div>
      <div className={styles.vectors}>
        <img
          className={styles.aboutImg}
          src="/webix.iiitdmj.ac.in/images/about/design.svg"
          alt="code"
        />
        <img
          className={styles.aboutImg}
          src="/webix.iiitdmj.ac.in/images/about/develop.svg"
          alt="android"
        />
        <img
          className={styles.aboutImg}
          src="/webix.iiitdmj.ac.in/images/about/test.svg"
          alt="gsoc"
        />
        <img
          className={styles.aboutImg}
          src="/webix.iiitdmj.ac.in/images/about/deploy.svg"
          alt="ai-ml"
        />
      </div>
    </div>
  );
};

export default AboutUs;
