import * as React from "react";
import "./modal.css";
import Slide from "@mui/material/Slide";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { DialogActions, Dialog, Button, Alert, Typography, DialogContent } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SuccessAlert() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Enviar Mensaje
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        sx={{height: "208px", top: "324px"}}
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
            width: "328px",
            height: "104px",
            padding: "0px 24px",
            gap: "14px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: "18px", textAlign: "center" }}>
            Cambios guardados con éxito.
          </Typography>
        </DialogContent>
        {/*Contenido botones*/}
        <DialogActions
          sx={{ display: "flex", justifyContent: "end", width: "328px", height: "48px", paddingRight: "16px" }}
        >
          <Button
            sx={{ color: "#4E169D", width: "80px", height: "40px", borderRadius: "100px", gap: "8px"}}
            onClick={handleClose}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "14px", textTransform: "none" }}>Aceptar</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
