// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import EditTitle from "./components/EditTitle";
import EditSubtitle from "./components/EditSubtitle";
import "./edit.css";
import Form from "./components/Form";
import ButtonCharge from "../components/ButtonCharge";
import StandardImageList from "./components/ImageList";
import ErrorAlert from "../../../modals/ErrorAlert";
import SuccessAlert from "../../../modals/SuccessAlert";
import { fields } from "./utils/fields";
import { validateEmail, validatePhone } from "./utils/utils";
import axios from "axios";
import { UserContext } from "../../../context/userContext";

export default function EditPublication() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [values, setValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: field.defaultValue || "" }), {})
  );
  const [errors, setErrors] = useState({});

  const { user } = useContext(UserContext);
  const userId = user.usuarioId;
  const url = `http://localhost:8080/editarProveedor/usuario/${userId}/`;

  const editForm = async (formData) => {
    const {
      userId,
      nombreId,
      tipoId,
      categoriaId,
      emailId,
      telefonoId,
      facebookId,
      instagramId,
      paisId,
      provinciaId,
      ciudadId,
      descripId,
      images,
    } = formData;

    const dataToEdit = {
      usuarioId: userId,
      proveedorDto: {
        nombre: nombreId,
        tipoProveedor: tipoId,
        descripcion: descripId,
        email: emailId,
        telefono: telefonoId,
        facebook: facebookId,
        instagram: instagramId,
        ciudad: ciudadId,
        paisId: paisId,
        provinciaId: provinciaId,
        categoriaId: categoriaId,
      },
      imageModels: images,
    };

    try {
      const response = await axios.put(url, dataToEdit, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };

  const handleSubmit = () => {
    let newErrors = {};
    fields.forEach((field) => {
      if (!values[field.id]) {
        newErrors[field.id] = "Este campo es obligatorio";
      } else if (field.id === "Correo" && !validateEmail(values[field.id])) {
        newErrors[field.id] = "Ingrese un correo válido";
      } else if (field.id === "Telefono" && !validatePhone(values[field.id])) {
        newErrors[field.id] = "Ingrese un teléfono válido";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setAlertType("success");
    } else {
      setAlertType("error");
    }
    setShowAlert(true);
  };

  const handleButtonCharge = async () => {
    handleSubmit(); // Valida los campos y actualiza el estado de `errors`

    if (Object.keys(errors).length === 0) {
      // Si no hay errores
      try {
        await editForm(values); // Envía el formulario
        setAlertType("success");
      } catch (error) {
        setAlertType("error");
      }
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertType(null);
  };

  return (
    <Box>
      <section className="titles">
        <EditTitle />
        <EditSubtitle />
      </section>
      <Form values={values} setValues={setValues} errors={errors} setErrors={setErrors} />
      <StandardImageList />
      <ButtonCharge
        sx={{
          marginTop: "40px",
          top: "-25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleButtonCharge}
      />
      {showAlert && alertType === "error" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="edit" />}
      {showAlert && alertType === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="edit" />}
    </Box>
  );
}
