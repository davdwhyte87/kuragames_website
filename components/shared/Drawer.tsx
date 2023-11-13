import { FC } from "react";
import styles from "../../styles/Shared.module.css";

interface IDrawer {
  open: boolean;
  close?: boolean;
  children: JSX.Element;
}

const Drawer: FC<IDrawer> = ({ children, open, close }) => {
  return (
    <div
      className={`${styles.drawerWrapper} ${open ? styles.open : styles.close}`}
    >
      <div className={styles.drawerContainer}>{children}</div>
    </div>
  );
};

export default Drawer;
