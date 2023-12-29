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
        <div className={styles.circlecontainer}>
          <div className={styles.outercircle}>
            <div className={styles.circle}>
              <img
                width="80px"
                height="80px"
                className={styles.github}
                src="/webix.iiitdmj.ac.in/images/icons/github.png"
                alt=""
              />
              <img
                width="80px"
                height="80px"
                className={styles.react}
                src="/webix.iiitdmj.ac.in/images/icons/react.png"
                alt=""
              />
              <img
                width="80px"
                height="80px"
                className={styles.angular}
                src="/webix.iiitdmj.ac.in/images/icons/angular.png"
                alt=""
              />
              <img
                width="80px"
                height="80px"
                className={styles.vue}
                src="/webix.iiitdmj.ac.in/images/icons/vue.png"
                alt=""
              />
            </div>
            <div className={styles.middlewrapper}>
              <div className={styles.middlecircle}>
                <div className={styles.circle}>
                  <img
                    width="80px"
                    height="80px"
                    className={styles.c}
                    src="/webix.iiitdmj.ac.in/images/icons/c.png"
                    alt=""
                  />
                  <img
                    width="80px"
                    height="80px"
                    className={styles.java}
                    src="/webix.iiitdmj.ac.in/images/icons/java.png"
                    alt=""
                  />
                  <img
                    width="80px"
                    height="80px"
                    className={styles.python}
                    src="/webix.iiitdmj.ac.in/images/icons/python.png"
                    alt=""
                  />
                  <img
                    width="80px"
                    height="80px"
                    className={styles.go}
                    src="/webix.iiitdmj.ac.in/images/icons/go.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
