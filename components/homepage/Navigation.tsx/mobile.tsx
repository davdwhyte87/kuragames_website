import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import Drawer from "../../shared/Drawer";
import Button from "../../shared/Button";
import Search from "../../shared/Search";
import styles from "../../../styles/Home.module.css";
import logo from "../../../public/assets/images/homepage/logo.png";
import menu from "../../../public/assets/images/homepage/menu.svg";

const MobileNav: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const show = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={styles.mobNav}>
        <div className={styles.mobIcon}>
          <Image
            src={logo}
            alt="gro bat logo"
            width={80}
            height={80}
            objectFit="contain"
          />
          <div className={styles.mobSearch}>
            <Search content="Search" width="100%" />
          </div>
        </div>
        <div className={styles.menu} onClick={show}>
          <Image
            src={menu}
            alt="menu toggle icon"
            width={40}
            height={40}
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.mobHide}>
        <Drawer open={open}>
          <div className={styles.linksWrap}>
            <Link href={"/"}>
              <a className={styles.mobLinks}>Home</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.mobLinks}>Dashboard</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.mobLinks}>NFT</a>
            </Link>
            <Button variant="light" width="70%">
              Explore
            </Button>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MobileNav;
