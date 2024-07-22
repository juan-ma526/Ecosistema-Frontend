// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#4E169D",
  "&:hover": {
    backgroundColor: "#4E169D",
  },
  width: "328px",
  height: "40px",
  left: "32px",
  borderRadius: "100px",
  textTransform: 'none',
}));

// eslint-disable-next-line react/prop-types
const ButtonCharge = ({ sx, ...props }) => {
  return (
    <ColorButton variant="contained" {...props} sx={{...sx}}>
      <Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "30px", textAlign: "center"}}>
        Cargar Producto/Servicio
      </Typography>
    </ColorButton>
  );
};

export default ButtonCharge;
