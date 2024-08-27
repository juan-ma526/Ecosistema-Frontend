import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    customColors: {
      blanco: "#FAFAFA",
      grisClaro: "#EAEAEA",
      grisMedio: "#D2D2D2",
      grisOscuro: "#505050",
      negro: "#222222",
      violeta: "#4E169D",
      verde: "#00A364",
      verdeSuccess: "#1D9129",
      naranja: "#B86B11",
      rojo: "#BC1111",
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default theme;
