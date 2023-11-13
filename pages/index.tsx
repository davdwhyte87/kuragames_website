import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Hero from "../components/homepage/Hero";
import Team from "../components/homepage/Team";
import WhyGro from "../components/homepage/why";
import Header from "../components/shared/Header";
import Staking from "../components/homepage/Stake";
import RoadMap from "../components/homepage/Roadmap";
import Tokenomics from "../components/homepage/Tokenomics";
import Accomplishments from "../components/homepage/Accomplishments";
import Footer from "../components/homepage/Footer";
import SpeedQuest from "../components/homepage/why/speedquest";
import TopWinners from "../components/homepage/TopWinners";

const Home: NextPage = () => {
  return (
    <>
      <Header title={"Kuragames"} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero />
          <WhyGro />
         
          <Staking />
          <Tokenomics />
          <SpeedQuest/>
        
          <RoadMap />
          <Accomplishments />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
