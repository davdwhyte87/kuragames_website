import { FC } from "react";

interface ILayout {
  children: JSX.Element;
}

const HomeLayout: FC<ILayout> = ({ children }) => {
  return <div className="bg">{children}</div>;
};

export default HomeLayout;
