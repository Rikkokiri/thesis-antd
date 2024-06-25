import { Button, ButtonProps } from "antd";
import "./ToggleButton.css";

interface IToggleButtonProps extends ButtonProps {
  isToggled: boolean;
  untoggledIcon?: JSX.Element;
  toggledIcon?: JSX.Element;
  toggledClassName?: string;
}

export const ToggleButton = ({
  children,
  isToggled,
  onClick,
  untoggledIcon,
  toggledIcon,
  type = "primary",
  toggledType = "default",
  size = "large",
  // iconSize,
  // className,
  // toggledClassName = "toggled",
  ...rest
}: IToggleButtonProps) => {
  return (
    <Button
      onClick={onClick}
      icon={isToggled ? toggledIcon : untoggledIcon}
      // className={`toggle-button ${isToggled ? toggledClassName : ""} ${className || ""}`}
      // variant={variant}
      type={isToggled ? toggledType : type}
      ghost={!isToggled}
      size={size}
      // iconSize={iconSize}
      {...rest}
    >
      {children}
    </Button>
  );
};
