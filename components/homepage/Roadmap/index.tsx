import { FC } from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import  lines from "../../../public/assets/images/homepage/lines.png";
import sunDim from "../../../public/assets/images/homepage/sunstick-dm.svg";
import sunLg from "../../../public/assets/images/homepage/sunstick-lng.svg";
import sunWide from "../../../public/assets/images/homepage/sunstick-wd.svg";

const RoadMap: FC = () => {
  return (
    <div className={styles.roadmapWrap}>
      <h1 className="sectionHeader">Our roadmap</h1>
      <div className={styles.roadmapContainer}>
        <div className={styles.topRoad}>
          <div className={styles.sun_1}>
            <Image src={sunDim} alt="dimmed sun graphic" />
          </div>
          <div className={styles.sun_2}>
            <Image src={sunDim} alt="dimmed sun graphic" />
          </div>
          <div className={styles.roadOne}>
            <p className="roadText">BUILDING FUNDAMENTALS</p>
            <p className={styles.timeline}>Q1 2024</p>
          </div>
          <div className={styles.roadtwo}>
            <p className="roadText">Ongoing</p>
            <p className={styles.paragraph}>
              Developing single player game mode <br /> Develop game infrastructure
            </p>
            <p className={styles.paragraph}>
              Generate a marketing strategy <br /> and gain strategic
              partnerships
            </p>
            <p className={styles.timeline}>Q2 2024</p>
          </div>
          <div className={styles.roadthree}>
            <div>
              <p className="roadText" style={{ margin: 0 }}>
                Develop multiplayer capability
              </p>
              <p className={styles.paragraph}>
                <span className="roadText">Ongoing</span>
                <br /> Build all socials organically
              </p>
              <p className="roadText">Integration with partner marketplaces</p>
            </div>
            <p className={styles.timeline}>Q3 2024</p>
          </div>
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <hr className={styles.roadSplit} />
          <div className={styles.lines}>
            <Image src={lines} alt="lines graphic" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default RoadMap;
