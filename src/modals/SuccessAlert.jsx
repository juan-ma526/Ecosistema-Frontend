import * as React from "react";
import Slide from "@mui/material/Slide";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DialogActions, Typography, Dialog, Button, Alert, Box } from "@mui/material";
import "./modal.css";

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
      >
        <Box
          height="hug"
          width="fixed"
          alignItems="center"
          gap={4}
          p={2}
          mx={2}
          sx={{borderRadius:"28px"}}
        >
          <Alert
            iconMapping={{
              success: <CheckCircleOutlineIcon fontSize="large" />,
              error: <HighlightOffIcon fontSize="large" />,
            }}
            sx={{ textAlign: "center", justifyContent: "center", bgcolor: "#FAFAFA" }}
          />
          <Typography variant="h6" sx={{ p: 0 }}>Cambios guardados con éxito</Typography>
          <DialogActions>
            <Button sx={{ color: "#4E169D" }} onClick={handleClose}>
              <Typography sx={{fontWeight: 600, fontSize: 14}}>Aceptar</Typography>
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
