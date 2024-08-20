/* eslint-disable react/prop-types */
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, IconButton, Dialog, DialogActions, DialogContent, Button, Typography, Input, CircularProgress, Backdrop } from "@mui/material";
import axios from "axios";

export default function StandardImageList({ images = [], setImages, token }) {
  const [imageList, setImageList] = React.useState(images);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState(null);
  const [loading, setLoading] = React.useState(false); // Estado para controlar la carga
  const fileInputRef = React.useRef(null);

  React.useEffect(() => {
    setImageList(images);
  }, [images]);

  const handleEdit = (image) => {
    setSelectedImage(image);
    setDialogType("edit");
    setDialogOpen(true);
  };

  const handleDelete = (image) => {
    setSelectedImage(image);
    setDialogType("delete");
    setDialogOpen(true);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        setDialogOpen(false); // Cerrar el diálogo de edición/eliminación
        setLoading(true); // Mostrar indicador de carga

        const imagenId = selectedImage.id;
        const response = await axios.put(`http://localhost:8080/actualizar/${imagenId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        const updatedImage = {
          ...selectedImage,
          url: response.data.url,
        };

        setImageList((prevImages) => prevImages.map((img) => (img.id === selectedImage.id ? updatedImage : img)));
        setImages((prevImages) => prevImages.map((img) => (img.id === selectedImage.id ? updatedImage : img)));
      } catch (error) {
        console.error("Error al actualizar la imagen:", error);
      } finally {
        setLoading(false); // Ocultar indicador de carga
      }
    }
  };

  const confirmDelete = async () => {
    try {
      setDialogOpen(false); // Cerrar el diálogo de edición/eliminación
      setLoading(true); // Mostrar indicador de carga

      await axios.delete(`http://localhost:8080/eliminarImagen/${selectedImage.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      setImageList((prevImages) => prevImages.filter((img) => img.id !== selectedImage.id));
      setImages((prevImages) => prevImages.filter((img) => img.id !== selectedImage.id));
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
    } finally {
      setLoading(false); // Ocultar indicador de carga
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
        {imageList.map((item) => (
          <ImageListItem key={item.id} sx={{ position: "relative" }}>
            <img
              src={item.url}
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

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
