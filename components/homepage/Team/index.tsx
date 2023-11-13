import { FC } from "react";
import Card from "../../shared/Card";
import styles from "../../../styles/Home.module.css";
import char_1 from "../../../public/assets/images/homepage/char-1.png";
import char_2 from "../../../public/assets/images/homepage/char-2.png";
import char_3 from "../../../public/assets/images/homepage/char-3.png";
import char_4 from "../../../public/assets/images/homepage/char-4.png";

const paths = [
  {
    source: char_1,
    name: "Leonard oyd AKA Leoxgroza",
  },
  {
    source: char_2,
    name: "Jonathan Harrocks, AKA CryptoBatmanBSC",
  },
  {
    source: char_3,
    name: "Explicit",
  },
  { source: char_4, name: "DOJ" },
];

const Team: FC = () => {
  return (
    <div className={styles.teamWrapper}>
      <h1 className="sectionHeader">Our Team</h1>
      <div style={{ width: "100%" }}>
        <div className={styles.grid}>
          {paths &&
            paths.map((content, i) => (
              <Card key={i} img={content.source} text={content.name} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
