import { FC } from "react";
import Image from "next/image";
import Button from "../../shared/Button";
import styles from "../../../styles/Home.module.css";
import bat from "../../../public/assets/images/homepage/fireBat.jpg";

const WhyGro: FC = () => {
  return (
    <div className={styles.whyWrap}>
      <hr className={styles.divider} />
      <div className={styles.whyContainer}>
        <div className={styles.whyImg}>
          <Image src={bat} alt="nft art" />
        </div>
        <div className={styles.whyContent}>
          <h1 className="sectionHeader">About Kura Games</h1>
          <p className={styles.whyText}>
            Kura Games is a technology company focused on building fun mobile games that 
            allow players from all around the world win crypto currency. 
            <br />
            We are focused on innovation, we are driving brilliant ideas in the 
            entertainment industry. 
            <br /> 

            <br /> 

          </p>
          {/* <Button variant="light" className={styles.whyBtn}>
            
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default WhyGro;


