import React from "react";
import styles from "./style.module.css";
import AboutUs from "../../components/aboutUs";
import Nav from "../../components/Nav";
import WhyUs from "src/components/WhyUs";
import Mission from "src/components/Mission_vision/Mission";
import Vision from "src/components/Mission_vision/Vision";
import HomeFooter from "src/components/HomeFooter";
import AnimateOnScroll from "src/utils/animateonscroll";

const HomePage: React.FC = () => {
  return (
    <div>
      <Nav />
      <div className={styles.home}>
        <div className={styles.container}>
          <span className={styles.heading}>
            Talk is cheap. <br />
            Show me the code.
          </span>
          <span className={styles.text}>
            {
              "<p>An open coding community where you can explore, collaborate, and engage with friends on various coding activities and projects.</p>"
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
          src="/webix.iiitdmj.ac.in/images/home/brackets.svg"
          alt="{}"
        />
      </div>
      <AnimateOnScroll>
        <AboutUs />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <WhyUs />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Mission />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Vision />
      </AnimateOnScroll>
      <HomeFooter />
    </div>
  );
};

export default HomePage;
