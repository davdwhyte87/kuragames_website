import { FC } from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import star from "../../../public/assets/images/homepage/star.png";
import star_2 from "../../../public/assets/images/homepage/star-2.png";

const Staking: FC = () => {
  return (
    <div className={styles.stakingWrapper}>
      <h1 className="sectionHeader" style={{ margin: 0 }}>
        {" "}
        Online Multiplayer Tournaments!
      </h1>
      <p className={styles.stakingSubheader}>Compete with millions of players to win crypto</p>
      <div className={styles.stakingImg}>
        <Image src={star} alt="star graphic" />
      </div>
      <p className={styles.stakingText}>
        We run multiplayer tournaments every day at 7pm
        <br /> 
        <br /> 
        What is an auto-staking NFT and what makes this SO SPECIAL? Auto
        staking NFTs traded on the marketplace leverage the royalties from those
        secondary sales to generate yield, which gets split between the original
  
      </p>
      <div className={styles.stakingImgTwo}>
        <Image src={star_2} alt="small star graphic" />
      </div>
    </div>
  );
};

export default Staking;
