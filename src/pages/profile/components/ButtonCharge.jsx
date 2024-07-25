// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";


const ColorButton = styled(Button)(({ state }) => ({
  backgroundColor: state === "success" ? "#4E169D" : "#505050",
  "&:hover": {
    backgroundColor: state === "success" ? "#4E169D" : "#505050",
  },
  width: "328px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100px",
  textTransform: "none",
}));

// eslint-disable-next-line react/prop-types
const ButtonCharge = ({ sx, onClick, state, alwaysPurple, ...props }) => {
 
  alwaysPurple = "#4E169D"

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ColorButton variant="contained" {...props} sx={{ ...sx, backgroundColor: alwaysPurple, "&:hover": {
      backgroundColor: alwaysPurple // Cambia esto al color deseado para el hover
    }  }} onClick={onClick} state={state}>
        <Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "30px", textAlign: "center" }}>
          Cargar Producto/Servicio
        </Typography>
      </ColorButton>
    </Box>
  );
};

export default ButtonCharge;