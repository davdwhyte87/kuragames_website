import { FC } from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import tw from "../../../public/assets/images/homepage/tw.png";
import li from "../../../public/assets/images/homepage/li.png";
import ig from "../../../public/assets/images/homepage/ig.png";
import logo from "../../../public/assets/images/homepage/logo.png";
import meta from "../../../public/assets/images/homepage/meta.png";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className={styles.footerWrap}>
      <div>
        <Image src={logo} alt="gro bat logo" />
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerMain}>
          <div className={styles.footer_1}>
            <p className={styles.footerTitle}>
              Gro <span className={styles.logoStroke}>Bat</span>
            </p>
            <p className={styles.footerText}>
              Dignissimos eveniet quas rem. Qui
              <br /> reprehenderit ratione quibusdam. <br /> Aliquam numquam
              enim est ipsum ipsum <br /> neque. Reprehenderit rem <br /> animi.
            </p>
            <div className={styles.footerImg}>
              <Link href={"#"}>
                <a>
                  <Image src={meta} alt="meta logo" />
                </a>
              </Link>
              <Link href={"#"}>
                <a>
                  <Image src={ig} alt="instagram logo" />
                </a>
              </Link>
              <Link href={"#"}>
                <a>
                  <Image src={li} alt="linkedin logo" />
                </a>
              </Link>
              <Link href={"#"}>
                <a>
                  <Image src={tw} alt="twitter logo" />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.footer_2}>
            <Link href={"#"}>
              <a className={styles.footerText}>Explore</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Art</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Photography</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Music</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Games</a>
            </Link>
          </div>
          <div className={styles.footer_3}>
            <Link href={"#"}>
              <a className={styles.footerText}>My account</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>My profile</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>My collection</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>My favourite</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>My account settings</a>
            </Link>
          </div>
          <div className={styles.footer_3}>
            <Link href={"#"}>
              <a className={styles.footerText}>Resources</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Help centre</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Partners</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Suggestions</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Newsletter</a>
            </Link>
          </div>
          <div className={styles.footer_4}>
            <Link href={"#"}>
              <a className={styles.footerText}>Company</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>About</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Careers</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>Rankings</a>
            </Link>
            <Link href={"#"}>
              <a className={styles.quickLinks}>activity</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
