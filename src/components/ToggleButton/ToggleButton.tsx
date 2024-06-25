import { Button, ButtonProps } from "antd";
import "./ToggleButton.css";

interface IToggleButtonProps extends ButtonProps {
  isToggled: boolean;
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
  toggledClassName?: "toggled" | "toggled-ghost";
  toggledType?: ButtonProps["type"];
}

export const ToggleButton = ({
  children,
  isToggled,
  onClick,
  untoggledIcon,
  toggledIcon,
  type = "default",
  toggledType = "default",
  size = "large",
  className,
  toggledClassName = "toggled",
  ...rest
}: IToggleButtonProps) => {
  return (
    <Button
      onClick={onClick}
      icon={isToggled ? toggledIcon : untoggledIcon}
      className={`toggle-button ${isToggled ? toggledClassName : ""} ${className || ""}`}
      type={isToggled ? toggledType : type}
      size={size}
      {...rest}
    >
      {children}
    </Button>
  );
};
