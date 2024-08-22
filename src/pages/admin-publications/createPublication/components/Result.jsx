/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

export const Result = ({ status }) => {
  if (status === "uploading") {
    return (
      <Box>
        <Typography>⏳ Creando Publicación...</Typography>
      </Box>
    );
  } else if (status === "delete") {
    return (
      <Box>
        <Typography>⏳ Borrando Publicación...</Typography>
      </Box>
    );
  } else if (status === "uploadingImg") {
    return (
      <Box>
        <Typography>⏳ Editando Imagen...</Typography>
      </Box>
    );
  }
};
