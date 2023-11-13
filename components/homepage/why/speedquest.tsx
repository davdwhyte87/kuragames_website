import { FC } from "react";
import Image from "next/image";
import Button from "../../shared/Button";
import styles from "../../../styles/Home.module.css";
import bat from "../../../public/assets/images/homepage/fireBat.jpg";

const SpeedQuest: FC = () => {
  return (
    <div className={styles.whyWrap}>
      <hr className={styles.divider} />
      <div className={styles.whyContainer}>
        <div className={styles.whyImg}>
          <Image src={bat} alt="nft art" />
        </div>
        <div className={styles.whyContent}>
          <h1 className="sectionHeader">Speed Quest</h1>
          <p className={styles.whyText}>
            Speed Quest is an adventure game where players can win various valuable digital assets.
            <br />
            Every week the top players are rewarded, and daily tournaments are organized online. 

            <br /> 
            Do you have what it takes to race into the speed force and move through dimensions
            never been seen before? You will be saving billions of people back on plannet earth. 
            You need to find the secrete weapon in the city of the slaves, find it and save planet 
            earth!
            <br /> 

          </p>
          <Button variant="light" className={styles.whyBtn}>
            Play Now!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpeedQuest;
