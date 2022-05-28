import React from "react";
import styles from "./style.module.css";
import AboutUs from "../../components/aboutUs";
import Nav2 from "../../components/Navs/Nav_v2";
import WhyUs from "src/components/WhyUs";
import Mission from "src/components/Mission_vision/Mission";
import Vision from "src/components/Mission_vision/Vision";
import HomeFooter from "src/components/HomeFooter";

const HomePage: React.FC = () => {
  return (
    <div>
      <Nav2 />
      <div className={styles.home}>
        <div className={styles.container}>
          <span className={styles.heading}>
            Talk is cheap. <br />
            Show me the code.
          </span>
          <span className={styles.text}>
            {
              "<p>An Open Coding Community to explore and do a lot more with your friends and members.</p>"
            }
          </span>
          <img
            className={styles.learnQ}
            src="/webix.iiitdmj.ac.in/images/home/ifyouwanttolearn.png"
            alt="learn"
          />
        </div>
        <img
          className={styles.brackets}
          src="/webix.iiitdmj.ac.in/images/home/brackets.png"
          alt="{}"
        />
      </div>
      <AboutUs />
      <WhyUs />
      <Mission />
      <Vision />
      <HomeFooter />
    </div>
  );
};

export default HomePage;
