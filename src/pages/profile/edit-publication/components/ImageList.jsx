import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, IconButton, Dialog, DialogActions, DialogContent, Button, Typography, Input } from "@mui/material";
import Lavanda1 from "../../../providers/images/lavanda1.png";
import Lavanda2 from "../../../providers/images/lavanda2.png";
import Lavanda3 from "../../../providers/images/lavanda3.png";

export default function StandardImageList() {
  const [images, setImages] = React.useState(itemData);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState(null);
  const fileInputRef = React.useRef(null);

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImages((prevImages) =>
        prevImages.map((img) => (img.img === selectedImage.img ? { ...img, img: newImageUrl } : img))
      );
    }
    setDialogOpen(false);
  };

  const confirmDelete = () => {
    setImages((prevImages) => prevImages.filter((img) => img.img !== selectedImage.img));
    setDialogOpen(false);
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
          marginRight: "2px"
        }}
        cols={3}
        rowHeight={90}
      >
        {images.map((item) => (
          <ImageListItem key={item.img} sx={{ position: "relative" }}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
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
                gap: 1, // Ajusta el espacio entre los botones
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
                onClick={() => handleEdit(item)} // Usa handleEdit
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

      {/* MODALS PARA BORRAR O EDITAR IMAGENES */}
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
          <Button onClick={dialogType === "edit" ? () => fileInputRef.current.click() : confirmDelete} sx={{ color: "#4E169D", fontWeight: 600, fontSize: "14px"}}>
            {dialogType === "edit" ? "Seleccionar Imagen" : "Eliminar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const itemData = [
  {
    img: Lavanda1,
    title: "Breakfast",
  },
  {
    img: Lavanda2,
    title: "Burger",
  },
  {
    img: Lavanda3,
    title: "Camera",
  },
];
