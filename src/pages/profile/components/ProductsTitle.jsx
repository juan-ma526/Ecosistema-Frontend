// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

const ProductsTitle = () => {
  return (
    <Box sx={{width: "328px", height: "25px", marginLeft: "30px", marginBottom: "30px"}}>
      <Typography sx={{ fontWeight: 500, fontSize: "22px", lineHeight: "25px", textAlign: "center" }}>
        Mis Productos/Servicios
      </Typography>
    </Box>
  );
};

export default ProductsTitle;
