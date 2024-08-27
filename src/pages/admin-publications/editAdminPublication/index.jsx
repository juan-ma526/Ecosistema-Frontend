import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ManageImagen } from "../components/ManageImagen";
import "./editAdminPublication.css";
import { axiosClient } from "../../../libs/network/axiosClient";
import { UserContext } from "../../../context/userContext";
import { Result } from "../createPublication/components/Result";
import ErrorAlert from "../../../modals/ErrorAlert";
import SuccessAlert from "../../../modals/SuccessAlert";

export default function EditAdminPublication() {
  const { token } = useContext(UserContext);
  const location = useLocation();
  const item = location.state?.item;
  const [title, setTitle] = useState(item.title);
  const [descripcion, setDescripcion] = useState(item.descripcion);
  const [imagen, setImagen] = useState(item.images || []);
  const [editingIndex, setEditingIndex] = useState(null);
  const [status, setStatus] = useState("initial");
  const [showAlert, setShowAlert] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [length, setLength] = useState(imagen.length);
  const isFormComplete = () => {
    return title && descripcion;
  };

  useEffect(() => {
    setIsButtonDisabled(!isFormComplete());
  }, [title, descripcion, imagen]);

  if (!item) {
    return <div>No se encontro la publicacion para editar</div>;
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    setStatus("initial");
  };

  const handleImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const updatedImages = [...imagen];

      if (editingIndex !== null) {
        setStatus("uploadingImg");
        const file = event.target.files[0];

        const imageToUpdate = updatedImages[editingIndex];

        const formData = new FormData();
        formData.append("file", file);

        try {
          await axiosClient.put(`/actualizarImagen/${imageToUpdate.id}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });

          updatedImages[editingIndex] = { ...imageToUpdate, url: URL.createObjectURL(file) };
          setImagen(updatedImages);
          setEditingIndex(null);
          setStatus("initial");
        } catch (error) {
          console.error("Error al actualizar la imagen:", error);
        }
      }
    }
  };

  const deleteImage = async (image) => {
    setStatus("delete");
    const filterImage = [...imagen].filter((file) => file != image);
    await axiosClient.delete(`/eliminar/${image.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    setStatus("initial");
    setImagen(filterImage);
    setLength(filterImage.length);
  };

  const editImage = async (index) => {
    setEditingIndex(index);
  };

  const handleUpload = async () => {
    if (title && descripcion) {
      setStatus("uploading");
      const postData = new FormData();

      postData.append("titulo", title);
      postData.append("descripcion", descripcion);

      try {
        await axiosClient.put(`/editar-publicacion/publicacion/${item.id}`, postData, {
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

  return (
    /* Container gral */
    <>
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
              length={length}
              editImage={editImage}
              handleImageChange={handleImageChange}
              deleteImage={deleteImage}
              imagen={imagen}
              index={index}
              key={index}
            />
          ))}

        <Result status={status} />
        {/* Save buttom */}

        <Button
          onClick={handleUpload}
          className="edit-publication-save-button"
          variant="contained"
          sx={{
            backgroundColor: isButtonDisabled ? "customColors.grisClaro" : "customColors.violeta",
            ":active": { backgroundColor: isButtonDisabled ? "customColors.grisClaro" : "#6E20DB" },
            ":hover": { backgroundColor: isButtonDisabled ? "customColors.grisClaro" : "#6E20DB" },
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>Guardar Cambios</Typography>
        </Button>
      </Box>
      {showAlert && status === "fail" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="fail" />}
      {showAlert && status === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="success" />}
    </>
  );
}
