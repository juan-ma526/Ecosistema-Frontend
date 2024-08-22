/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import { axiosClient } from "../../../libs/network/axiosClient";
import { UserContext } from "../../../context/userContext";
import SuccessAlert from "../../../modals/SuccessAlert";
import ErrorAlert from "../../../modals/ErrorAlert";
import { Result } from "./components/Result";
import "./createPublication.css";
import { ManageImagen } from "../components/ManageImagen";

export default function CreatePublication() {
  const { user, token } = useContext(UserContext);
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
  });
  const [imagen, setImagen] = useState([]);
  const [status, setStatus] = useState("initial");
  const [showAlert, setShowAlert] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);

  const isFormComplete = () => {
    return formData.titulo && formData.descripcion && imagen && imagen.length > 0;
  };

  useEffect(() => {
    setIsButtonDisabled(!isFormComplete());
  }, [formData, imagen]);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpload = async () => {
    if (imagen) {
      setStatus("uploading");
      const postData = new FormData();

      [...imagen].forEach((imagen) => {
        postData.append("imagen", imagen);
      });
      postData.append("titulo", formData.titulo);
      postData.append("descripcion", formData.descripcion);

      try {
        await axiosClient.post(`/publicar/${user.usuarioId}`, postData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        setStatus("success");
        setShowAlert(true);
      } catch (error) {
        console.error(error);
        setStatus("fail");
        setShowAlert(true);
      }
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setStatus("initial");
  };

  const deleteImage = (image) => {
    const filterImage = [...imagen].filter((file) => file.name != image.name);
    setImagen(filterImage);
  };

  const editImage = (index) => {
    setEditingIndex(index);
  };

  return (
    /* Container gral */
    <>
      <Box className="create-publication-container-gral" sx={{ bgcolor: "customColors.blanco" }}>
        <Typography variant="h2" className="create-title" sx={{ color: "customColors.negro" }}>
          Carga de publicación
        </Typography>
        <Typography className="create-subtitle" variant="h2" sx={{ color: "customColors.negro" }}>
          Completá los datos para crear una nueva publicación
        </Typography>

        {/* First Input container gral*/}

        <Box className="input-container-gral" sx={{ borderColor: "customColors.negro" }}>
          {/* Input container */}
          <Box className="input-container">
            {/* input box */}
            <Box sx={{ width: "312px", height: "40px" }}>
              <input
                name="titulo"
                onChange={handleInputChange}
                value={formData.titulo}
                type="text"
                placeholder="Titulo*"
              />
            </Box>
          </Box>
          <Typography variant="body1" sx={{ fontSize: "13px", fontWeight: 400 }}>
            Se visualizará en el título de la publicación
          </Typography>
        </Box>

        {/* text area container */}

        <Box className="textarea-container" sx={{ borderColor: "customColors.negro" }}>
          {/* textarea Box */}
          <Box className="textarea-box">
            <Box sx={{ width: "312px", height: "100%" }}>
              <textarea
                onChange={handleInputChange}
                value={formData.descripcion}
                placeholder="Ingrese el contenido de la publicación*"
                name="descripcion"
                rows={20} // Initial number of visible lines
              />
            </Box>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ fontSize: "13px", fontWeight: 400, alignSelf: "start", marginLeft: "30px" }}>
          {formData.descripcion.length} / 2000 caracteres: Máximo 2.000 caracteres
        </Typography>

        {/* Button upload */}
        <Box className="button-upload" sx={{ backgroundColor: "customColors.violeta" }}>
          <UploadIcon />
          <label htmlFor="file">Subir Imagen</label>
          <input id="file" multiple onChange={handleImageChange} type="file" />
        </Box>
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

        <Result status={status} />

        {/* button charge */}

        <Button
          className="button-submit"
          onClick={handleUpload}
          variant="contained"
          disabled={isButtonDisabled}
          sx={{
            backgroundColor: isButtonDisabled ? "customColors.grisClaro" : "customColors.violeta",
            ":active": { backgroundColor: isButtonDisabled ? "customColors.grisClaro" : "#6E20DB" },
            ":hover": { backgroundColor: isButtonDisabled ? "customColors.grisClaro" : "#6E20DB" },
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Crear publicación</Typography>
        </Button>
      </Box>
      {showAlert && status === "fail" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="fail" />}
      {showAlert && status === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="success" />}
    </>
  );
}
