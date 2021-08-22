import React from "react";
import styles from "./style.module.css";

const WhyUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Why us</h1>
        <h1 className={styles.heading2}>why us</h1>
        <h1 className={styles.heading + " " + styles.break}>why us</h1>
        <p className={styles.para}>
          When you need advice regarding a fellowship, who is better equipped
          than someone who cracked it themselves?
        </p>
        <p className={styles.para}>
          We are a team of skilled developers who have made it to GSoC, MLH and
          other prestigious programs, and top level competitive coders who have
          achieved ranks in ICPC, Google Hashcode, CodeJam and FaceBook
          HackerCup.
        </p>
        <p className={styles.para}>
          A strong and supportive alumni network which will help you get a
          career boost.
        </p>
      </div>
      <div className={styles.vectors}>
        <img
          className={styles.aboutImg}
          src="/webix.iiitdmj.ac.in/images/other/why_us.png"
          alt="tech"
        />
      </div>
    </div>
  );
};

export default WhyUs;
