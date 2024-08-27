// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Button, Typography, Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CloseIcon from "@mui/icons-material/Close";
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
const ButtonImage = ({ sx, state, onImagesChange, ...props }) => {
  const fileInputRef = React.useRef(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (onImagesChange) {
      onImagesChange(images);
    }
  }, [images, onImagesChange]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.size <= 3 * 1024 * 1024);

    const newImages = [...images, ...validFiles].slice(0, 3);
    setImages(newImages);
    if (validFiles.length < files.length) {
      alert('Algunas imágenes no fueron cargadas porque exceden el límite de tamaño o cantidad.');
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "24px" }}>
      {images.length < 3 && (
        <>
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
        </>
      )}
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
            textAlign: "left",
            width: "70%",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "16px",
              flexGrow: 1,
              marginRight: "8px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {image.name}
          </Typography>
          <IconButton size="small" onClick={() => handleRemoveImage(index)} sx={{ marginRight: "2px"}}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default ButtonImage;