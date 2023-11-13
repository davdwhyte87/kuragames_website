import { FC } from "react";
import HomeLayout from "../wrapper";
import Navigation from "../../components/homepage/Navigation.tsx";

interface IProps {
  children: JSX.Element;
}

const AppLayout: FC<IProps> = ({ children }) => {
  return (
    <HomeLayout>
      <div className="container">
        <Navigation />
        <>{children}</>
      </div>
    </HomeLayout>
  );
};

export default AppLayout;
