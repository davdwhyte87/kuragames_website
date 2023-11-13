import { FC } from "react";
import Head from "next/head";

interface IHead {
  title: string;
  meta?: JSX.Element[];
  icon?: string;
}

const Header: FC<IHead> = ({ title, meta, icon }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Header;
