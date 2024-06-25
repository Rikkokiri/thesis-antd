import { Button, ButtonProps } from "antd";
import "./ToggleButton.css";

interface IToggleButtonProps extends ButtonProps {
  isToggled: boolean;
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
  toggleStyle?: "bg" | "hoverless" | "stateless";
  toggledClassName?: string;
}

export const ToggleButton = ({
  children,
  isToggled,
  onClick,
  untoggledIcon,
  toggledIcon,
  type = "default",
  size = "large",
  className,
  toggleStyle = "bg",
  toggledClassName,
  ...rest
}: IToggleButtonProps) => {
  return (
    <Button
      onClick={onClick}
      icon={isToggled ? toggledIcon : untoggledIcon}
      className={`toggle-button ${toggleStyle} ${isToggled && `${toggledClassName} toggled`} ${className || ""}`}
      size={size}
      type={type}
      {...rest}
    >
      {children}
    </Button>
  );
};
