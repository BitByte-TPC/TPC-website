import React from "react";
import styles from "./style.module.css";

const AboutUs: React.FC = () => {
  return (
    <>
      <div id="about" className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>About &nbsp; Us</h1>
          <p className={styles.para}>
            Peeps at{" "}
            <span className={styles.highlight}>
              The Programming Club IIITDMJ{" "}
            </span>
            aim to help students and as a community we want to grow as much as
            possible in many domains of coding and development, be it
            Competitive Programming, Android, Web, Open Source, AI/ML, Ethical
            Hacking.
          </p>
          <p className={styles.para}>
            We try to help each other learn new programming skills organize
            sessions and competitions let everyone know of ongoing activities in
            coding community and how they can use them for their benefits.
          </p>
          <p className={styles.para}>
            Be it getting an internship in a startup company, cracking open
            source competitions or to prepare for a product based company,
            someone will always be there to guide you and help you with the
            resources to get started.
          </p>
        </div>
        <div className={styles.vectors}>
          <div className={styles.svgCon}>
            <img
              className={styles.aboutImg}
              src="/webix.iiitdmj.ac.in/images/other/code2.png"
              alt="code"
            />
            <img
              className={styles.aboutImg}
              src="/webix.iiitdmj.ac.in/images/other/android.png"
              alt="android"
            />
            <img
              className={styles.aboutImg}
              src="/webix.iiitdmj.ac.in/images/other/gsoc.png"
              alt="gsoc"
            />
            <img
              className={styles.aboutImg}
              src="/webix.iiitdmj.ac.in/images/other/ai-ml.png"
              alt="ai-ml"
            />
            <img
              className={styles.aboutImg}
              src="/webix.iiitdmj.ac.in/images/other/hacker.png"
              alt="hacker"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
