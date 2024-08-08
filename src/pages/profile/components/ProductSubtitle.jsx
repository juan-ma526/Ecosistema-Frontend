// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ProductSubtitle = ({ state }) => {
  const getSubtitleText = (state) => {
    return state === "Aprobado"
      ? "Así se ve tu Producto/Servicio en el Directorio"
      : "Así se vería tu Producto/Servicio en el Directorio";
  };

  return (
    <Box sx={{ width: "382px", height: "50px", marginTop: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography sx={{ fontWeight: 400, fontSize: "20px", lineHeight: "25px", textAlign: "center" }}>
        {getSubtitleText(state)}
      </Typography>
    </Box>
  );
};

export default ProductSubtitle;
