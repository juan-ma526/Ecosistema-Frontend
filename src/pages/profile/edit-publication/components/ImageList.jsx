/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, IconButton, Dialog, DialogActions, DialogContent, Button, Typography, Input } from "@mui/material";

export default function StandardImageList({ images = [], onImageListChange, getImagePendingChanges }) {
  const [imageList, setImageList] = useState(images);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const fileInputRef = React.useRef(null);
  let selectedId = React.useRef(null);

  React.useEffect(() => {
    setImageList(images);
  }, [images]);

  React.useEffect(() => {
    return () => {
      // Limpia los URLs creados para evitar pérdidas de memoria
      imageList.forEach(item => {
        if (item.file) {
          URL.revokeObjectURL(item.url);
        }
      });
    };
  }, [imageList]);

  /*   React.useEffect(() => {
    selectedId.current = null;
  }, [imageList]); */

  const handleEdit = (imageId) => {
    selectedId.current = imageId;
    setDialogType("edit");
    setDialogOpen(true);
  };

  const handleDelete = (imageId) => {
    selectedId.current = imageId;
    setDialogType("delete");
    setDialogOpen(true);
  };

  const confirmEdit = (event) => {
    const fileData = event.target.files[0];
    if (fileData && selectedId.current !== null) {
      setDialogOpen(false);
      const formData = new FormData();
      formData.append('file', fileData);
      const pendingChanges = [...getImagePendingChanges(), { data: formData, type: "edit", id: selectedId.current }]; // TEMPORAL
      onImageListChange(pendingChanges);
      setImageList((prevList) =>
        prevList.map((image) =>
          image.id === selectedId.current ? { ...image, file: fileData, url: URL.createObjectURL(fileData) } : image
        )
      );
    }
  };

  const confirmDelete = () => {
    setDialogOpen(false);
    if (selectedId.current !== null) {
      const pendingChanges = [...getImagePendingChanges(), { data: null, type: "delete", id: selectedId.current }]; // TEMPORAL
      onImageListChange(pendingChanges);
      setImageList(imageList.filter((image) => image.id !== selectedId.current));
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
        {imageList.map((item, index) => (
          <ImageListItem key={index} sx={{ position: "relative" }}>
            <img
              src={item.file ? URL.createObjectURL(item.file) : item.url}
              alt={item.nombre || "Imagen"}
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
                onClick={() => handleEdit(item.id)}
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
                onClick={() => handleDelete(item.id)}
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
            <Input type="file" inputRef={fileInputRef} onChange={confirmEdit} sx={{ display: "none" }} />
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
