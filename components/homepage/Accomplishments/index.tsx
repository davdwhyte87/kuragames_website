import { FC } from "react";
import styles from "../../../styles/Home.module.css";

const Accomplishments: FC = () => {
  return (
    <div className={styles.accomplishmentWrap}>
      <h1 className="sectionHeader" style={{ textAlign: "center" }}>
        Accomplishments
        <br />
      </h1>
      <div className={styles.accomplishmentContainer}>
        <div className={styles.item}>
          Digital currency launch (V1.2)
          <br />
        </div>
        <div className={styles.item}>
          1.2 million players playing 
          
        </div>
        <div className={styles.item}>
          20 million payout weekly to players
          <br />
        </div>
        <div className={styles.item}>
          NFT infrastructure launch
          <br />
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
