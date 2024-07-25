// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import "../load.css";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "#4E169D",
  "&:hover": {
    backgroundColor: "#4E169D",
  },
  width: "152px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100px",
  textTransform: "none",
  gap: "8px",
}));

const descriptionImage = "*Requerida al menos una\n imagen\n Hasta 3 imágenes.\n Máximo 3Mb cada una";

// eslint-disable-next-line react/prop-types
const ButtonImage = ({ sx, state, ...props }) => {
  const fileInputRef = React.useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.size <= 3 * 1024 * 1024); // 3MB en bytes

    if (validFiles.length > 3) {
      validFiles.splice(3); // Limitar a 3 imágenes
    }

    setImages(validFiles);
    if (validFiles.length < files.length) {
      alert('Algunas imágenes no fueron cargadas porque exceden el límite de tamaño o cantidad.');
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "24px" }}>
      <ColorButton
        variant="contained"
        {...props}
        sx={{ ...sx }}
        onClick={() => fileInputRef.current.click()}
        state={state}
      >
        <Box sx={{ width: "24px", height: "24px", marginTop: "2px" }}>
          <FileUploadOutlinedIcon className="load-icon" fontSize="small" />
        </Box>
        <Box sx={{ width: "86px", height: "20px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "14px", lineHeight: "20px", textAlign: "center" }}>
            Subir imagen
          </Typography>
        </Box>
      </ColorButton>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <Typography
        sx={{
          whiteSpace: "pre-line",
          textAlign: "left",
          marginTop: "8px",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
          marginRight: "16px",
        }}
      >
        {descriptionImage}
      </Typography>
    </Box>
  );
};

export default ButtonImage;