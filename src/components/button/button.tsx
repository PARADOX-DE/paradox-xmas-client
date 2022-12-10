import React from "react";

import {
  Button as MuiButton,
  ButtonProps
} from "@mui/material";

interface IButtonProps extends ButtonProps { }

const Button: React.FC<IButtonProps> = ({
  variant,
  color,
  children,
  className,
  size,
  disabled,
  fullWidth,
  onClick,
}) => {
  return (
    <MuiButton 
      variant={variant}
      color={color}
      size={size} 
      className={className} 
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={
        {
          backgroundColor: "rgb(158, 54, 103)",
          boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.12)",
          border: "1px solid transparent",
          color: "white",
          textTransform: "none",
          fontSize: "16px",
          fontFamily: "SantanderMicroTextW05-Bold",
          ":hover": {
            backgroundColor: "rgba(115, 38, 69)",
            boxShadow: "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px"
          },
          ":active": {
            boxShadow: "rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px"
          }
        }
      }
    >
      {children}
    </MuiButton>
  );
};

export default Button;