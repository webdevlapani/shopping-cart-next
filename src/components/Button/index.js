import { Button as MuiButton } from "@mui/material";

const Button = ({ children, ...rest }) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
