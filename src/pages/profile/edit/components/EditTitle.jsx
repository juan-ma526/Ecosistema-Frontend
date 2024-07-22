// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

const EditTitle = () => {
  return (
    <Box sx={{width: "328px", height: "30px", marginLeft: "30px", marginBottom: "30px"}}>
      <Typography sx={{ fontWeight: 600, fontSize: "25px", lineHeight: "30px", textAlign: "center" }}>
        Edición de Producto/Servicio
      </Typography>
    </Box>
  );
};

export default EditTitle;