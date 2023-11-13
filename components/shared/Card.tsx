import { FC } from "react";
import Button from "./Button";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/Shared.module.css";

type CardProps = {
  img: StaticImageData;
  text: string;
  action?: () => void;
};

const Card: FC<CardProps> = ({ img, text, action }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <Image
          src={img}
          alt="card arts"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={styles.cardText}>{text}</div>
      <Button variant="darkBlue" onClick={action && action}>
        Know more
      </Button>
    </div>
  );
};

export default Card;
