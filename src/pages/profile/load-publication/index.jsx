// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import EditTitle from "./components/LoadTitle";
import EditSubtitle from "./components/LoadSubtitle";
import "./load.css";
import Form from "./components/Form";
import ButtonCharge from "../components/ButtonCharge";
import ErrorAlert from "../../../modals/ErrorAlert";
import SuccessAlert from "../../../modals/SuccessAlert";
import { fields } from "./utils/fields";
import { validateEmail, validatePhone } from "./utils/utils";
import ButtonImage from "./components/ButtonImage";
import axios from "axios";
import { UserContext } from "../../../context/userContext";

export default function LoadPublication() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [values, setValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: field.defaultValue || "" }), {})
  );
  const [errors, setErrors] = useState({});
  const [hasErrors, setHasErrors] = useState(true);

  useEffect(() => {
    const anyErrors = fields.some((field) => {
      const value = values[field.id];
      if (!value) return true;
      if (field.id === "Correo" && !validateEmail(value)) return true;
      if (field.id === "Telefono" && !validatePhone(value)) return true;
      return false;
    });
    setHasErrors(anyErrors);
  }, [values, errors]);

  const { user } = React.useContext(UserContext);
  const usuarioId = user.usuarioId;

  const url = `http://localhost:8080/crearProveedor/usuario/${usuarioId}/`;

  const sendForm = async (formData) => {
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

    const dataToSend = {
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
      const response = await axios.post(url, dataToSend, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      return response.data;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await sendForm(formData);
      setAlertType("success");
    } catch (error) {
      setAlertType("error");
    }
    setShowAlert(true);
  };

  const handleButtonCharge = () => {
    // Verificar y establecer los errores antes de enviar el formulario
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
      handleSubmit(values);
    } else {
      setAlertType("error");
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
      <Form values={values} setValues={setValues} errors={errors} setErrors={setErrors} onSubmit={handleSubmit} />
      <ButtonImage />
      <ButtonCharge
        sx={{
          marginTop: "40px",
          top: "-20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleButtonCharge}
        state={hasErrors ? "error" : "success"}
      />

      {showAlert && alertType === "error" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="load" />}
      {showAlert && alertType === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="load" />}
    </Box>
  );
}
