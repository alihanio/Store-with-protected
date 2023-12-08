import { ButtonBase } from "@mui/material";
import React from "react";

const Button = ({ onClick, children, ...props }) => {
  return (
    <ButtonBase onClick={onClick} {...props}>
      {children}
    </ButtonBase>
  );
};

export default Button;
