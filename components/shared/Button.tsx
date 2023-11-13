import styles from "../../styles/Shared.module.css";
import { FC, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  font?: string;
  width?: string;
  icon?: JSX.Element;
  variant?: "default" | "dark" | "outline" | "light" | "darkBlue";
};

const variants = {
  dark: styles.btnDark,
  light: styles.btnLight,
  default: styles.btnDefault,
  outline: styles.btnOutline,
  darkBlue: styles.btnDarkBlue,
};

const Button: FC<Props> = ({
  width = "170px",
  font,
  icon,
  type,
  variant,
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      className={`${styles.btn} ${variant && variants[variant]} ${className}`}
      style={{ width: width, fontSize: "18px" }}
    >
      {children}
    </button>
  );
};

export default Button;
