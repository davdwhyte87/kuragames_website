import { FC } from "react";
import styles from "../../../styles/Home.module.css";

const Tokenomics: FC = () => {
  return (
    <div className={styles.tokenomicsWrapper}>
      <h1 className="sectionHeader" style={{ margin: 0 }}>
        Weekly Leaderboard Reward
      </h1>
      <p className={styles.tokenomicsSubheader}>Over 20 million to be won weekly</p>

      <div>
        <p className={styles.tokenomicsText}>
         Every week, we pick the top 10 players with the highest scores and reward them. 
         There is millions of naira up for grabs to be won every week.  
          
          <br /> All you have to do is play and top the charts. Be the rockstar that 
          you already are. 
       
        </p>
      </div>
      {/* <div className={styles.percent}>
        <div className={styles.percentWrap}>
          <div className={styles.round}>
            <p className={styles.roundText}>2%</p>
          </div>
          <p className={styles.percentText}>Liquidity</p>
        </div>
        <div className={styles.percentWrap}>
          <div className={styles.round}>
            <p className={styles.roundText}>3%</p>
          </div>
          <p className={styles.percentText}>Rewards</p>
        </div>
        <div className={styles.percentWrap}>
          <div className={styles.round}>
            <p className={styles.roundText}>5%</p>
          </div>
          <p className={styles.percentText}>Marketing / Development</p>
        </div>
      </div> */}
    </div>
  );
};

export default Tokenomics;
