/* eslint-disable react/prop-types */
import * as React from "react";
import "./modal.css";
import Slide from "@mui/material/Slide";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DialogActions, Dialog, Button, Alert, Typography, DialogContent } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ErrorAlert({ open, onClose }) {
  return (
    <React.Fragment>
      <Dialog
        className="alert"
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        {/*Contenido icono*/}
        <Alert
          sx={{ justifyContent: "center", bgcolor: "background.paper", alignItems: "start", marginTop: "-16px" }}
          icon={<HighlightOffIcon />}
          severity="error"
        />

        {/*Contenido texto*/}
        <DialogContent sx={{ width: "328px", height: "104px", padding: "0px 24px", gap: "14px", display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: 400, fontSize: "18px", textAlign: "center" }}>
            Lo sentimos, los cambios no pudieron ser guardados.
          </Typography>

          <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>Por favor, volvé a intentarlo.</Typography>
        </DialogContent>
        {/*Contenido botones*/}
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "328px", height: "48px" }}
        >
          <Button
            sx={{ color: "#4E169D", width: "80px", height: "40px", borderRadius: "100px", gap: "8px" }}
            onClick={onClose}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "14px", textTransform: "none" }}>Cancelar</Typography>
          </Button>
          <Button
            sx={{ color: "#4E169D", width: "153px", height: "20px", borderRadius: "100px", gap: "8px" }}
            onClick={onClose}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "14px", textTransform: "none" }}>Intentar nuevamente</Typography>
          </Button>
        </DialogActions>
        {/*ICONO ALERTA*/}
      </Dialog>
    </React.Fragment>
  );
}