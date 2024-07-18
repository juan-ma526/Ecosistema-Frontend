// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

const ProductSubtitle = () => {
  return (
    <Box sx={{ width: "328px", height: "50px", marginLeft: "30px", marginTop: "40px" }}>
      <Typography sx={{ fontWeight: 400, fontSize: "20px", lineHeight: "25px", textAlign: "center" }}>
        Asi se vería tu Producto/Servicio en el Directorio
      </Typography>
    </Box>
  );
};

export default ProductSubtitle;
