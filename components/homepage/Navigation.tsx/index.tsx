import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobile";
import Button from "../../shared/Button";
import Search from "../../shared/Search";
import styles from "../../../styles/Home.module.css";
import logo from "../../../public/assets/images/homepage/logo.png";
import profile from "../../../public/assets/images/homepage/profile.png";

const Navigation: FC = () => {
  return (
    <>
      <MobileNav />
      <nav className={styles.nav}>
        <div className={styles.logo}>
          {/* <Image src={profile} alt="gro bat logo for mobile" /> */}
        </div>
        <div className={styles.wrap}>
          <div className={styles.navLeft}>
            <p className={styles.logoTitle}>
              Kura <span className={styles.logoStroke}>Games</span>
            </p>
          </div>
          <div className={styles.navRight}>
            {/* <Link href={"#"}>
              <a className={styles.links}>Home</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.links}>Dashboard</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.links}>NFT</a>
            </Link>
            <div className={styles.navRightContent}>
              <Search content="Search" />
              <Button variant="light">Explore</Button>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
