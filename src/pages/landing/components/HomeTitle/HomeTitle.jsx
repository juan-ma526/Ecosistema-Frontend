import { Box, Typography } from "@mui/material";
import SearchBar from "../../../../components/Searchbar";
import "../../../../components/searchbar.css";
import "./HomeTitle.css";

export const HomeTitle = () => {
  return (
    <Box className="container-home">
      <SearchBar />
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          color: "customColors.blanco",
          fontSize: "18px",
          fontWeight: 700,
          top: "115px",
          left: "16px",
        }}
      >
        RED DE IMPACTO
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          color: "customColors.blanco",
          fontSize: "24px",
          fontWeight: 500,
          top: "144px",
          left: "16px",
          width: "240px",
        }}
      >
        Conectamos proveedores y personas comprometidas con el impacto y el consumo consciente
      </Typography>
    </Box>
  );
};
