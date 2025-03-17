

import React from "react";


const Button = ({ variant = "contained", color = "primary",  disabled = true, onClick, children }) => {
  return (
    <Button variant={variant} color={color} size={size} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Button;

