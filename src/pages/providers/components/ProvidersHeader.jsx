// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { Box, Typography } from "@mui/material";
import "../Providers.css";
import SearchBar from "../../../components/Searchbar";

function ProvidersHeaders() {
  return (
    <Box className="ProvidersHeader">
      <div className="content">
        <div className="searchbar">
          <SearchBar />
        </div>
        <Typography
          variant="h1"
          sx={{
            color: "customColors.blanco",
            fontSize: "18px",
            fontWeight: 700,
            paddingTop: "40px",
          }}
        >
          PROVEEDORES
        </Typography>
        <Typography
          sx={{
            color: "customColors.blanco",
            fontSize: "28px",
            fontWeight: 500,
            paddingTop: "12px",
          }}
        >
          Directorio ECO
        </Typography>
        <Typography
          sx={{
            color: "customColors.blanco",
            fontSize: "24px",
            fontWeight: 400,
            paddingTop: "12px",
            width: "80%",
          }}
        >
          Descubrí a quienes comparten tu pasión por el impacto positivo y la sostenibilidad
        </Typography>
      </div>
    </Box>
  );
}

export default ProvidersHeaders;
