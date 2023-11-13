import { FC } from "react";
import styles from "../../../styles/Home.module.css";

const TopWinners: FC = () => {
    return (
        <div className={styles.stakingWrapper}>
            <h1 className="sectionHeader" style={{ margin: 0 }}>
            Top Winners
            </h1>
            <p className={styles.tokenomicsSubheader}>Top Winners For The Week</p>
            <br className="breakHide" /> And Rewarding
            <br/>
        </div>
    )
}

export default TopWinners;