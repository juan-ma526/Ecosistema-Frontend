import * as React from "react";
import Slide from "@mui/material/Slide";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DialogActions, Dialog, Button, Alert, Box, Typography } from "@mui/material";
import "./modal.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ErrorAlert() {
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
        <Box height="hug" width="fixed" alignItems="center" p={2} mx={4}>
          <Alert
            sx={{ textAlign: "center", justifyContent: "center", bgcolor: "background.paper" }}
            icon={<HighlightOffIcon fontSize="large" />}
            severity="error"
          />

          <Typography variant="h6">Lo sentimos, los cambios no se</Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            pudieron guardar.
          </Typography>
          <Typography variant="body1" sx={{ pt: 2 }}>
            Por favor, volvé a intentarlo.
          </Typography>
          <DialogActions>
            <Button sx={{ color: "#4E169D"}} onClick={handleClose}>
              Cancelar
            </Button>
            <Button sx={{ color: "#4E169D"}} onClick={handleClose}>
              Intentar nuevamente
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
