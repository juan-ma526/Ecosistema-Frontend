/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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

export default function EditPublication() {
  const [state, setState] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [values, setValues] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.id]: field.defaultValue || "" }), {})
  );
  const [errors, setErrors] = useState({});

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

  const handleButtonCharge = () => {
    handleSubmit();
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
          top: "-18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleButtonCharge}
      />

      {showAlert && alertType === "error" && <ErrorAlert open={showAlert} onClose={handleCloseAlert} />}
      {showAlert && alertType === "success" && <SuccessAlert open={showAlert} onClose={handleCloseAlert} />}
    </Box>
  );
}
