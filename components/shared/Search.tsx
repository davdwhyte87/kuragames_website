import Image from "next/image";
import { FC, InputHTMLAttributes } from "react";
import styles from "../../styles/Shared.module.css";
import icon from "../../public/assets/images/homepage/search.png";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  content: string;
  width?: string;
};

const Search: FC<Props> = ({
  content,
  width = "120px",
  type = "text",
  ...rest
}) => {
  return (
    <div className={styles.search}>
      <Image src={icon} alt="magnifying glass" />
      <input
        className={styles.searchInput}
        style={{ width: width }}
        {...rest}
        type={type}
        placeholder={content}
      />
    </div>
  );
};

export default Search;
