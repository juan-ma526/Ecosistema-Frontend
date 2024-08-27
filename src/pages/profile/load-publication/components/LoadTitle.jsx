/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography } from "@mui/material";

const EditTitle = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // Asegura que el Box ocupe todo el ancho disponible
        height: "30px",
        marginBottom: "30px"
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "25px",
          lineHeight: "30px",
          textAlign: "center"
        }}
      >
        Carga de Producto/Servicio
      </Typography>
    </Box>
  );
};

export default EditTitle;

