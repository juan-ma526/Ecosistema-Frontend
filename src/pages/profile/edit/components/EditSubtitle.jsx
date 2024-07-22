// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const EditSubtitle = () => {
  return (
    <Box sx={{ width: "328px", height: "50px", marginLeft: "30px", marginTop: "40px" }}>
      <Typography sx={{ fontWeight: 500, fontSize: "20px", lineHeight: "25px", textAlign: "center" }}>
      Editá el formulario de carga de tu Producto/Servicio
      </Typography>
    </Box>
  );
};

export default EditSubtitle;