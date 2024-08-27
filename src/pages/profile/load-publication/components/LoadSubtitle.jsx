// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const EditSubtitle = () => {
  const subtitle = "Completá el formulario para\nsubir tu Producto/Servicio";
  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontWeight: 500, fontSize: "20px", lineHeight: "25px", textAlign: "center", whiteSpace: "pre-line" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default EditSubtitle;
