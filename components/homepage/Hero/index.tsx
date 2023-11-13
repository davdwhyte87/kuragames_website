import { FC } from "react";
import Image from "next/image";
import Button from "../../shared/Button";
import styles from "../../../styles/Home.module.css";
import dots from "../../../public/assets/images/homepage/dots.png";
import bat from "../../../public/assets/images/homepage/batHero.jpg";

const Hero: FC = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroLeft}>
        <div className={styles.heroImgWrap}>
          <Image src={bat} alt="nft bat banner" />
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.rightWrap}>
          <div className={styles.cta}>
            <h1 className={styles.ctaText}>
              Building Fun
              <br className="breakHide" /> And Rewarding
              <br/>
                Mobile games
              <br/>
            </h1>
            {/* <Button variant="light" className={styles.ctaBtn}>
              Play SpeedQuest
            </Button> */}
          </div>
          <div className={styles.heroExtra}>
            <Image src={dots} alt="dots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
