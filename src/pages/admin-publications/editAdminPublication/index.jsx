import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ManageImagen } from "../components/ManageImagen";
import "./editAdminPublication.css";

export default function EditAdminPublication() {
  const location = useLocation();
  const item = location.state?.item;
  const [title, setTitle] = useState(item.title);
  const [descripcion, setDescripcion] = useState(item.descripcion);
  const [imagen, setImagen] = useState(item.images || []);
  const [editingIndex, setEditingIndex] = useState(null);

  if (!item) {
    return <div>No se encontro la publicacion para editar</div>;
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const updatedImages = [...imagen];

      if (editingIndex !== null) {
        updatedImages[editingIndex] = event.target.files[0];
      } else {
        updatedImages.push(...event.target.files);
      }

      setImagen(updatedImages);
      setEditingIndex(null);
    }
  };

  const deleteImage = (image) => {
    const filterImage = [...imagen].filter((file) => file != image);
    setImagen(filterImage);
  };

  const editImage = (index) => {
    setEditingIndex(index);
  };

  return (
    /* Container gral */

    <Box className="container-edit-publication-gral" sx={{ bgcolor: "customColors.blanco" }}>
      <Typography className="edit-publication-title" variant="h2" sx={{ color: "customColors.negro" }}>
        Edición de publicación
      </Typography>
      <Typography className="edit-publication-subtitle" variant="h2" sx={{ color: "customColors.negro" }}>
        Modificá los datos de la publicación
      </Typography>

      {/* Container input */}

      <Box className="container-edit-publication-input" sx={{ borderColor: "customColors.negro" }}>
        {/* Box input */}

        <Box className="box-edit-publication-input">
          <Box sx={{ width: "312px", height: "40px" }}>
            <label
              style={{ backgroundColor: "#FAFAFA", color: "#4E169D", position: "absolute", top: "-14px" }}
              htmlFor="label-titulo"
            >
              Titulo*
            </label>
            <input id="label-titulo" onChange={handleChangeTitle} value={title} type="text" />
          </Box>
        </Box>
      </Box>

      {/* text area container*/}

      <Box className="textarea-edit-publication-container " sx={{ borderColor: "customColors.negro" }}>
        {/* textarea box */}

        <Box className="textarea-edit-publication-box">
          <Box sx={{ width: "312px", height: "100%" }}>
            <label
              style={{ backgroundColor: "#FAFAFA", color: "#4E169D", position: "absolute", top: "-14px" }}
              htmlFor="label-textarea"
            >
              Contenido de la publicación*
            </label>
            <textarea
              onChange={handleChangeDescripcion}
              id="label-textarea"
              value={descripcion}
              name="textarea"
              rows={40}
            />
          </Box>
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{ fontSize: "13px", fontWeight: 400, alignSelf: "start", margin: "0px 0px 20px 30px" }}
      >
        Máximo 2.000 caracteres
      </Typography>
      {imagen &&
        [...imagen].map((imagen, index) => (
          <ManageImagen
            editImage={editImage}
            handleImageChange={handleImageChange}
            deleteImage={deleteImage}
            imagen={imagen}
            index={index}
            key={index}
          />
        ))}

      {/* Save buttom */}

      <Button
        className="edit-publication-save-button"
        variant="contained"
        sx={{ backgroundColor: "customColors.violeta" }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Guardar Cambios</Typography>
      </Button>
    </Box>
  );
}
