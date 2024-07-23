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

export default function EditPublication() {
  const [state, setState] = useState("error");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const [alertOpen, setAlertOpen] = useState(true);

  const handleButtonCharge = () => {
    setShowAlert(true);
    setAlertOpen(true);
    if (state === "error") {
      setAlertType("error");
    } else {
      setAlertType("success");
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertType(null);
    setAlertOpen(false);
  };

  return (
    <Box>
      <section className="titles">
        <EditTitle />
        <EditSubtitle />
      </section>
      <Form />
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

      {showAlert && alertType === "error" && <ErrorAlert open={alertOpen} onClose={handleCloseAlert} />}
      {showAlert && alertType === "success" && <SuccessAlert open={alertOpen} onClose={handleCloseAlert} />}
    </Box>
  );
}
