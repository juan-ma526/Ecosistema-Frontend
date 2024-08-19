// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
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
import { useNavigate } from "react-router-dom";

export default function LoadPublication() {
  const { user } = useContext(UserContext);
  const token = user?.token || JSON.parse(localStorage.getItem("token"));
  const usuarioId = user?.usuarioId || "defaultId";

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [values, setValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: field.defaultValue || "" }), {})
  );
  const [errors, setErrors] = useState({});
  const [hasErrors, setHasErrors] = useState(true);
  const [productsCreated, setProductsCreated] = useState(0);
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

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

  const url = `http://localhost:8080/crearProveedor/usuario/${usuarioId}`;

  const sendForm = async (formData) => {
    const {
      userId = usuarioId,
      Nombre,
      Descripcion_del_producto,
      Categoria,
      Correo,
      Telefono,
      Facebook,
      Instagram,
      Pais = 1,
      Provincia,
      Ciudad,
      Descripcion,
      images,
    } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("usuarioId", userId);
    formDataToSend.append("nombre", Nombre);
    formDataToSend.append("tipoProveedor", Descripcion);
    formDataToSend.append("descripcion", Descripcion_del_producto);
    formDataToSend.append("email", Correo);
    formDataToSend.append("telefono", Telefono);
    formDataToSend.append("facebook", Facebook);
    formDataToSend.append("instagram", Instagram);
    formDataToSend.append("ciudad", Ciudad);
    formDataToSend.append("paisId", Pais);
    formDataToSend.append("provinciaId", Provincia);
    formDataToSend.append("categoriaId", Categoria);

    if (Array.isArray(images)) {
      images.forEach((image) => {
        if (image) {
          formDataToSend.append("imagenes", image);
        }
      });
    }

    try {
      const response = await axios.post(url, formDataToSend, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al enviar el formulario:", error.response || error);
      throw error;
    }
  };

  const handleSubmit = async (formData) => {
    try {
      setLoading(true); // Mostrar indicador de carga
      await sendForm(formData);
      setAlertType("success");
      setProductsCreated((prev) => prev + 1);
      setFormSubmitted(true);
    } catch (error) {
      setAlertType("error");
      setFormSubmitted(false);
    } finally {
      setLoading(false); // Ocultar indicador de carga
      setShowAlert(true);
    }
  };

  const handleButtonCharge = async () => {
    let newErrors = {};
    if (productsCreated >= 3) {
      setAlertType("error");
      setShowAlert(true);
      return;
    }
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
      try {
        const formData = {
          ...values,
        };

        await handleSubmit(formData);
      } catch (error) {
        setAlertType("error");
        setShowAlert(true);
      }
    } else {
      setAlertType("error");
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertType(null);
  };

  // REDIRECCIÓN A PERFIL

  useEffect(() => {
    if (formSubmitted === true && alertType === null && !showAlert) {
      navigate("/profile"); // Redirigir solo después de que el formulario haya sido enviado y la alerta cerrada
    }
  }, [formSubmitted, alertType, showAlert, navigate]);

  const handleImagesChange = (newImages) => {
    setValues((prevValues) => ({
      ...prevValues,
      images: newImages,
    }));
  };

  return (
    <Box>
      <section className="titles">
        <EditTitle />
        <EditSubtitle />
      </section>
      <Form values={values} setValues={setValues} errors={errors} setErrors={setErrors} onSubmit={handleSubmit} />
      <ButtonImage onImagesChange={handleImagesChange} />
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

      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 2,
            borderRadius: 1,
          }}
        >
          <CircularProgress color="secondary" />
          <Typography variant="h6" sx={{ color: "white", marginTop: 2 }}>
            Cargando...
          </Typography>
        </Box>
      )}

      {showAlert && alertType === "error" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="load" />}
      {showAlert && alertType === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="load" />}
    </Box>
  );
}
