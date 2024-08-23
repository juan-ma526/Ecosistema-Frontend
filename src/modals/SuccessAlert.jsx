/* eslint-disable react/prop-types */
import * as React from "react";
import "./modal.css";
import Slide from "@mui/material/Slide";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { DialogActions, Dialog, Button, Alert, Typography, DialogContent } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SuccessAlert({ open, onClose, type }) {
  const getAlertTitle = () => {
    switch (type) {
      case "load":
        return {
          title: "Producto/Servicio cargado con éxito",
        };
      case "edit":
        return {
          title: "Cambios guardados con éxito",
        };
      case "feedback":
        return {
          title: "Estado modificado con éxito.",
        };
      case "success":
        return {
          title: "Publicación creada con éxito.",
        };
      default:
        return {
          title: "Operación realizada con éxito",
        };
    }
  };

  const { title, width } = getAlertTitle();

  return (
    <React.Fragment>
      <Dialog
        className="alert"
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        sx={{ width, maxWidth: "100%", height: "224px", top: "324px" }} // Usa el ancho ajustado y asegura que no exceda el 100% del contenedor
      >
        {/*Contenido icono*/}
        <Alert
          sx={{ justifyContent: "center", bgcolor: "background.paper", alignItems: "start", marginTop: "-16px" }}
          icon={<CheckCircleOutlineIcon />}
          severity="success"
        />

        {/*Contenido texto*/}
        <DialogContent
          sx={{
            width: "100%", // Usa el 100% del ancho del diálogo
            height: "152px",
            padding: "0px 24px",
            display: "flex",
            flexDirection: "column", // Ajusta la dirección del contenido
            justifyContent: "center", // Centra verticalmente el contenido
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: "18px", textAlign: "center", lineHeight: "32px" }}>
            {title}
          </Typography>
        </DialogContent>
        {/*Contenido botones*/}
        <DialogActions
          sx={{ display: "flex", justifyContent: "end", width: "100%", height: "48px", paddingRight: "16px" }}
        >
          <Button
            sx={{ color: "#4E169D", width: "80px", height: "40px", borderRadius: "100px", gap: "8px" }}
            onClick={onClose}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "14px", textTransform: "none" }}>Aceptar</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
