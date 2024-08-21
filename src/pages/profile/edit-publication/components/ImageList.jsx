/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, IconButton, Dialog, DialogActions, DialogContent, Button, Typography, Input } from "@mui/material";

export default function StandardImageList({ images = [], onEdit, onDelete, onImageListChange }) {
  const [imageList, setImageList] = React.useState(images);
  const [newImages, setNewImages] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState(null);
  const fileInputRef = React.useRef(null);
  const [hasChanges, setHasChanges] = useState(false);

  React.useEffect(() => {
    setImageList(images);
    if (hasChanges) {
      onImageListChange([...images, ...newImages]); // Llamada a la función pasada como prop
      setHasChanges(false);
    }
  }, [images, newImages, onImageListChange, hasChanges]);

  const handleEdit = (image) => {
    onEdit(image.id);
    setSelectedImage(image);
    setDialogType("edit");
    setDialogOpen(true);
    setHasChanges(true);
  };

  const handleDelete = (image) => {
    onDelete(image);
    setSelectedImage(image);
    setDialogType("delete");
    setDialogOpen(true);
    setHasChanges(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDialogOpen(false);
      if (selectedImage && selectedImage.file) {
        setNewImages((prevNewImages) =>
          prevNewImages.map((img) => (img.id === selectedImage.id ? { ...img, file } : img))
        );
      } else {
        setImageList((prevImages) => prevImages.map((img) => (img.id === selectedImage.id ? { ...img, file } : img)));
      }
    }
  };

  const confirmDelete = () => {
    setDialogOpen(false);
    if (selectedImage && selectedImage.file) {
      setNewImages((prevNewImages) => prevNewImages.filter((img) => img.id !== selectedImage.id));
    } else {
      setImageList((prevImages) => prevImages.filter((img) => img.id !== selectedImage.id));
    }
  };

  return (
    <>
      <ImageList
        gap={6}
        sx={{
          marginTop: "-15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "2px",
          marginRight: "2px",
        }}
        cols={3}
        rowHeight={90}
      >
        {[...imageList, ...newImages].map((item, index) => (
          <ImageListItem key={index} sx={{ position: "relative" }}>
            <img
              src={item.file ? URL.createObjectURL(item.file) : item.url}
              alt={item.title || "Imagen"}
              loading="lazy"
              style={{ borderRadius: "4px", width: "128px", height: "100px", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                width: "52px",
                height: "24px",
                top: 5,
                right: 9,
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}
              className="custom-icon"
            >
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#22222299",
                  color: "white",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "darkgrey",
                  },
                }}
                onClick={() => handleEdit(item)}
              >
                <EditOutlinedIcon sx={{ fontSize: "16px" }} />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  backgroundColor: "#22222299",
                  color: "white",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "darkgrey",
                  },
                }}
                onClick={() => handleDelete(item)}
              >
                <DeleteOutlinedIcon sx={{ fontSize: "16px" }} />
              </IconButton>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} aria-describedby="alert-dialog-description">
        <DialogContent>
          <Typography variant="h6">{dialogType === "edit" ? "Editar Imagen" : "Eliminar Imagen"}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {dialogType === "edit"
              ? "Selecciona una nueva imagen para reemplazar la actual."
              : "¿Estás seguro de que deseas eliminar esta imagen?"}
          </Typography>
          {dialogType === "edit" && (
            <Input type="file" inputRef={fileInputRef} onChange={handleFileChange} sx={{ display: "none" }} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} sx={{ color: "#4E169D", fontWeight: 600, fontSize: "14px" }}>
            Cancelar
          </Button>
          <Button
            onClick={dialogType === "edit" ? () => fileInputRef.current.click() : confirmDelete}
            sx={{ color: "#4E169D", fontWeight: 600, fontSize: "14px" }}
          >
            {dialogType === "edit" ? "Seleccionar Imagen" : "Eliminar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
