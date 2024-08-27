import { Box, Typography } from "@mui/material";
import SearchBar from "../../../components/Searchbar";
import "./PublicationsTitle.css";

export const PublicationsTitle = () => {
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
        PUBLICACIONES
      </Typography>
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          color: "customColors.blanco",
          fontSize: "28px",
          fontWeight: 500,
          top: "150px",
          left: "16px",
          width: "240px",
        }}
      >
        Historias de impacto
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          color: "customColors.blanco",
          fontSize: "24px",
          fontWeight: 400,
          top: "229px",
          left: "16px",
          width: "240px",
        }}
      >
        Encontrá inspiración y explorá las noticias y tendencias que están dando forma a un mundo más verde
      </Typography>
    </Box>
  );
};
