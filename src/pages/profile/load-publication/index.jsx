// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
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

/*  TODO: useEffect(() => {
  const fetchProductCount = async () => {
    try {
      const response = await axios.get('/api/product-count', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductsCreated(response.data.count);
    } catch (error) {
      console.error("Error fetching product count:", error);
    }
  };
  fetchProductCount();
}, [token]); */

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
      DescripcionDelProducto = "Producto de prueba",
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

    console.log("Pais:", Pais);

    const formDataToSend = new FormData();
    formDataToSend.append("usuarioId", userId);
    formDataToSend.append("nombre", Nombre);
    formDataToSend.append("tipoProveedor", Descripcion);
    formDataToSend.append("descripcion", DescripcionDelProducto);
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

    console.log(formDataToSend, "formDataToSend");

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
      await sendForm(formData);
      setAlertType("success");
      setProductsCreated((prev) => prev + 1);
    } catch (error) {
      setAlertType("error");
    }
    setShowAlert(true);
  };

  const handleButtonCharge = () => {
    let newErrors = {};
    if (productsCreated >= 4) {
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

      {showAlert && alertType === "error" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} type="load" />}
      {showAlert && alertType === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} type="load" />}
    </Box>
  );
}
