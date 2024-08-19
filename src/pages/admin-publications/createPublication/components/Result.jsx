/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

export const Result = ({ status }) => {
  if (status === "uploading") {
    return (
      <Box>
        <Typography>⏳ Creando Publicación...</Typography>
      </Box>
    );
  }
};
